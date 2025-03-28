// Import modul Express, child_process, dan fs
const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// Definisikan port
const PORT = 3000;

// Path ke folder luar (satu level di atas my-backend-app)
const parentFolder = path.join(__dirname, '../scripts');

// Route untuk halaman utama
app.get('/', (req, res) => {
  // Baca semua file di folder luar
  fs.readdir(parentFolder, (err, files) => {
    if (err) {
      console.error(`Error membaca folder: ${err.message}`);
      return res.status(500).send('Gagal membaca folder.');
    }

    // Filter hanya file .js
    const jsFiles = files.filter(file => file.endsWith('.js'));

    // Buat list link untuk setiap file .js
    const links = jsFiles.map(file => `
      <li>
        <a href="/run-script?file=${file}">Jalankan ${file}</a>
      </li>
    `).join('');

    // Kirim respons dengan list link
    res.send(`
      <h1>Daftar Script .js</h1>
      <ul>${links}</ul>
    `);
  });
});

// Route untuk endpoint /about
app.get('/about', (req, res) => {
  res.send('Ini adalah halaman tentang kami.');
});

// Route untuk mengeksekusi file .js
app.get('/run-script', (req, res) => {
  const fileName = req.query.file; // Ambil nama file dari query parameter
  const scriptPath = path.join(parentFolder, fileName); // Buat path lengkap
  const args = "argumen1 argumen2"; // Ganti dengan argumen yang diperlukan

  console.log(`Mencoba menjalankan script: ${scriptPath}`); // Log path

  // Eksekusi file .js dengan argumen
  exec(`node "${scriptPath}" ${args}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      console.error(`Detail Error: ${error.stack}`); // Log detail error
      return res.status(500).send('Gagal mengeksekusi script.');
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).send('Ada kesalahan dalam script.');
    }
    console.log(`Output: ${stdout}`); // Log output
    res.send(`Script berhasil dijalankan. Output: ${stdout}`);
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

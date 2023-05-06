// Mendeklarasikan hitungVokalSempurna sebagai function
const hitungVokalSempurna = () => {
  let hasil = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };
  // process.argv sebagai funtion mengambil data di command line
  let argumen = process.argv;
  // argumen[2] untuk mengambil data dari array yang ada di command line index ke 2
  console.log("Kalimat:", argumen[2]);
  // ini kita memecah kalimat menjadi per-huruf
  const huruf = argumen[2].split("");
  // kita akan melooping data yang sudah terurai dan menambahkan setiap huruf yang sama ke value di variable hasil
  for (let i = 0; i < huruf.length; i++) {
    if (huruf[i] === "a") {
      hasil.a++;
    } else if (huruf[i] === "i") {
      hasil.i++;
    } else if (huruf[i] === "u") {
      hasil.u++;
    } else if (huruf[i] === "e") {
      hasil.e++;
    } else if (huruf[i] === "o") {
      hasil.o++;
    }
  }
  // kita akan mencetak hasilnya dengan console.log menggunakan backtick agar bisa menjalankan perintah tanpa terputus
  console.log(`Jumlah huruf vokal
  ------------------
  A: ${hasil.a}
  I: ${hasil.i}
  U: ${hasil.u}
  E: ${hasil.e}
  O: ${hasil.o}
  Total: ${hasil.a + hasil.i + hasil.u + hasil.e + hasil.o}
  `);
  return hasil;
};

// kita menjalankan function hitungVokalSempurna
hitungVokalSempurna();
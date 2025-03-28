// Mendeklarasikan hitungVokalSempurna sebagai function
function hitungVokalSempurna() {
  const kata = "contoh kata"; // Ganti dengan input yang sesuai
  const huruf = kata.split("");
  let jumlahVokal = 0;

  for (let i = 0; i < huruf.length; i++) {
    if (
      huruf[i] === "a" ||
      huruf[i] === "i" ||
      huruf[i] === "u" ||
      huruf[i] === "e" ||
      huruf[i] === "o"
    ) {
      jumlahVokal++;
    }
  }

  console.log(`Jumlah vokal dalam kata "${kata}" adalah: ${jumlahVokal}`);
}

// kita menjalankan function hitungVokalSempurna
hitungVokalSempurna();
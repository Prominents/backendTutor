// Mendeklarasikan hitungVokalSempurna sebagai function
const hitungVokalSempurna = () => {
  let hasil = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };
  let argumen = process.argv;
  console.log("Kalimat:", argumen[2]);
  const kata = argumen[2].split("");
  for (let i = 0; i < kata.length; i++) {
    if (kata[i] === "a") {
      hasil.a++;
    } else if (kata[i] === "i") {
      hasil.i++;
    } else if (kata[i] === "u") {
      hasil.u++;
    } else if (kata[i] === "e") {
      hasil.e++;
    } else if (kata[i] === "o") {
      hasil.o++;
    }
  }
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

hitungVokalSempurna();

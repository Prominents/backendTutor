// If...else
let umur = 17;
let tinggi = 163;

if (umur >= 17) {
  if (tinggi < 150) {
    console.log("tidak boleh masuk");
  } else {
    console.log("boleh masuk");
  }
}

// nomor ganjil genap
const nomor = 5;

//check if the number is even/genap
if (nomor % 2 == 0) {
  console.log("Ini nomor genap.");
}
// if the number is odd/ganjil
else {
  console.log("Ini nomor ganjil.");
}

// switch...case
let nilai = 87;

switch (true) {
  case nilai >= 90:
    console.log("Grade A");
    break;
  case nilai >= 80:
    console.log("Grade B");
    break;
  case nilai >= 70:
    console.log("Grade C");
    break;
  case nilai >= 60:
    console.log("Grade D");
    break;
  default:
    console.log("Grade F");
}

// condition
let kupon = "free";
let price = 100000;
let total = 0;

switch (kupon) {
  case "free":
    if (price >= 50000) {
      total = price * 0.9;
    } else if (price >= 30000 && price < 50000) {
      total = price * 0.95;
    } else {
      total = price * 0.975;
    }
    break;
  case "free15%":
    if (price >= 30000) {
      total = price * 0.05;
    } else {
      total = price;
    }
    break;
}
console.log(total);

// Looping
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

let h = 1;
while (h <= 10) {
  console.log(h);
  h++;
}

// Factor number
let number = 15;
let factor = 0;
for (let x = 1; x <= number; x++) {
  if (number % x == 0) {
    factor++;
  }
}
console.log(`faktor dari ${number} adalah ${factor}`);

// array
let str = "eating";
let result = str.split();
console.log(result);

let result1 = [];
for (let y = 0; y < str.length; y++) {
  result1.push(str[y]);
}
console.log(result1);
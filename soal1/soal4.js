// Contoh penggunaan Asynchronous:
console.log("Mulai");

setTimeout(function() {
  console.log("Tugas pertama selesai");
}, 3000);

console.log("Melakukan tugas lain");

setTimeout(function() {
  console.log("Tugas kedua selesai");
}, 1000);

console.log("Selesai");
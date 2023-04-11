**Apa yang kamu ketahui tentang synchronous dan asynchronous programming di Javascript?**

---

```
Synchronous programming adalah cara tradisional yang mengeksekusi tugas secara berurutan atau satu per satu. Tugas pertama harus selesai terlebih dahulu sebelum tugas berikutnya dieksekusi. Selama tugas saat dieksekusi, program akan terblokir atau berhenti untuk menunggu hasil dari tugas tersebut selesai dijalankan. Ini dapat menyebabkan masalah performa dalam aplikasi ketika tugas yang dilakukan membutuhkan waktu yang lama untuk selesai.

Contoh Penggunaan synchronous:
console.log("Mulai");

for (var i = 0; i < 3; i++) {
  var result = Math.pow(2, i);
  console.log(result);
}

console.log("Selesai");
 outputnya:
 Mulai
1
2
4
Selesai

----------------------------------------------------------------

Asynchronous programming, di sisi lain, memungkinkan program untuk terus berjalan ketika tugas sedang dieksekusi. Saat tugas sedang berjalan, program dapat melakukan tugas lainnya atau menunggu input dari pengguna tanpa terhenti. Ini dapat meningkatkan performa aplikasi dan menghindari masalah kinerja yang terkait dengan synchronous programming.

Contoh penggunaan Asynchronous:
console.log("Mulai");

setTimeout(function() {
  console.log("Tugas pertama selesai");
}, 3000);

console.log("Melakukan tugas lain");

setTimeout(function() {
  console.log("Tugas kedua selesai");
}, 1000);

console.log("Selesai");

outputnya :
Mulai
Melakukan tugas lain
Selesai
Tugas kedua selesai
Tugas pertama selesai

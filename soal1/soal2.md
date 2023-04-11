**Apakah perbedaan antara percabangan if-else dengan switch-case? Berikan contohnya dalam bentuk code sederhana!**

---

```
percabangan if-else dan switch-case adalah dua cara yang berbeda untuk membuat keputusan dalam program JS
Percabangan if-else memungkinkan untuk mengevaluasi sebuah kondisi , kemudian mejalankan satu blok code jika kondisinya benar dan blok code yang berbeda jika kondisinya salah.

c

----------------------------------------------------------------
Switch-case, di sisi lain, memungkinkan untuk mengevaluasi sebuah ekspresi dan kemudian menjalankan kode yang sesuai dengan nilai ekspresi. Setiap kasus dalam switch-case berisi nilai yang mungkin dari ekspresi tersebut, dan kode yang akan dijalankan jika nilai tersebut cocok.
contoh penggunaan switch-case:
var day = 2;
switch (day) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  default:
    console.log("Hari tidak dikenali");
}
Perbedaan utama antara if-else dan switch-case adalah cara mereka mengevaluasi kondisi. Jika hanya ada beberapa kasus yang mungkin, switch-case biasanya lebih mudah dan lebih efisien untuk digunakan. Namun, jika kondisinya kompleks dan memiliki banyak kemungkinan, if-else mungkin lebih tepat.
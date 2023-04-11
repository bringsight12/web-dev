**Apakah yang dimaksud dengan function dan method dalam Javascript? Jelaskan perbedaannya! dan berikan contohnya dalam bentuk code sederhana**

---

```
FUCTION adalah blok kode yang dapat di panggil dan di gunakan kembali untuk melakukan tugas tertentu. FUNCTION dapat menerima argumen sebagai input dan mengembaikan sebagai output.

CONTOH PENGGUNAAN FUNCTION:
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(2, 3); // hasil = 5

----------------------------------------------------------------

METHOD adalah function yang dikaitkan dengan sebuah objek. method dapat di akses melalui objek itu sendiri dan dapat mengakses properti objek serta dapat memanipulasinya

CONTOH PENGGUNAAN METHOD:
var mobil = {
  merek: "Toyota",
  warna: "Hitam",
  tahun: 2010,
  hidupkanMesin: function() {
    console.log("Mesin mobil dihidupkan");
  }
};

mobil.hidupkanMesin(); // output: "Mesin mobil dihidupkan"

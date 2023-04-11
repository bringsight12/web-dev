// CONTOH PENGGUNAAN FUNCTION:
function tambah(a, b) {
  return a + b;
}

var hasil = tambah(2, 3);

// CONTOH PENGGUNAAN METHOD:
var mobil = {
  merek: "Toyota",
  warna: "Hitam",
  tahun: 2010,
  hidupkanMesin: function() {
    console.log("Mesin mobil dihidupkan");
  }
};
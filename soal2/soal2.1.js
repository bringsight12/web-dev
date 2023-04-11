function hitungRataRataUN(bahasaIndonesia, bahasaInggris, matematika, ipa) {
  // input
  if (!bahasaIndonesia || !bahasaInggris || !matematika || !ipa) {
    return "Semua nilai harus diisi!";
  }

  // Menghitung arata-rata UN
  const rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;

  // Menentukan grade berdasarkan rata-rata UN
  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata <= 89) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata <= 79) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata <= 69) {
    grade = "D";
  } else {
    grade = "E";
  }

  return `Rata-rata UN: ${rataRata}, Grade: ${grade}`;
}

// Contoh penggunaan:
console.log(hitungRataRataUN(80, 90, 70, 85));

console.log(hitungRataRataUN(80, 0, 70, null));

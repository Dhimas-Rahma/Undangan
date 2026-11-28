/* =====================================================
   EDIT HERE — semua data undangan ada di file ini
   ===================================================== */
window.WEDDING = {
  event: "Ngunduh Mantu",
  groom: { short: "Dhimas", full: "Dhimas Winata", father: "Sarjono", mother: "Nur Sari" },
  bride: { short: "Rahma", full: "Rahma Maulinda Dinawa Sari", father: "Syarifuddin", mother: "Bidan Setyowati" },

  // Format ISO + zona waktu WIB (+07:00)
  dateISO: "2026-12-23T09:30:00+07:00",
  dateText: "Rabu, 23 Desember 2026",
  timeText: "09.30 WIB – selesai",

  venueName: "Warung Steak Nusukan",
  venueAddress: "Warung Steak Nusukan, Nusukan, Surakarta",
  // Ganti dengan link Google Maps asli (Share → Copy link) agar lebih akurat
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Warung+Steak+Nusukan+Surakarta",
  mapsEmbed: "https://maps.google.com/maps?q=Warung+Steak+Nusukan+Surakarta&output=embed",

  gifts: [
    { name: "DHIMAS WINATA", bank: "Bank Mandiri", number: "1380025932307" },
    { name: "RAHMA MAULINDA DINAWA SARI", bank: "Bank Mandiri", number: "1840014729196" }
  ],

  // URL Web App dari Google Apps Script (lihat README.md langkah 3)
  scriptURL: "https://script.google.com/macros/s/AKfycbyj11XJVuOY7GCeBlQlzJGpQgICAzBykSwggMNUBLr6acue21VzI1Qb5ezAq7Ilqc-T/exec",

  refreshSeconds: 20 // interval refresh ucapan
};

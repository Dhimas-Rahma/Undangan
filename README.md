# Undangan Digital — Dhimas & Rahma (Ngunduh Mantu)

Static website (HTML/CSS/JS, tanpa build) · RSVP → Google Sheets via Apps Script · Hosting: GitHub Pages.

```
index.html          halaman undangan
config.js           ← SEMUA data (nama, tanggal, lokasi, rekening, URL script) diedit di sini
img/                foto yang sudah dioptimasi
audio/music.mp3     musik (80 kbps)
apps-script/Code.gs backend Google Sheets
```

## 1. Setup Google Sheets + Apps Script (±5 menit)
1. Buka https://sheets.new → beri nama **RSVP Wedding**.
2. Menu **Extensions → Apps Script**. Hapus kode bawaan, paste isi `apps-script/Code.gs`, klik **Save**.
3. Klik **Deploy → New deployment → ⚙ Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Klik **Deploy**, setujui izin (Authorize → pilih akun → Advanced → Go to project → Allow).
4. Salin **Web app URL** (berakhiran `/exec`) lalu tempel ke `scriptURL` di `config.js`.
5. Tes: buka URL tadi + `?action=wishes` di browser → harus tampil `{"ok":true,"wishes":[]}`.

Struktur sheet (tab **RSVP**, dibuat otomatis):

| A Timestamp | B Nama | C Kehadiran | D Jumlah Tamu | E Ucapan |
|---|---|---|---|---|

Ekspor: **File → Download → CSV/Excel**. Hapus ucapan tidak pantas: hapus barisnya di Sheet.

> Jika kode Apps Script diubah, buat **New version** di Deploy → Manage deployments (URL tetap sama).

## 2. Deploy ke GitHub Pages
```bash
git init && git add . && git commit -m "Wedding invitation"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
Di GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
URL: `https://USERNAME.github.io/REPO/`

## 3. Maintenance
- **Ganti data / tanggal / rekening / link maps**: edit `config.js`, commit, push (live ±1 menit).
- **Ganti foto**: timpa file di `img/` dengan nama sama (lebar ±1400px, JPG kualitas 70–75).
- **Nama tamu di cover**: bagikan link `https://USERNAME.github.io/REPO/?to=Nama+Tamu`.
- **Link Maps lebih akurat**: di Google Maps cari lokasi → Share → Copy link → tempel ke `mapsUrl`.
- Ucapan di-refresh otomatis tiap 20 detik (`refreshSeconds`).

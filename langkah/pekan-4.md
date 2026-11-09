# Pekan 4 · Spacing dan design token

Gaya website yang berulang dijadikan design token, supaya satu perubahan cukup di satu tempat. Token dan component ini juga bahan web app mulai pekan 5.

## 4.1 · Spacing scale, Button, dan Input *(kamu)*

- **Kenapa:** jarak yang konsisten membuat pengelompokan terbaca (proximity). Button dan Input dipakai di mana-mana, jadi aturannya ditulis sekali.
- **Yang kamu lakukan:** tulis spacing scale dan aturan dua component dasar.
- **Template:**
  ```
  Spacing scale: [4, 8, 12, 16, 24, 32, …], dipakai untuk [jarak dalam grup] dan [jarak antar grup]
  Button: varian [primary, sekunder], tinggi [px], hover [..], fokus [seperti apa], disabled [..], target sentuh minimal 44px
  Input: label di [atas/samping], hint [di mana], error [warna dan posisi], fokus [seperti apa], disabled [..]
  ```
- **Pertanyaan pemandu:** berapa jarak di dalam satu grup dibanding antar grup? Bagaimana user keyboard tahu sedang di tombol mana?
- **Masuk ke:** `CLAUDE.md` › bagian **6. Token dan component**.
- **Cukup kalau:** jarak dalam grup lebih kecil dari jarak antar grup, dan fokus serta target sentuh tertulis.

## 4.2 · Pindahkan ke tokens.css *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code memindahkan warna, ukuran, dan spacing yang berulang ke `tokens.css`.
- **Cukup kalau:** nilai di `tokens.css` sama dengan keputusanmu di bagian 5 dan 6.

## 4.3 · Button dan Input dari token *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code membuat Button dan Input dari token dan memakainya di semua halaman website. Cek fokusnya dengan tombol Tab.
- **Cukup kalau:** fokus terlihat, dan target sentuh minimal 44px.

## 4.4 · Tidak ada nilai lepas *(kamu)*

- **Yang kamu lakukan:** minta Claude Code mencari hex atau px di luar `tokens.css` yang memengaruhi tampilan (warna, ukuran font, spacing, radius), lalu putuskan: dipindah ke token, diganti ke nilai di scale, atau dibiarkan. Claude Code mengusulkan nilai terdekat untuk setiap kelompok, jadi kamu cukup setuju atau mengganti. Detail teknis seperti titik ganti layout di `@media` dan letter-spacing dicatat Claude Code tanpa ditanyakan.
- **Template:**
  ```
  Nilai lepas: [nilai] di [file] → [jadi token apa / dihapus], karena [alasan]
  ```
- **Cukup kalau:** tidak ada nilai lepas yang tersisa tanpa alasan.

## 4.5 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

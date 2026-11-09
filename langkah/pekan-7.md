# Pekan 7 · Usability dan accessibility

Flow kunci F1–F3, dari website sampai web app, diuji oleh orang lain dan dengan alat bantu, lalu temuan terbesar diperbaiki. Pekan ini ditutup Review fase 2 lewat Google Meet.

## 7.1 · Usability test *(kamu)*

- **Kenapa:** yang jelas bagimu belum tentu jelas bagi orang yang baru melihatnya.
- **Yang kamu lakukan:** minta 1–2 orang di luar kelas menjalani flow kunci F1–F3 sambil kamu amati tanpa membantu. Setiap flow menjawab masalah tertentu (kolom "Menjawab" di tabel Flow kunci). Ukurannya kolom "Berhasil kalau" dari masalah-masalah itu. Catat temuannya.
- **Template:**
  ```
  Flow yang diuji: [F1/F2/F3] · menjawab: [misalnya P1 M1, P2 M1]
  - [M..] berhasil kalau: [dari brief] · tercapai: [ya / tidak]
  - Temuan: [apa yang terjadi] · severity: [tinggi / sedang / rendah] · heuristic: [nama]
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **8. Aturan accessibility** › Temuan (atau dicatat di log).
- **Cukup kalau:** temuan menyebut apa yang dilakukan user, bukan pendapatnya, dan diurutkan dari severity tertinggi.

## 7.2 · Keyboard, screen reader, dan Lighthouse *(kamu)*

- **Yang kamu lakukan:** selesaikan flow kunci hanya dengan keyboard, lalu dengan screen reader, lalu jalankan Lighthouse atau axe. Tambahkan temuannya ke daftar 7.1.
- **Template:**
  ```
  - [keyboard / screen reader / Lighthouse]: [temuan] · severity: [..]
  ```
- **Cukup kalau:** flow utama sudah dicoba dengan ketiga cara.

## 7.3 · Perbaiki temuan terbesar *(Claude Code)*

- **Yang kamu lakukan:** pilih temuan yang diperbaiki dan alasannya, lalu ketik `/lanjut`.
- **Cukup kalau:** temuan dengan severity tertinggi sudah diperbaiki dan dicek ulang.

## 7.4 · Aturan accessibility *(kamu)*

- **Kenapa:** setiap temuan menjadi aturan, supaya halaman berikutnya tidak mengulang masalah yang sama.
- **Template:**
  ```
  - [aturan], karena [temuan yang mendasarinya]
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **8. Aturan accessibility**.
- **Cukup kalau:** setiap aturan bisa dicek di halaman mana pun.

## 7.5 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

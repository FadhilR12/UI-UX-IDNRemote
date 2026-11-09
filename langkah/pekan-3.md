# Pekan 3 · Typography dan warna website

Struktur website sudah ada dari wireframe. Pekan ini gaya ditambahkan: diterapkan ke seluruh halaman sekaligus supaya konsisten, lalu dinilai sebagai halaman utuh, baru di-polish per section.

## 3.1 · Font, type scale, dan palet *(kamu)*

- **Kenapa:** typography dan warna yang konsisten membuat hierarchy terbaca tanpa usaha. Keputusan ini dipakai di website sekarang, dan di web app mulai pekan 5.
- **Yang kamu lakukan:** pilih font dan susun type scale serta palet, berdasarkan bedah typography dan warna di Track Taste pekan ini.
- **Template:**
  ```
  Font: [nama], karena [alasan untuk user-mu]
  Type scale: judul [px/line-height], subjudul [..], body [..], label [..]
  Palet: latar [hex], teks [hex], aksen [hex] untuk [makna], sukses [hex], error [hex]
  ```
- **Pertanyaan pemandu:** apa kesan yang cocok untuk user dan produkmu? Berapa ukuran minimum yang nyaman dibaca di HP? Warna aksen dipakai untuk apa saja, dan untuk apa tidak?
- **Masuk ke:** `CLAUDE.md` › bagian **5. Typography dan warna**.
- **Cukup kalau:** setiap ukuran punya peran, palet punya makna, dan jumlahnya terbatas.

## 3.2 · Ganti mode tampilan ke high fidelity *(Claude Code)*

- **Yang kamu lakukan:** setujui pergantian mode. Claude Code mengganti bagian **3. Mode tampilan** menjadi `high fidelity`.
- **Cukup kalau:** mode sudah berganti.

## 3.3 · Terapkan ke seluruh halaman *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code menerapkan type scale dan palet ke seluruh halaman website sekaligus, tanpa mengubah struktur.
- **Cukup kalau:** struktur dari wireframe tetap utuh.

## 3.4 · Nilai halaman utuh, lalu polish *(kamu, lalu Claude Code)*

- **Yang kamu lakukan:** nilai halaman seperti 2.4, lalu tulis section yang perlu di-polish dan alasannya. Claude Code memperbaikinya satu per satu. Setelah itu audit: berapa ukuran font dan warna unik yang benar-benar terpakai? Nilai yang tidak ada di bagian 5 dikembalikan ke scale atau palet.
- **Template:**
  ```
  Polish: [section], karena [prinsip]
  Audit: [n] ukuran font, [n] warna; di luar scale: [daftar]
  ```
- **Cukup kalau:** tidak ada ukuran atau warna di luar keputusanmu.

## 3.5 · Cek kontras *(kamu)*

- **Kenapa:** teks yang tidak kontras tidak terbaca oleh sebagian user.
- **Yang kamu lakukan:** cek setiap pasangan teks dan latar dengan WebAIM Contrast Checker, perbaiki yang belum lolos.
- **Template:**
  ```
  | Teks | Latar | Rasio | Lolos |
  | [hex] | [hex] | [x:1] | ya / tidak, diganti ke [hex] |
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **5. Typography dan warna** › Pasangan warna yang lolos kontras.
- **Cukup kalau:** semua pasangan teks minimal 4.5:1.

## 3.6 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

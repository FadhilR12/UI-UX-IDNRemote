# Pekan 2 · Wireframe tiga halaman website

Pekan 2–4 fokus ke website, project pertama yang ditemui user. Web app menyusul di pekan 5. Pekan ini ketiga halaman website mulai punya bentuk, sebagai wireframe HTML abu-abu. Halaman dulu, baru section: kamu menentukan tujuan halaman dan urutan section-nya, Claude Code menggambar halaman utuh, lalu kamu memperbaiki section yang kurang efektif.

## 2.1 · Rencana Beranda website *(kamu)*

- **Kenapa:** halaman dibaca sebagai satu cerita menuju satu aksi utama. Urutan section adalah urutan keraguan user yang dijawab satu per satu.
- **Yang kamu lakukan:** tulis rencana Beranda sebelum menyentuh section mana pun. Berangkat dari isi yang menjawab M1–M3 di bagian 4 (langkah 1.3): isi itu yang disusun menjadi section. Pakai referensi dari library-mu.
- **Template:**
  ```
  Tujuan halaman: [apa yang harus dipahami atau dilakukan user di sini]
  Posisi di flow: datang dari [mana], lanjut ke [mana]
  Satu aksi utama: [aksi]
  Urutan section:
  1. [section]: [keraguan user yang dijawab] · menjawab [M1/M2/M3]
  2. …
  ```
- **Pertanyaan pemandu:** apa yang harus dipahami pengunjung dalam lima detik pertama? Keraguan apa yang muncul sebelum dia mau mendaftar, dan section mana yang menjawabnya?
- **Masuk ke:** `CLAUDE.md` › bagian **4. Halaman dan section** › P1 · Website SaaS › Beranda.
- **Cukup kalau:** setiap section punya alasan dan masalah yang dijawabnya, masalah yang dipikul Beranda (kolom Halaman di brief) terjawab, urutannya menuju satu aksi utama, dan kalau ada section atau tombol yang bersaing dengan aksi itu, kamu tahu dan punya alasannya.

## 2.2 · Rencana dua halaman website lainnya *(kamu)*

- **Kenapa:** setiap halaman punya tugasnya sendiri di flow F1. Halaman yang tujuannya sama dengan Beranda hanya mengulang, bukan membawa user maju.
- **Yang kamu lakukan:** tulis rencana dua halaman website lainnya dari daftar halaman di bagian 4, dengan template yang sama seperti 2.1.
- **Template:** sama dengan 2.1, satu blok per halaman.
- **Pertanyaan pemandu:** user datang ke halaman ini dari mana, dan dengan keraguan apa? Apa bedanya aksi utama di sini dengan di Beranda? Kalau halaman ini titik tempat bisnis dan user bertabrakan (Prioritasku, langkah 1.2), apa yang tampil lebih dulu, sesuai sikapmu di sana?
- **Masuk ke:** `CLAUDE.md` › bagian **4. Halaman dan section** › P1 · Website SaaS, di bawah nama halamannya.
- **Cukup kalau:** setiap halaman punya tujuan yang berbeda dan satu aksi utama, dan bersama Beranda, ketiga halaman menjawab M1–M3 website sesuai kolom Halaman di brief.

## 2.3 · Wireframe ketiga halaman *(Claude Code)*

- **Yang kamu lakukan:** pastikan mode di bagian **3. Mode tampilan** masih `wireframe`, lalu ketik `/lanjut`. Claude Code membangun setiap halaman sebagai satu halaman utuh dari rencanamu: abu-abu, satu font sistem, gambar sebagai kotak placeholder.
- **Cukup kalau:** halaman mengikuti urutan section di rencanamu, tanpa section tambahan.

## 2.4 · Nilai halaman utuh *(kamu)*

- **Kenapa:** masalah hierarchy terlihat dari halaman utuh, bukan dari satu section.
- **Yang kamu lakukan:** buka halamannya, lakukan squint test (pandang dengan mata menyipit), lalu tulis temuanmu di chat.
- **Template:**
  ```
  Yang terlihat pertama: [elemen], [elemen], [elemen]
  Seharusnya: [elemen sesuai rencanamu]
  Section yang kurang efektif: [section], karena [prinsip yang dilanggar]
  ```
- **Masuk ke:** dicatat di log pekan ini.
- **Cukup kalau:** temuannya menyebut prinsip (hierarchy, proximity, satu aksi utama), bukan selera.

## 2.5 · Deskripsi section yang diperbaiki *(kamu)*

- **Kenapa:** perbaikan dimulai dari deskripsi yang lebih jelas, bukan dari prompt yang diulang.
- **Yang kamu lakukan:** untuk setiap section yang kurang efektif, tulis deskripsinya dan alasannya.
- **Template:**
  ```
  Section: [nama]
  - Tujuan: [apa yang harus dipahami atau dilakukan user di section ini]
  - Isi: [pesan yang harus sampai ke user, data dari data/, gambar; kalimatnya ditulis Claude Code]
  - Aksi utama: [satu aksi, kalau ada]
  - Referensi: [nama atau link dari library-mu]
  - Kenapa layout ini: [alasan dengan prinsip]
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **4. Halaman dan section**, di bawah halamannya.
- **Cukup kalau:** "Kenapa layout ini" memakai prinsip, dan referensinya relevan dengan masalah, bukan hanya mirip tampilannya.

## 2.6 · Perbaiki section, lalu cek di HP dan desktop *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code memperbaiki section yang kamu deskripsikan, satu per satu, lalu kamu cek di lebar 360 px dan desktop.
- **Cukup kalau:** urutan prioritas sama di HP dan desktop, tanpa scroll ke samping.

## 2.7 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** ketik `/laporan`, jawab refleksi, lalu commit, push, dan kirim link repo ke fasilitator.

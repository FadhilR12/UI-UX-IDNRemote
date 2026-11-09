# Pekan 1 · Dokumen kedua project

Belum ada tampilan. Brief sudah menyebut user, goal, masalah, flow, dan halaman kedua project, jadi kamu tidak perlu menulis ulang semua itu. Pekan ini kamu membuat keputusan yang tidak ada di brief: masalah mana yang paling penting, isi apa yang menjawabnya, dan di titik mana flow bisa gagal. Semua pekan berikutnya berangkat dari sini.

## 1.1 · Pilih brief *(Claude Code)*

- **Kenapa:** semua langkah berikutnya bergantung pada produk di brief-mu.
- **Yang kamu lakukan:** sebutkan brief dari fasilitator, A atau B. Claude Code mengisi baris Brief-mu di bagian **1. Brief**, menghapus folder brief yang lain, lalu menyalin dari brief apa adanya: User, User goal, Business goal, Bisa bertabrakan, dan flow kunci F1–F3 ke bagian **2**, dan halaman wajib kedua project ke Daftar halaman di bagian **4**.
- **Cukup kalau:** baris Brief-mu terisi, hanya satu folder brief yang tersisa, dan bagian 2 serta Daftar halaman sudah berisi salinan brief.

## 1.2 · Pahami brief-mu *(kamu)*

- **Kenapa:** keputusan design yang efektif dimulai dari masalah user, bukan dari tampilan. Dari tiga masalah, biasanya ada satu yang paling menentukan apakah user lanjut atau berhenti.
- **Yang kamu lakukan:** baca `briefs/<brief-mu>/brief.md` sampai habis, dan lihat sekilas isi `data/`. Lalu pilih prioritasmu. Masalah dan scope sudah dikunci: tugasmu memilih urutan pentingnya, bukan menambah.
- **Template:**
  ```
  Website: [M1/M2/M3] paling mengancam goal, karena kalau tidak terjawab, pengunjung [akibatnya].
  Web app: [M1/M2/M3] paling mengancam goal, karena kalau tidak terjawab, user [akibatnya].
  Saat bertabrakan: di [layar], bisnis ingin user [aksi], sedangkan user takut [kekhawatirannya].
  Kalau bisnis didahulukan, user [apa yang dia lakukan]. Kalau user didahulukan, bisnis [apa yang hilang].
  Aku mendahulukan [bisnis atau user], dan tampilannya menjawab keduanya dengan [caranya].
  ```
- **Pertanyaan:**
  1. **Di website, masalah mana yang paling mengancam goal?**
     Format: `[M1/M2/M3] paling mengancam goal, karena kalau tidak terjawab, pengunjung [akibatnya].`
     Clue: baca M1–M3 di bagian P1 brief. Untuk setiap masalah tanya: kalau hanya masalah ini yang tidak terjawab, apakah pengunjung tetap mendaftar?
  2. **Di web app, masalah mana yang paling mengancam goal?**
     Format: `[M1/M2/M3] paling mengancam goal, karena kalau tidak terjawab, user [akibatnya].`
     Clue: baca M1–M3 di bagian P2 brief. Untuk setiap masalah tanya: kalau hanya masalah ini yang tidak terjawab, apakah user kembali minggu depan?
  3. **Brief menyebut satu titik di mana bisnis dan user bisa bertabrakan. Di titik itu, apa yang diinginkan bisnis, dan apa yang ditakutkan user?**
     Format: `Di [layar], bisnis ingin user [aksi], sedangkan user takut [kekhawatirannya].`
     Clue: baca baris "Bisa bertabrakan dengan user goal" di bagian 2. Tulis kekhawatiran user dengan kata-kata user sendiri, seperti kalimat yang mungkin dia ucapkan ke teman. Kalau brief menyebut lebih dari satu layar, pilih satu dulu.
  4. **Apa yang terjadi kalau salah satu sisi didahulukan sepenuhnya?**
     Format: `Kalau bisnis didahulukan, user [apa yang dia lakukan]. Kalau user didahulukan, bisnis [apa yang hilang].`
     Clue: bayangkan dua versi ekstrem layar itu. Versi pertama hanya mengejar aksi bisnis, versi kedua hanya menenangkan user. Apa yang terjadi di masing-masing?
  5. **Jadi, apa yang kamu dahulukan, dan bagaimana tampilannya menjawab keduanya?**
     Format: `Aku mendahulukan [bisnis atau user], dan tampilannya menjawab keduanya dengan [caranya].`
     Clue: berangkat dari jawaban 3 dan 4. Cara yang menjawab keduanya biasanya soal apa yang tampil lebih dulu, apa yang dijelaskan dengan jujur, dan apa yang tetap ditawarkan tanpa dipaksakan. Tidak ada jawaban yang benar; yang dinilai alasanmu.
- **Masuk ke:** `CLAUDE.md` › bagian **2. User, goal, dan flow** › Prioritasku.
- **Cukup kalau:** setiap pilihan punya alasan dari sisi user dengan kata-katamu sendiri, bukan menyalin kalimat brief.

## 1.3 · Isi yang menjawab masalah website *(kamu)*

- **Kenapa:** pengunjung tidak membaca layout, dia membaca isi. Sebelum memikirkan section dan urutannya di pekan 2, kamu perlu tahu informasi atau bukti apa yang menjawab setiap keraguan.
- **Yang kamu lakukan:** untuk setiap masalah website M1–M3, tulis apa yang perlu diketahui atau dilihat pengunjung, dan dari mana isinya (brief atau file di `data/`). Belum memikirkan bentuk atau letaknya.
- **Template:**
  ```
  M1: pengunjung perlu [tahu atau melihat apa], isinya dari [brief atau data/...]
  M2: …
  M3: …
  ```
- **Pertanyaan:**
  1. **Untuk M1 website, apa yang perlu diketahui atau dilihat pengunjung?**
     Format: `M1: pengunjung perlu [tahu atau melihat apa], isinya dari [brief atau data/...].`
     Clue: baca kolom "Berhasil kalau" untuk M1. Isi apa yang membuat orang baru bisa melakukan itu? Cari bahannya di file `data/`.
  2. **Untuk M2 website, apa yang perlu diketahui atau dilihat pengunjung?**
     Format: sama seperti M1.
     Clue: baca "Berhasil kalau" untuk M2. Kalimat atau angka apa yang harus tertulis jelas, supaya pengunjung tidak perlu bertanya?
  3. **Untuk M3 website, apa yang perlu diketahui atau dilihat pengunjung?**
     Format: sama seperti M1.
     Clue: baca "Berhasil kalau" untuk M3. Bukti apa yang lebih meyakinkan daripada klaim, misalnya angka, nama, atau cerita orang lain?
- **Masuk ke:** `CLAUDE.md` › bagian **4. Halaman dan section** › Isi yang menjawab masalah website.
- **Cukup kalau:** setiap masalah punya isi yang spesifik (bukan "informasi lengkap"). Bahannya dari brief atau `data/`; kalau tidak ada di sana, tulis asumsimu dengan tanda "(asumsi)" dan lanjut. Bentuk dan letaknya diputuskan di pekan 2.

## 1.4 · Tandai titik rawan di flow *(kamu)*

- **Kenapa:** validasi, loading, dan pesan error dipikirkan dari awal, bukan ditambal di akhir.
- **Yang kamu lakukan:** dari flow kunci F1–F3 di bagian 2, tandai langkah yang butuh validasi, loading, atau pesan error, aksi yang bisa terkirim dua kali, dan input yang tidak boleh hilang saat error.
- **Template:**
  ```
  - [Fn] langkah [n] ([layar]): butuh [validasi / loading dan tombol nonaktif / pesan error], karena [alasannya]
  ```
- **Pertanyaan:**
  1. **Langkah mana yang meminta user mengetik sesuatu?**
     Format: `[Fn] langkah [n] ([layar]): butuh validasi, karena [apa yang terjadi kalau input-nya salah].`
     Clue: cari setiap form di flow kunci. Input mana yang kalau salah membuat user tidak bisa lanjut atau tidak bisa kembali?
  2. **Langkah mana yang menunggu hasil setelah tombol diklik?**
     Format: `[Fn] langkah [n] ([layar]): butuh loading dan tombol nonaktif, karena [apa yang terjadi kalau diklik dua kali].`
     Clue: cari tombol yang mengirim atau menyimpan sesuatu. Apa akibatnya kalau user tidak sabar dan mengklik lagi?
  3. **Kalau langkah itu gagal, apa yang harus tetap ada?**
     Format: `[Fn] langkah [n] ([layar]): butuh pesan error, dan [input atau pilihan] tidak boleh hilang, karena [alasannya].`
     Clue: bayangkan koneksi putus tepat saat menyimpan. Apa yang membuat user kesal kalau harus mengulang dari awal?
- **Masuk ke:** `CLAUDE.md` › bagian **2. User, goal, dan flow** › Titik yang butuh validasi, loading, atau pesan error.
- **Cukup kalau:** ketiga pertanyaan terjawab dengan alasan dari sisi user. Tidak perlu lengkap: titik lain dilengkapi saat menulis state di pekan 6.

## 1.5 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** ketik `/laporan`, jawab dua pertanyaan refleksi, lalu commit, push, dan kirim link repo ke fasilitator bersama hasil Track Taste.

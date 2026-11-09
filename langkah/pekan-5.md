# Pekan 5 · Dari website ke web app

Tidak ada materi baru. Sisa feedback pekan 1–4 dirapikan di website, lalu web app mulai dibangun langsung dengan token dan component website, tanpa wireframe abu-abu: keputusan visualnya sudah ada. Pekan ini baru onboarding, beranda user, dan layar inti produk; layar daftar dan transaksi menyusul di pekan 6, bersama materi form. Pekan ditutup Review fase 1 lewat Google Meet, yang membahas keduanya.

## 5.1 · Daftar feedback yang dikerjakan *(kamu)*

- **Kenapa:** tidak semua feedback dikerjakan dengan cara yang sama. Memilah dengan alasan adalah bagian dari argumentasi.
- **Yang kamu lakukan:** kumpulkan feedback pekan 1–4 yang belum dikerjakan, lalu tulis rencanamu untuk masing-masing.
- **Template:**
  ```
  - Feedback: [isi] → [dikerjakan / tidak dikerjakan], karena [alasan]; rencana: [apa yang diubah]
  ```
- **Masuk ke:** dicatat di log pekan ini.
- **Cukup kalau:** setiap feedback punya keputusan dan alasan.

## 5.2 · Kerjakan feedback *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Kalau feedback-nya soal struktur atau gaya, perbaiki dulu rencana atau keputusan di `CLAUDE.md`, lalu Claude Code membangunnya.
- **Cukup kalau:** perubahan di halaman sesuai dengan yang tertulis di `CLAUDE.md`.

## 5.3 · Rencana layar web app *(kamu)*

- **Kenapa:** layar web app dipakai berulang kali. Yang penting adalah tugas user, bukan meyakinkan.
- **Yang kamu lakukan:** tulis rencana kelima layar web app dari daftar halaman di bagian 4, satu layar per giliran: semua baris template untuk satu layar sekaligus. Halaman dulu, baru section, seperti di website. Bahannya dari bedah layar web app di Track Taste pekan ini.
- **Template:**
  ```
  Tujuan layar: [apa]
  Tugas user di layar ini: [satu kalimat]
  Posisi di flow: [F1/F2/F3], datang dari [mana], lanjut ke [mana]
  Satu aksi utama: [aksi]
  Urutan section:
  1. [section]: [alasan] · menjawab [M1/M2/M3]
  Kondisi layar: [namanya saja dulu, misalnya kosong untuk user baru, peringatan, konfirmasi; dilengkapi di pekan 6]
  ```
- **Pertanyaan pemandu:** apa yang dilihat user baru yang belum punya data? Apa yang ingin dia lakukan dalam satu klik saat kembali? Component website mana yang bisa dipakai lagi di sini? Kalau layar ini titik tempat bisnis dan user bertabrakan (Prioritasku, langkah 1.2), apa yang tampil lebih dulu, sesuai sikapmu di sana?
- **Masuk ke:** `CLAUDE.md` › bagian **4. Halaman dan section** › P2 · Web app, satu blok per layar.
- **Cukup kalau:** kelima layar punya tugas user, satu aksi utama, dan kondisi layarnya, dan setiap layar tersambung ke flow kuncinya.

## 5.4 · Bangun tiga layar pertama *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code membangun onboarding, beranda user, dan layar inti produk, masing-masing sebagai satu layar utuh dari rencanamu, hanya dengan token dan component dari website. Untuk sekarang hanya happy path: kondisi ideal. Nilai sebagai satu layar dulu, seperti di website, lalu cek di lebar 360 px dan desktop.
- **Cukup kalau:** tidak ada nilai di luar `tokens.css`, kalau layar butuh nilai atau component baru kamu yang memutuskan dengan alasan, dan urutan prioritas sama di HP dan desktop.

## 5.5 · Penjelasan untuk Review fase 1 *(kamu)*

- **Kenapa:** di review kamu menjelaskan keputusan, bukan hanya menunjukkan hasil.
- **Yang kamu lakukan:** siapkan penjelasan singkat untuk meeting.
- **Template:**
  ```
  Yang berubah di website: [daftar singkat]
  Yang belum cukup untuk web app: [token atau component] → [keputusanmu]
  Kenapa: [prinsip di balik perubahan terbesar]
  Yang masih ragu: [satu hal yang ingin didiskusikan]
  ```
- **Masuk ke:** dicatat di log pekan ini; bawa ke Review fase 1.
- **Cukup kalau:** alasannya memakai prinsip dari materi pekan 1–4.

## 5.6 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

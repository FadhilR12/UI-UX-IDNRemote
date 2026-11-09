# Pekan 6 · Layar daftar, transaksi, dan state

Onboarding, beranda user, dan layar inti produk sudah ada dari pekan 5, dalam kondisi ideal. Pekan ini layar daftar dan transaksi dibangun langsung bersama state-nya, lalu semua layar menunjukkan perjalanan user lengkap, bukan hanya tampilan ideal: kosong, loading, error, berhasil, gagal, validasi, dan tombol nonaktif selama proses. Karena tanpa backend, semua kondisi itu disimulasikan lewat `?state=` di URL.

## 6.1 · Daftar state dan pesan error *(kamu)*

- **Kenapa:** state yang tidak dirancang tetap muncul, hanya saja dalam bentuk yang membingungkan.
- **Yang kamu lakukan:** untuk kelima layar web app, termasuk layar daftar dan transaksi yang belum dibangun, tulis seperti apa setiap state-nya, lalu isi pesan error-nya: apa yang terjadi, kenapa, dan apa yang bisa dilakukan user. Kalimat akhirnya dirapikan Claude Code saat membangun. Ideal sampai sebagian adalah state layar; berhasil, gagal, dan nonaktif adalah state aksi.
- **Template:**
  ```
  | Layar | Ideal | Kosong | Loading | Error | Sebagian | Berhasil | Gagal | Nonaktif |
  | [layar] | [apa yang dilihat dan aksi berikutnya] | … |

  Pesan error: [apa yang terjadi]. [kenapa]. [apa yang bisa dilakukan user].
  ```
- **Pertanyaan pemandu:** apa yang dilihat user baru yang belum punya data? Kalau aksi gagal, apakah input-nya hilang? Bagaimana user tahu tombolnya sedang diproses?
- **Masuk ke:** `CLAUDE.md` › bagian **7. State per layar**.
- **Cukup kalau:** setiap state punya aksi berikutnya untuk user, dan pesan error menjelaskan solusinya tanpa bahasa mesin.

## 6.2 · Bangun layar daftar dan transaksi, lalu state-nya *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code membangun layar daftar dan transaksi dari rencanamu di bagian 4, hanya dari token dan component website (simulasi, tanpa akun atau pembayaran sungguhan; tidak ada halaman masuk, daftar langsung ke onboarding). Lalu state setiap layar dari tabelmu, bisa dibuka lewat `?state=loading`, `?state=kosong`, `?state=error`, `?state=sebagian`, dan `?state=gagal`. Cek kedua layar baru di lebar 360 px dan desktop.
- **Cukup kalau:** setiap state di tabel bisa dibuka lewat URL, dan layar baru tidak memakai nilai di luar `tokens.css`.

## 6.3 · Validasi, tombol nonaktif, dan screen reader *(Claude Code)*

- **Yang kamu lakukan:** ketik `/lanjut`. Claude Code menambahkan validasi saat mengisi, tombol nonaktif selama proses, dan pengumuman perubahan state untuk screen reader. Coba sendiri setiap form.
- **Cukup kalau:** tidak ada aksi yang bisa terkirim dua kali, dan error muncul di dekat input yang salah.

## 6.4 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

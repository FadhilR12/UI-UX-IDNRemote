# Laporan pekan 2 · Wireframe tiga halaman website

**Brief:** B (Mentorku), platform mentoring soft skills 1-on-1 untuk developer.

## Progres

- [x] 2.1 Tulis rencana Beranda website: tujuan, aksi utama, urutan section
- [x] 2.2 Tulis rencana dua halaman website lainnya
- [x] 2.3 Bangun wireframe ketiga halaman, masing-masing satu halaman utuh
- [x] 2.4 Nilai halaman utuh dengan squint test
- [x] 2.5 Tulis deskripsi dan "kenapa layout ini" untuk section yang kurang efektif
- [x] 2.6 Perbaiki section itu, lalu cek di HP dan desktop
- [x] 2.7 Laporan pekan ini

Hasil: `website/index.html` (Beranda), `website/mentor.html` (Daftar mentor), `website/harga.html` (Harga), dengan `style.css`, `mentor.js`, dan `nav.js`. Ketiga halaman tanpa scroll ke samping di lebar 360 px.

**Tambahan 20 November 2026:** setelah 2.7 tercentang, peserta melanjutkan iterasi Beranda di luar langkah (17 permintaan). Rencana Beranda di `CLAUDE.md` bagian 4 belum diperbarui untuk perubahan ini.

## Keputusan design

Dikutip dari `CLAUDE.md` bagian 4, versi akhir pekan ini.

**Beranda**

- **Tujuan halaman:** pengunjung paham bahwa Mentorku menyediakan sesi one on one dengan mentor berpengalaman, dan ada beberapa mentor dengan keahlian berbeda yang bisa dipilih.
- **Posisi di flow:** datang dari iklan atau pencarian (asumsi), lanjut ke Daftar
- **Satu aksi utama:** Pesan sesi
- **Urutan section:**
  1. Hero: slogan singkat tentang Mentorku dengan tombol Pesan sesi di bawahnya, dan beberapa mentor ditampilkan di sebelahnya beserta rating, jumlah sesi, dan pengalamannya, lalu link Lihat semua mentor ke Daftar mentor. Hanya beberapa mentor, supaya pengunjung tidak bingung memilih dari banyak pilihan. List Mentor terpisah dihapus karena redundan dengan hero dan Daftar mentor · menjawab M1, M3, aksi utama
  2. Bidang: enam bidang yang bisa dilatih, masing-masing dengan satu kalimat isi latihannya dan anchor ke Daftar mentor dengan filter bidang itu sudah terpilih (referensi: section Skills di skillex.webflow.io) · menjawab M1 dan M2
  3. Cerita User: testimoni dari user yang sudah memakai Mentorku, dengan foto user · menjawab M3

**Beranda, perubahan 20 November 2026** (dari log, karena belum ditulis di rencana halaman)

- Section About baru di antara Hero dan Bidang: manifesto "Naik level nggak harus ditebak sendirian. Tanya ke yang sudah pernah sampai.", satu paragraf (video call 1-on-1, 45 menit, khusus soft skill), kontras "Kalau sendirian" dan "Kalau bareng mentor", lalu contoh perjalanan Rino 01–03 dari `data/user.json`. Alasan peserta: "user akan merasa bosan karena merasa aplikasi ini tuh generic, aku mau ada identitas atau story tersendiri", dengan referensi kodlo.ai.
- Bidang dan Cerita user diselaraskan dengan gaya About (label kecil, judul kapital bertumpuk, satu testimoni sorotan). Alasan peserta: "dari hero ke about section tingkat motivasi saya melonjak tinggi ... tapi melihat kebawah di mau latihan apa dan testimoni itu seperti berkurang."
- Kartu ajakan kecil di bawah testimoni: kalimat di kiri, tombol sekunder di kanan, lebih lemah dari testimoni ("hierarki nya tetap menunjukan testimonial dahulu baru cta ini").
- Ukuran font dan jarak di gaya baru memakai kelipatan 4; nomor per section dihapus; nama bidang jadi teks paling menonjol di kartu Bidang, label hook "Mau ...?" dicoba lalu dihapus.
- HP: kolom "Kalau sendirian" tetap, contoh perjalanan Rino dan subjudul Bidang disembunyikan, diganti link "Dengarkan dari yang sudah coba →" ke testimoni (tidak tebal, abu, supaya tidak menonjol).

**Daftar mentor**

- **Tujuan halaman:** pengunjung bisa melihat semua mentor beserta detailnya dengan jelas, sehingga bisa memilih mentor yang cocok.
- **Posisi di flow:** datang dari Beranda, lanjut ke Pesan sesi
- **Satu aksi utama:** Pesan sesi
- **Urutan section:**
  1. Pencarian mentor: pengunjung memasukkan kriteria untuk menemukan mentor yang dicari, dengan pilihan bidang berupa chip yang bisa diklik (referensi: section Categories di skillex.webflow.io) · menjawab M1 dan M2
  2. List mentor: menampilkan semua mentor beserta detailnya langsung di list (tanpa popup), dengan tombol Pesan sesi di setiap mentor · menjawab M1, M3

**Harga**

- **Tujuan halaman:** pengunjung bisa melihat harga dan benefit setiap pilihan dengan jelas.
- **Posisi di flow:** datang dari Beranda atau Daftar mentor, lanjut ke Daftar
- **Satu aksi utama:** Daftar
- **Urutan section:**
  1. Benefit: menunjukkan apa saja yang didapat dari sesi · menjawab M2
  2. Harga: menampilkan dua pilihan, coba 1 sesi dan Paket 4 sesi. 1 sesi tampil paling menonjol, Paket 4 sesi tetap terlihat dengan label rekomendasi. Tombol Daftar dan coba 1 sesi disatukan di kartu Per sesi (section Ajakan untuk mencoba dihapus), dan kartu Paket 4 sesi punya tombol sekunder bergaris supaya paket tetap bisa dipilih tanpa bersaing dengan 1 sesi · menjawab M2, aksi utama

**Temuan squint test (2.4)**

- **Halaman:** Beranda
- **Yang terlihat pertama:** tagline, tombol Pesan sesi pertamamu, lalu mentor di hero
- **Seharusnya:** sudah sesuai rencana (tagline dan tombol Pesan sesi yang paling menonjol)
- **Section yang kurang efektif:** kartu mentor di halaman Daftar mentor, karena tombol Pesan sesi terlalu menonjol sehingga menutupi detail mentor (hierarchy)

**Section: List mentor (2.5)**

- Tujuan: Pengunjung dapat mencari mentor yang sesuai dengan kriteria dan menampilkan semua mentor beserta detailnya sebagai default
- Isi: detail dari para mentor harus sampai ke pengguna, dan pengguna juga dapat melihat foto dari mentor
- Aksi utama: pesan sesi dengan mentor
- Referensi: list dari olx
- Kenapa layout ini: sebenarnya aku memilih layout ini karena memenuhi proximity dan similiarity dari card card mentor lain. layout ini efektif karena hierarki jelas dan saat dilakukan squint test dia berhasil fokus ke detail mentor

Catatan: di halaman, "tombol Pesan sesi di setiap mentor" kini berbentuk kartu yang bisa diklik (tanpa tombol terlihat), dengan panah ↗ di kanan atas foto khusus di HP. Rencana halaman belum diperbarui untuk detail ini.

## Cara mengarahkan Claude Code

Permintaan kunci dari log:

- "kalau begitu hapus section dibawah testimoni dan tambahkan tombol di hero dibawah Ngobrol"
- "aku suka dengan usulan nomor 3, coba implementasikan biar aku yang menilai"
- "kembalikan lagi bukan itu maksudku, maksudku adalah jarak antara desc dan tag yang bisa kamu latih tidak sejajar aku mau itu sejajar antara card"
- "section ini terasa redundan, di hero sudah terpampang mentor dengan pengalaman terlama, tapi dibawahnya ada list mentor, di halaman daftar mentor juga ada. Jadi aku merasa redundan"
- "card nya seperti attachment yang aku kirim, untuk deskripsi nya dibuat singkat lalu taruh dibawah sub judul nya saja" (dengan screenshot referensi skillex)

Iterasi setelah wireframe pertama (2.3 sampai 2.7), dihitung dari log: sekitar 22 permintaan perbaikan untuk Daftar mentor, 8 untuk Beranda, 6 untuk Harga, 4 untuk navbar HP, dan 8 lainnya (penyesuaian rencana dan pengecekan).

Kapan rencana atau deskripsi diperbaiki dulu dibanding hanya mengulang permintaan:

- Rencana Beranda, Daftar mentor, dan Harga di 2.1 dan 2.2 diubah peserta beberapa kali sebelum wireframe dibangun (Pricing dihapus dari Beranda, tombol Pesan sesi diletakkan di detail mentor, penekanan 1 sesi di Harga), lalu bahasanya dirapikan atas permintaan peserta.
- Setelah wireframe dibangun, sebagian besar perubahan diminta langsung ke tampilan (misalnya "coba buat gridnya 4", "coba kalau 3", "tolong rapihkan hierarki nya", "tolong perbaiki proximity nya"), lalu rencana di `CLAUDE.md` disesuaikan sesudahnya atas permintaan peserta ("ubah juga di langkah sebelum nya ya").
- Di 2.5, peserta menulis deskripsi section List mentor dulu, lalu menambah referensi OLX dan alasan hierarchy setelah melihat hasil percobaan.
- Peserta tiga kali meluruskan maksud setelah hasil tidak sesuai: soal "seragam" (diminta dikembalikan), soal "deskripsi di bawah subjudul", dan soal "persegi panjang kebawah".
- Peserta dua kali memakai referensi luar untuk mengarahkan perubahan: OLX untuk kartu mentor, dan skillex.webflow.io (termasuk screenshot) untuk section Bidang dan filter bidang.

Iterasi 20 November 2026 (Beranda, di luar langkah):

- Permintaan kunci: "jangan dibuat seperti itu, user akan merasa bosan karena merasa aplikasi ini tuh generic, aku mau ada identitas atau story tersendiri untuk aplikasi yang dibuat mungkin seperti kodlo.ai mereka mempunyai ciri khas nya tersendiri", "tidak usah ada nomor per section, lalu font size tolong jangan terlalu besar make it effective, seperti gunakan prinsip yang kelipatan 4 gitu", "mungkin kolom kalau sendirian boleh tambahkan, trade off dengan cerita rino".
- 17 permintaan: 3 untuk kartu ajakan, 2 untuk section About, 5 untuk penyelarasan section dan typography, 7 untuk tampilan HP.
- Semua perubahan diminta langsung ke tampilan; rencana halaman belum diubah. Peserta dua kali menolak hasil dan meluruskan maksud (section ajakan menjadi kartu kecil; About generik menjadi cerita), dan sekali menulis copy sendiri ("Dengarkan dari yang sudah coba").

## Feedback dan tindak lanjut

- **2.1:** feedback menanyakan Hero yang ditulis sebagai "mengurutkan mentor" dan Pricing di Beranda. Peserta menghapus Pricing dan menjadikan hero slogan dengan mentor di sebelahnya. Pertanyaan "di mana Pesan sesi muncul" dijawab dengan menambah section Ajakan Pesan sesi, lalu disesuaikan dengan F1 (pendaftaran dulu, baru pembayaran).
- **2.2:** pertanyaan soal tombol Pesan sesi di Daftar mentor dijawab peserta (di detail mentor). Pertanyaan tabrakan bisnis dan user di Harga dijawab: 1 sesi paling menonjol, Paket 4 sesi tetap dengan label rekomendasi.
- **2.3:** catatan bahwa tombol Pesan sesi Beranda baru muncul di section terakhir ditindaklanjuti peserta dengan memindahkan tombol ke hero dan menghapus card ajakan.
- **2.4:** temuan menyebut prinsip (hierarchy). Catatan: squint test dilakukan di Beranda, temuan kurang efektif ada di Daftar mentor.
- **2.5:** versi pertama belum punya Referensi dan alasannya belum menjawab temuan 2.4. Peserta menambah referensi OLX, memilih kartu yang bisa diklik tanpa tombol, lalu menulis alasan hierarchy dari squint test ulang.
- **2.6:** catatan bahwa kartu mentor di HP belum punya penanda bisa diketuk ditindaklanjuti peserta dengan panah ↗ di kanan atas foto, khusus HP. Catatan bahwa alasan perubahan besar (section Bidang, Benefit, penghapusan List Mentor) belum ditulis sebagai blok Section dengan "Kenapa layout ini" belum ditindaklanjuti.

- **Iterasi 20 November 2026:** tidak ada `/cek`. Catatan dari tanggapan: About ditaruh di antara Hero dan Bidang; tiga clue diberikan (About bisa mengulang subjudul Hero, manifesto bisa lebih besar dari judul Hero, rencana Beranda di bagian 4 belum memuat About dan kartu ajakan). Clue ukuran manifesto ditindaklanjuti peserta lewat aturan kelipatan 4; rencana Beranda belum diperbarui.

## Refleksi

_Ditulis peserta._

- **Keputusan tersulit pekan ini dan kenapa:** Aku sempat kesulitan menentukan bentuk wireframe yang membuat pesannya sampai ke pengguna dengan nyaman.
- **Satu hal yang akan dilakukan berbeda:** Aku akan mencari lebih banyak referensi terlebih dahulu, lalu memakainya sebagai dasar wireframe.

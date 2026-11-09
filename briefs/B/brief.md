# Brief B · Mentorku

**Platform mentoring soft skills 1-on-1 untuk developer.** Produk fiktif untuk latihan.

## Produk

Sesi video call satu-satu dengan praktisi berpengalaman untuk soft skills developer, bukan bantuan coding, di enam bidang: Interview, CV dan portofolio, Presentasi, Bahasa Inggris untuk kerja, Negosiasi, dan Memimpin tim. Bayar per sesi atau beli paket 4 sesi.

## User

Developer 22–35 tahun yang punya target karier beberapa bulan ke depan, misalnya pindah kerja, naik menjadi tech lead, atau bekerja dengan klien luar negeri, dan butuh arahan spesifik dari orang berpengalaman, bukan materi umum. Mencari dan memesan mentor dari laptop, lalu mengecek jadwal sesi dari HP.

**User goal:** Saat ingin naik ke peran berikutnya, misalnya tech lead atau posisi di perusahaan luar negeri, saya ingin dibimbing rutin oleh orang yang sudah menempuh jalan itu, supaya dalam beberapa bulan saya tahu apa yang harus dilatih dan bisa melihat kemajuannya.

## Business goal

Pengunjung memesan sesi pertama di website, lalu hadir di sesi itu dan memesan sesi berikutnya di web app, supaya user kembali membayar sesi atau membeli paket 4 sesi.

**Bisa bertabrakan dengan user goal:** Di pilih jadwal dan bayar: bisnis ingin user langsung membeli paket 4 sesi, sedangkan user ingin mencoba satu sesi dulu sebelum yakin mentornya cocok.

## Isi produk

Batas isi produk fiktifnya. Halaman dan isi tampilanmu berangkat dari isi ini, bukan dari topik lain.

**Ada di produk:**

- **Interview:** Simulasi interview, pertanyaan perilaku, dan metode STAR
- **CV dan portofolio:** Review CV, portofolio, dan profil LinkedIn
- **Presentasi:** Latihan demo fitur dan presentasi ke atasan
- **Bahasa Inggris untuk kerja:** Latihan percakapan dengan tim, atasan, dan klien, serta standup, rapat, dan email berbahasa Inggris
- **Negosiasi:** Gaji, promosi, dan pindah perusahaan
- **Memimpin tim:** Persiapan menjadi tech lead, one-on-one, dan delegasi

**Bukan bagian produk:**

- **Bantuan coding:** Debugging, review kode teknis, atau mengerjakan tugas
- **Kursus video:** Setiap sesi berupa video call langsung dengan mentor
- **Sesi grup:** Satu sesi hanya untuk satu user dan satu mentor

## Per project

Masalah dan ukuran berhasil di bawah ini **dikunci**: jangan menambah masalah sendiri. Pendekatanmu bebas, selama berangkat dari materi, dan setiap keputusan design menyebut masalah yang dijawabnya (misalnya "Hero · menjawab M1").

### P1 · Website SaaS

- **User saat ini:** Developer yang butuh arahan spesifik dan sedang membandingkan pilihan mentoring.
- **Goal:** Menemukan mentor yang cocok, lalu memesan sesi pertama.

| | Masalah | Berhasil kalau | Halaman |
|---|---|---|---|
| M1 | Sulit memilih mentor dari banyak pilihan | Orang baru bisa memilih satu mentor dan menyebut alasannya | Beranda, Daftar mentor |
| M2 | Tidak jelas apa yang didapat dari satu sesi dan berapa biayanya | Orang baru bisa menjelaskan isi satu sesi dan biayanya, tanpa bertanya | Harga |
| M3 | Ragu kualitas mentornya | Orang baru bisa menyebut satu alasan untuk percaya | Beranda, Daftar mentor |

- **Wajib:** Beranda, Daftar mentor, Harga
- **Tambahan:** Cara kerja, FAQ

### P2 · Web app

- **User saat ini:** Developer yang baru mendaftar dan akan punya sesi terjadwal.
- **Goal:** Hadir di sesi, lalu memesan sesi berikutnya.

| | Masalah | Berhasil kalau | Halaman |
|---|---|---|---|
| M1 | Memesan jadwal membingungkan: zona waktu, slot penuh, dan konfirmasi | User bisa memesan slot yang benar tanpa salah pilih waktu | Pilih jadwal dan bayar |
| M2 | Lupa sesi, atau perlu menjadwal ulang | User bisa menemukan sesi berikutnya dan menjadwal ulang tanpa bantuan | Beranda user, Detail sesi |
| M3 | Catatan dari mentor setelah sesi sulit ditemukan | User bisa menemukan catatan sesi terakhir tanpa mencari lama | Detail sesi |

- **Wajib:** Daftar, Onboarding: pilih bidang dan tujuan, Beranda user: sesi mendatang, Pilih jadwal dan bayar, dengan profil mentor ringkas, Detail sesi: catatan dan jadwal ulang
- **Tambahan:** Riwayat sesi, Ulasan setelah sesi

## Flow kunci

Tiga flow yang harus bisa dijalani dari awal sampai akhir. Usability test di pekan 7 memakai flow ini.

| | Flow | Langkah | Menjawab |
|---|---|---|---|
| F1 | Dari website sampai masuk ke web app | Beranda atau Daftar mentor → Pesan sesi → Daftar → Masuk ke web app | P1 M1, M2 · P2 M1 |
| F2 | Onboarding sampai sesi pertama (Web app) | Pilih bidang dan tujuan → Rekomendasi mentor di akhir onboarding → Pilih jadwal dan bayar → Sesi terkonfirmasi | P2 M1 |
| F3 | Kembali untuk sesi berikutnya (Web app, sudah masuk) | Beranda user → Detail sesi → Jadwal ulang atau baca catatan → Pesan lagi | P2 M2, M3 |

## Scope

**Termasuk:**

- **Halaman dan layar:** 3 halaman website dan 5 layar web app di atas. Cukup bagian yang dilewati flow kunci; bagian lain boleh berupa kotak placeholder berlabel
- **Flow kunci utuh:** F1–F3 dari awal sampai akhir, dengan state di layar yang dilewatinya: loading, kosong, error, berhasil, gagal, dan validasi
- **Daftar tanpa login:** Setelah daftar, user langsung masuk ke onboarding
- **Transaksi simulasi:** Memakai data contoh, tanpa pembayaran sungguhan
- **Keyboard dan layar HP:** Flow kunci bisa diselesaikan dengan keyboard, dan nyaman di HP maupun desktop

**Tidak termasuk:**

- **Login dan akun:** Halaman masuk, lupa password, verifikasi email, dan OTP. F3 dianggap user sudah masuk
- **Backend:** Database, akun sungguhan, dan pembayaran sungguhan
- **Sisi lain produk:** Admin atau mentor, notifikasi email, dan pengaturan akun
- **Halaman lain:** Di luar daftar wajib, kecuali tambahan kalau tempo cukup

Di luar scope bukan berarti tidak penting. Bagian itu bisa kamu lengkapi setelah program, atau di project-mu sendiri.

## Data contoh

Ada di `data/`. Fakta di halaman (kursus, harga, testimoni, angka) diambil dari sini, jangan dikarang. Kalimat di halaman boleh ditulis bebas, selama jujur terhadap isi ini.

- `mentors.json`: 8 mentor di 6 bidang (Interview, CV dan portofolio, Presentasi, Bahasa Inggris untuk kerja, Negosiasi, Memimpin tim), dengan pengalaman, rating, dan jadwal kosong
- `plans.json`: 2 pilihan harga, per sesi dan paket 4 sesi
- `user.json`: 1 user (Rino) dengan 1 sesi mendatang dan 2 sesi selesai
- `testimonials.json`: 3 testimoni
- `faq.json`: 5 pertanyaan

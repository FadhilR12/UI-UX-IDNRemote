# Contoh dari produk lain: Kebunku

Contoh di file ini memakai produk fiktif lain, **Kebunku**, supaya kamu punya gambaran cara menulis tanpa menyalin jawaban untuk brief-mu. Produkmu berbeda: pakai contoh ini untuk melihat bentuk dan tingkat detailnya, lalu tulis versimu sendiri.

**Kebunku** membantu orang kota yang baru mulai berkebun di rumah. Website-nya meyakinkan pengunjung untuk mencoba. Web app-nya dipakai untuk menjadwalkan siram dan mencatat kondisi tanaman.

| | P1 · Website | P2 · Web app |
|---|---|---|
| M1 | Bingung tanaman apa yang cocok untuk rumahnya | Setelah daftar, tidak tahu mulai dari tanaman mana |
| M2 | Takut tanamannya mati | Lupa jadwal siram |
| M3 | Ragu harga langganannya sepadan | Tidak tahu tanamannya sehat atau tidak |

Flow kunci: **F1** Beranda → Mulai gratis → Daftar → masuk web app · **F2** pilih kondisi rumah → rekomendasi tanaman → tanaman pertama ditambahkan · **F3** beranda user → tandai sudah disiram → lihat kondisi tanaman.

Claude Code: tunjukkan contoh di sini **satu bagian per pertanyaan** (hanya contoh untuk pertanyaan yang sedang diajukan), selalu dengan label "Contoh dari Kebunku, produk lain". Jangan membuat contoh dari brief peserta. Kalau langkahnya tidak ada di file ini, buat contoh baru dengan produk Kebunku dan tingkat detail yang sama.

---

## Pekan 1

Brief Kebunku juga menyebut: **user goal** "Saat pagi sebelum berangkat kerja, saya ingin tahu tanaman mana yang perlu disiram hari ini, supaya tanaman saya tetap hidup tanpa harus mengingat-ingat", dan **bisa bertabrakan** di onboarding: bisnis ingin tahu banyak tentang rumah user, sedangkan user ingin cepat melihat tanaman yang cocok.

Contoh pekan 1 diberi nomor yang sama dengan pertanyaan di `langkah/pekan-1.md`. Tampilkan hanya contoh untuk pertanyaan yang sedang diajukan.

### 1.2 · Pahami brief-mu
1. M2 paling mengancam goal, karena kalau tidak terjawab, pengunjung yang takut tanamannya mati tidak akan berani mulai uji coba.
2. M2 paling mengancam goal, karena kalau tidak terjawab, user lupa menyiram, tanamannya mati, lalu dia berhenti berlangganan.
3. Di onboarding, bisnis ingin user mengisi kondisi rumahnya selengkap mungkin, sedangkan user takut "ribet, aku cuma mau tahu tanaman apa yang cocok".
4. Kalau bisnis didahulukan, user menutup onboarding sebelum melihat satu tanaman pun. Kalau user didahulukan, bisnis tidak punya cukup data untuk rekomendasi yang tepat dan pengingat siram yang akurat.
5. Aku mendahulukan user, dan tampilannya menjawab keduanya dengan hanya menanyakan dua hal di onboarding (cahaya dan ruang), lalu sisanya ditanyakan nanti saat user sudah melihat tanaman pertamanya.

### 1.3 · Isi yang menjawab masalah website
1. M1: pengunjung perlu melihat tanaman yang cocok untuk apartemen dengan cahaya sedikit, isinya dari `data/plants.json` (tiga tanaman paling mudah).
2. M2: pengunjung perlu tahu bahwa Kebunku mengingatkan jadwal siram setiap pagi dan memberi tahu kalau tanaman terlihat layu, isinya dari brief bagian Produk.
3. M3: pengunjung perlu melihat harga per bulan dibanding harga satu tanaman yang mati, dan cerita user yang tanamannya bertahan enam bulan, isinya dari `data/testimonials.json`.

### 1.4 · Titik rawan di flow
1. F1 langkah 3 (Daftar): butuh validasi, karena email yang salah ketik membuat user tidak bisa kembali ke akunnya.
2. F3 langkah 2 (Beranda user): butuh loading dan tombol nonaktif, karena tombol "sudah disiram" yang diklik dua kali mencatat siram dua kali.
3. F2 langkah 1 (Onboarding): butuh pesan error, dan pilihan kondisi rumah tidak boleh hilang, karena user harus menjawab ulang semuanya.

## Pekan 2

### 2.1 · Rencana Beranda website
- **Tujuan halaman:** pengunjung paham bahwa Kebunku memilihkan tanaman yang cocok dan mengingatkan jadwal siramnya.
- **Posisi di flow:** datang dari iklan atau pencarian, lanjut ke Daftar.
- **Satu aksi utama:** Mulai gratis.
- **Urutan section:** 1. Hero: "apakah ini untuk saya?" · menjawab M1 → 2. Cara kerja dalam tiga langkah: "apakah sulit?" · menjawab M2 → 3. Cerita user: "apakah berhasil untuk orang lain?" · menjawab M2

### 2.4 · Nilai halaman utuh
- **Yang terlihat pertama:** foto besar tanaman, menu, tombol Masuk.
- **Seharusnya:** judul hero dan tombol Mulai gratis.
- **Section yang kurang efektif:** hero, karena foto mengambil perhatian dari aksi utama (hierarchy).

### 2.5 · Deskripsi section
- **Section:** Cara kerja
- **Tujuan:** pengunjung yakin merawat tanaman dengan Kebunku tidak sulit.
- **Isi:** tiga langkah dari `data/`, masing-masing satu kalimat dan satu ilustrasi.
- **Aksi utama:** tidak ada; aksi utama tetap di hero.
- **Referensi:** section "How it works" di library-ku, kartu ketiga.
- **Kenapa layout ini:** tiga kolom sejajar karena langkahnya setara dan berurutan (similarity, proximity).

## Pekan 3

### 3.1 · Font, type scale, dan palet
- **Font:** Inter, karena netral dan jelas di layar kecil saat dibaca sambil berjalan.
- **Type scale:** judul 32/40, subjudul 20/28, body 16/24, label 12/16.
- **Palet:** latar #F7F8F5, teks #1C211D, aksen #2F6B3F untuk aksi utama, sukses #2F6B3F, error #B3261E.

### 3.4 · Polish dan audit
- **Polish:** kartu tanaman, karena nama tanaman dan jadwal siram sama tebal (hierarchy).
- **Audit:** 7 ukuran font, 9 warna; di luar scale: 18px dan 14px di kartu harga.

### 3.5 · Cek kontras
| Teks | Latar | Rasio | Lolos |
|---|---|---|---|
| #1C211D | #F7F8F5 | 15:1 | ya |
| #8A9A8C | #FFFFFF | 2.9:1 | tidak, diganti ke #5F6E61 |

## Pekan 4

### 4.1 · Spacing scale, Button, dan Input
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48; 8 untuk jarak dalam grup, 24 untuk jarak antar grup.
- **Button:** primary dan sekunder, tinggi 48px, hover sedikit lebih gelap, fokus garis 2px aksen dengan jarak 2px, disabled abu-abu tanpa hover, target sentuh 48px.
- **Input:** label di atas, hint di bawah input, error merah di bawah input dengan icon, fokus garis aksen, disabled berlatar abu-abu.

### 4.4 · Nilai lepas
- **Nilai lepas:** `margin-top: 18px` di `website/harga.html` → jadi `--space-4` (16px), karena 18 tidak ada di spacing scale.

## Pekan 5

### 5.1 · Feedback
- **Feedback:** "aksi utama di Harga bersaing dengan tombol FAQ" → dikerjakan, karena satu layar hanya punya satu aksi utama; rencana: FAQ menjadi link teks.

### 5.3 · Rencana layar web app
- **Tujuan layar:** user tahu tanaman mana yang perlu disiram hari ini.
- **Tugas user di layar ini:** menandai tanaman yang sudah disiram dalam satu ketukan.
- **Posisi di flow:** F3, datang dari notifikasi pagi, lanjut ke detail tanaman.
- **Satu aksi utama:** Tandai sudah disiram.
- **Urutan section:** 1. Perlu disiram hari ini · menjawab M2 → 2. Semua tanaman · menjawab M3
- **Kondisi layar:** kosong untuk user baru, semua sudah disiram.

### 5.5 · Penjelasan untuk Review fase 1
- **Yang berubah di website:** hero lebih fokus, FAQ menjadi link.
- **Yang belum cukup untuk web app:** belum ada component kartu dengan status → aku tambahkan satu varian dari kartu yang sudah ada.
- **Kenapa:** satu aksi utama per layar.
- **Yang masih ragu:** apakah navigasi web app di bawah layar atau di atas.

## Pekan 6

### 6.1 · State dan pesan error
| Layar | Ideal | Kosong | Loading | Error | Sebagian | Berhasil | Gagal | Nonaktif |
|---|---|---|---|---|---|---|---|---|
| Beranda user | daftar tanaman hari ini | "Tambahkan tanaman pertamamu" + tombol | skeleton kartu | "Daftar tanaman belum bisa dimuat. Coba lagi." | foto tanaman belum muncul | "Monstera sudah disiram" | "Belum tersimpan. Coba lagi." | tombol saat menyimpan |

- **Pesan error:** Email ini sudah terdaftar. Mungkin kamu pernah mendaftar sebelumnya. Pakai email lain atau hubungi kami.

## Pekan 7

### 7.1 · Usability test
- **Flow yang diuji:** F3 · menjawab: P2 M2
- **M2 berhasil kalau:** user menandai tanaman sudah disiram tanpa bertanya · tercapai: tidak
- **Temuan:** user mengetuk foto tanaman, bukan tombolnya · severity: tinggi · heuristic: recognition rather than recall

### 7.2 · Keyboard, screen reader, dan Lighthouse
- **Keyboard:** fokus hilang setelah menandai tanaman · severity: sedang

### 7.4 · Aturan accessibility
- Setiap aksi yang mengubah daftar mengembalikan fokus ke item berikutnya, karena fokus hilang saat usability test.

## Pekan 8

### 8.1 · Design system
- **Token:** warna aksen untuk aksi utama saja; spacing 8 dalam grup, 24 antar grup.
- **Component:** kartu tanaman · dipakai untuk satu tanaman · tidak dipakai untuk daftar artikel.
- **State:** setiap aksi punya loading, berhasil, dan gagal.
- **Accessibility:** fokus selalu terlihat, target sentuh minimal 44px.
- **Larangan:** dua tombol primary dalam satu layar.
- **Checklist review UI:** satu aksi utama per layar; tidak ada nilai di luar token; setiap layar punya state kosong.

### 8.3 · Perjelas aturan
- **Claude menebak:** jarak antar kartu → aturan baru: kartu dalam satu daftar berjarak 12.

## Pekan 9

### 9.1 · Pilah crit
- **Crit:** "jadwal siram terlalu kecil" → dipakai, karena itu informasi yang paling dicari user (hierarchy).

### 9.3 · Cek diri dengan rubrik
| Kriteria | Level | Bukti | Yang masih kurang |
|---|---|---|---|
| State & feedback | 3 | Beranda user, `?state=kosong` | pesan gagal di layar Harga |

## Pekan 10

### 10.2 · Presentasi
- **Masalah:** pemula lupa menyiram, lalu tanamannya mati dan mereka berhenti.
- **Keputusan terpenting:** "perlu disiram hari ini" di paling atas beranda user · karena hierarchy mengikuti tugas yang paling sering.
- **Sebelum dan sesudah:** beranda user · dulu aku menata semua tanaman sama rata; sekarang aku melihat urutan dari tugas user.
- **Bukti per kriteria:** Accessibility → flow F3 dengan keyboard.
- **Satu layar dari pekerjaanmu:** form laporan di kantor, karena tombol simpan dan hapus terlihat sama kuat.

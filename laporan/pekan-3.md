# Laporan pekan 3 · Typography dan warna website

**Brief:** B (Mentorku), platform mentoring soft skills 1-on-1 untuk developer.

## Progres

- [x] 3.1 Tulis font, type scale, dan palet beserta alasannya
- [x] 3.2 Ganti mode tampilan ke high fidelity
- [x] 3.3 Terapkan typography dan warna ke seluruh halaman website sekaligus
- [x] 3.4 Nilai halaman utuh, tulis section yang perlu di-polish, lalu audit nilai yang terpakai
- [x] 3.5 Cek kontras setiap pasangan warna dan catat yang lolos
- [x] 3.6 Laporan pekan ini

Hasil: ketiga halaman website (`website/index.html`, `website/mentor.html`, `website/harga.html`) dalam mode high fidelity, dengan `style.css`, `hero.js`, `bidang.js` (baru), `mentor.js`, dan `nav.js`. Sebelum 3.1, rencana halaman di `CLAUDE.md` bagian 4 diperbarui dengan keputusan iterasi pekan 2 atas permintaan peserta.

**Tambahan setelah laporan, 23 November 2026:** peserta mengubah halaman Harga di luar langkah (8 permintaan). Rencana Harga di `CLAUDE.md` bagian 4 belum diperbarui (section Benefit masih tertulis).

**Revisi setelah feedback fasilitator, 26 November 2026:** dua putaran feedback fasilitator (tertulis, lalu Loom) dan revisi lanjutan peserta di Beranda, ditambah audit tampilan. `hero.js` dan `bidang.js` diganti `carousel.js`; foto pengganti ada di `website/img/` (sumber di `website/img/CREDITS.md`). Rencana Beranda di `CLAUDE.md` bagian 4 sudah diperbarui.

## Keputusan design

Dikutip dari `CLAUDE.md` bagian 5.

- **Font:** Poppins, karena dinilai flexible dan dapat terbaca dengan jelas
- **Type scale:** (ukuran / line-height, dalam px)

  | Peran | Desktop | HP |
  |---|---|---|
  | Judul halaman (hanya Hero) | 40 / 48 | 32 / 40 |
  | Judul section | 32 / 40 | 24 / 32 |
  | Subjudul | 24 / 32 | 20 / 28 |
  | Teks pembuka | 20 / 28 | 20 / 28 |
  | Body | 16 / 24 | 16 / 24 |
  | Teks kecil | 14 / 20 | 14 / 20 |
  | Label | 12 / 16 | 12 / 16 |

- **Palet:** latar #F4F3EE, teks #111110, aksen #B5FF00 untuk energi dan aksi utama, sukses #2E7D32, error #C0392B
  - **Warna pendukung:** teks keterangan #595958 (paragraf pembuka, jabatan, deskripsi, rating), garis kartu dan pemisah #CCCBC7, placeholder foto #E2E1DD, garis input #868582, latar kartu #FFFFFF, hover teks dan garis di latar terang #4F7000. Hitam #111110 juga jadi latar section tegas (Hero, kotak ajakan, footer), dengan teks #F4F3EE dan hijau #B5FF00 di atasnya.

- **Pasangan warna yang lolos kontras (3.5):**

  | Pasangan | Teks | Latar | Rasio | Lolos |
  |---|---|---|---|---|
  | Teks utama di latar | #111110 | #F4F3EE | 17:1 | ya |
  | Teks utama di kartu | #111110 | #FFFFFF | 18,89:1 | ya |
  | Keterangan di latar | #595958 | #F4F3EE | 6,31:1 | ya |
  | Keterangan di kartu | #595958 | #FFFFFF | 7.01:1 | ya |
  | Label "Foto" di placeholder | #595958 | #E2E1DD | 5,35:1 | ya |
  | Teks tombol di hijau | #111110 | #B5FF00 | 15,53:1 | ya |
  | Teks terang di section hitam | #F4F3EE | #111110 | 17:1 | ya |
  | Paragraf Hero di hitam | #CCCBC7 | #111110 | 11,63:1 | ya |
  | Hover hijau di hitam | #B5FF00 | #111110 | 15,53:1 | ya |
  | Hover hijau di latar terang | #B5FF00 | #F4F3EE | 1.09:1 | tidak, diganti ke #4F7000 |

- **Polish dan audit (3.4):**
  - Polish: section about, karena hierarki dari judul section tergeser dengan "kalau sendirian" dan "kalau bareng mentor"
  - Audit: 7 ukuran font, 8 warna; di luar scale: tidak ada (16/16 panah kartu mentor, 20/24 panah Hero dan tombol tutup menu, dan #000000 bawaan browser sudah dikembalikan ke scale dan palet)

**Keputusan tampilan yang belum tertulis di bagian 4 atau 5** (dari log):

- Section yang berisi aksi berlatar hitam: "wadah hitam memang dipertunjukan untuk blok yang berisi aksi". Dipakai di Hero, wadah Bidang, kotak ajakan, footer, dan list mentor (beserta jumlah hasil "8 mentor" berwarna hijau neon).
- Semua hover hijau ("untuk hover tolong samakan menjadi hijau seperti lihat semua mentot"): hijau neon di latar hitam, #4F7000 untuk teks dan garis di latar terang.
- Label "Kalau sendirian" dan "Kalau bareng mentor" kembali jadi label teks abu (polish 3.4); kedua kolom About dan kartu testimoni utama memakai warna kartu yang sama (latar putih, garis tipis).
- Bidang di Beranda: satu wadah hitam berisi enam kartu; desktop grid 3 × 2 dengan gambar 1:1; HP satu bidang selebar wadah dengan tombol panah ← → dan panah ↗ di gambar.
- Jarak antar isi section disamakan 64px di desktop dan 48px di HP.
- **Halaman Harga, setelah laporan:** "aku masih kurang srek dengan tampilan di halaman harga bisakah kamu berikan rekomendasi", lalu mengikuti referensi pricing ("coba ubah menjadi seperti ini"). Hasil akhir: section Benefit dihapus ("tidak usah ada section yang kamu dapat deh redundan soalnya"); "Coba satu sesi dulu, lanjut kalau cocok" jadi judul halaman; label, judul, paragraf, dan kartu harga ada di satu kotak hitam bersudut di atas latar terang; kedua kartu bertumpuk dan mendatar (nama, harga, catatan, dan tombol di kiri, "Yang kamu dapat" bercentang di kanan); Per sesi kartu hijau neon dengan tombol hitam bertulisan hijau dan catatan "Bayar satu sesi aja, nggak terikat paket."; Paket 4 sesi kartu putih bergaris atas hijau; kedua tombol sama panjang ("button nya samakan dong si panjangnya"). Section hitam penuh dan kotak selebar layar dicoba lalu dikembalikan ("hmmm jangan semuanya hitam deh", "nope balikin lagi deh kurang cocok ternyata").

**Revisi setelah feedback fasilitator** (dikutip dari `CLAUDE.md` bagian 4, Beranda):

- "Revisi fasilitator 1 (pilihan 1C, 2A): foto mentor dan user berupa potret grayscale yang diberi warna aksen (diganti di revisi peserta); batas section lewat ritme latar"
- "Revisi peserta: foto mentor dan user berwarna asli dan formal (foto Bidang tetap grayscale dan hijau saat hover); tombol panah Hero dan Bidang diganti swipe dengan titik penanda di tengah"
- "Revisi fasilitator 2 (pilihan 1A dan C, 2A): Bidang jadi section hitam penuh (Hero hitam, About terang, Bidang hitam, Cerita user terang dengan kartu ajakan hitam), whitespace antar section lebih lega dan garis tebal di awal tiap section; pembanding di About dibuat tegas: Kalau sendirian redup dengan tanda ✕, Kalau bareng mentor kartu hitam dengan ✓ hijau"
- Hero: "Mentor ditampilkan sebagai kartu foto, satu mentor per bidang yang bergantian lewat swipe dengan titik penanda (referensi: kartu foto di hero Topmate)" dan "Lihat semua mentor jadi slide terakhir di carousel (revisi peserta), ke Daftar mentor."
- Cerita User: "lalu kartu ajakan hitam di section yang sama (revisi peserta). Kiri: hook dari target karier user ("Target kariermu tinggal beberapa bulan lagi?"), ajakan mulai dari satu sesi, dan tombol Pesan sesi. Kanan: benefit sesi pertama dan harga dari `data/plans.json`. Di HP kartunya sederhana seperti kotak ajakan awal: satu kalimat dan tombol Pesan sesi"

Keputusan tampilan revisi yang belum tertulis di bagian 4 atau 5 (dari log): label "Mau latihan apa" dan panah ↗ di kartu Bidang berwarna hijau, baris kedua judul Bidang tetap putih ("untuk latihannya juga beda kyknya jangan hijau deh"); titik penanda di HP lebih kecil ("penanda swipe nya kecilin aja twin di mobile").

## Cara mengarahkan Claude Code

Permintaan kunci dari log:

- "Palet: latar #F3EBDD, teks #111110, aksen #B5FF00 untuk energi dan fokus perhatian, sukses #356B1B, error #B0412F" beserta detail pemakaian setiap warna (Paper Cream, Vinyl Black, Neon Lime, Warm Brown, Paper Shadow, Coral, Golden Yellow, Dusty Pink)
- "hmmm aku suka aksen hitam dan hijau nya sisanya tolong ubah lagi ke versi kedua yang aku buat setelah versi biru"
- "Polish: section about, karena hierarki dari judul section tergeser dengan "kalau sendirian" dan "kalau bareng mentor""
- "wadah hitam memang dipertunjukan untuk blok yang berisi aksi"
- "kita perbaiki yang section bidang dulu, itu sepertinya buat menjadi scroll kesamping seperti bidang saja deh agar jarak ke cerita user yang merupakan masalah utama tidak terlalu jauh"

Jumlah iterasi (dihitung dari log):

- Palet di 3.1 dan 3.3: palet dicoba tujuh kali sebelum final (biru, latar #E0DFD5, dekoratif turunan aksen, lime #D7FF3F, Paper Cream, Paper Cream dengan latar #F4F3EE dan tanpa Paper Shadow, lalu gabungan aksen Paper Cream dengan palet kedua).
- Hover: 4 permintaan (semua hijau, hanya warna teks, hijau neon, garis ikut hijau), lalu diganti ke #4F7000 di 3.5.
- Section About: 7 permintaan (warna kartu, label hijau neon, garis tepi huruf yang diurungkan, kotak hitam, label kapsul, lalu polish 3.4).
- Section Bidang setelah 3.5: 7 permintaan (geser ke samping, grid desktop, kartu hitam, satu wadah hitam, gambar lebih pendek, tombol panah HP, panah ↗ hanya di HP).
- Daftar mentor: 2 permintaan (list mentor dalam wadah hitam, jumlah hasil ikut masuk).
- Lain-lain: menu header dikembalikan, jarak antar section, kartu Cerita user.
- Halaman Harga setelah laporan: 8 permintaan (rekomendasi diterapkan, layout mengikuti referensi pricing, Benefit dihapus dan hitam penuh, hitam penuh dikembalikan, tombol sama panjang, tombol lebar penuh, kotak selebar layar, kotak dikembalikan).

Kapan rencana atau deskripsi diperbaiki dulu dibanding hanya mengulang permintaan:

- Keputusan font, type scale, dan palet ditulis peserta di bagian 5 lebih dulu (3.1), lalu palet diganti di bagian 5 setelah percobaan di halaman ("Palet: latar #F4F3EE, teks #111110, aksen #B5FF00 untuk energi dan aksi utama, ..."), dan warna pendukung ditambahkan atas permintaan peserta.
- Palet Paper Cream ditulis peserta sebagai deskripsi lengkap pemakaian setiap warna sebelum diterapkan.
- Perubahan lain diminta langsung ke tampilan. Peserta empat kali meluruskan maksud setelah hasil tidak sesuai: kartu Cerita user ("bukan layout nya tapi warna nya"), hover ("kenapa malah highlight"), Bidang ("maksudnya persegi panjang ke bawah ...", lalu "disatukan semua menjadi satu div ..."), dan sekali mengurungkan perubahan ("urungkan").
- Peserta memakai referensi warna dari coolors (gambar palet) dan meminta daftar warna yang terpakai sebelum menulis palet final.
- Untuk halaman Harga, peserta meminta rekomendasi dulu, lalu memakai screenshot referensi pricing; dua kali meluruskan maksud ("bukan button nya, tapi si black box nya") dan dua kali meminta hasil dikembalikan.

**Revisi setelah feedback fasilitator, 26 November 2026:**

- Feedback dijawab dengan memilih dari tiga arah yang ditawarkan Claude Code per poin: "1. C 2. A 3. C", lalu "1. A & C 2. A 3. A".
- Setelah melihat hasil, peserta mengubah arah sendiri: "gambar mentor dan reviewer tidak usah di hijaukan lek, bidang sih aman. lalu gunakan foto yang formal", "Ganti tombol buat menggerakan bidang dan mentor menjadi swipe saja. Berikan penanda nya juga ya twin", "Untuk CTA nya terlalu penuh twin aku pengen yang minimalistic saja yang penting cerita dari web ini masih tersambung dari hero ke cerita user dan motivasi user masih tinggi untuk menekan CTA untuk pesan sesi pertama", lalu "untuk CTA di bawah kyknya tetap jadi card aja twin tapi berikan hook dan ajakan gitu mungkin serta benefit" dan "taruh di section yang sama kyk cerita user aja twin CTA nya".
- Jumlah iterasi: CTA sebelum footer 6 kali (urgensi dengan slot, tiga langkah dengan panel harga, minimalis, kartu, kartu di Cerita user, versi HP sederhana); foto 3 kali (duotone hijau, formal berwarna asli, Putri dan Hendra diganti); carousel 4 kali (swipe dengan titik, titik di tengah, Lihat semua mentor jadi slide terakhir, titik HP dikecilkan); aksen hijau Bidang 2 kali.
- Peserta melaporkan masalah dari HP sendiri: "overflow twin buat di hp".
- Peserta memakai skill design-taste-frontend hanya untuk audit ("audit aja twin"), bukan untuk membangun ulang, lalu memilih temuan yang dibetulkan ("nomor 2 dan 3 saja betulkan twin").

## Feedback dan tindak lanjut

- **3.1:** alasan font masih umum ("flexible"); 14px di luar pola kelipatan 4. Ditindaklanjuti di audit 3.4: 14px tetap karena ada di type scale peserta ("Teks kecil 14/20").
- **3.1, palet pertama:** aksen #657ED4 3,8:1 dengan teks putih. Peserta meminta rekomendasi, lalu mencoba palet lain; palet biru akhirnya diganti.
- **3.3:** catatan kontras hijau neon di latar terang (1,03–1,22:1) untuk hover dan label About. Peserta mencoba garis tepi huruf lalu mengurungkannya, memindah label ke kapsul, lalu di 3.4 mengembalikan label ke teks abu; di 3.5 hover di latar terang diganti ke #4F7000.
- **3.4:** polish About ditindaklanjuti; nilai di luar scale (16/16, 20/24, #000000) dikembalikan ke scale dan palet.
- **3.5:** semua pasangan teks minimal 4,5:1 setelah penggantian ke #4F7000; #4F7000 ditambahkan ke warna pendukung.
- **Setelah 3.5, "apakah masih ada yang belum efektif":** gambar Bidang terlalu dominan (ditindaklanjuti: wadah hitam, gambar lebih pendek, versi HP dengan tombol panah) dan Daftar mentor tanpa penanda aksi utama (ditindaklanjuti sebagian: list mentor dalam wadah hitam). Belum ditindaklanjuti: section harga di halaman Harga belum memakai wadah hitam padahal berisi aksi utama, Daftar mentor belum menyebut "Pesan sesi", dan aturan "hitam untuk blok yang berisi aksi" belum ditulis di bagian 5.

- **Setelah laporan, halaman Harga:** rekomendasi Claude Code (kartu harga dalam wadah hitam sesuai aturan peserta, judul benefit diturunkan, ruang kosong kartu Per sesi diisi catatan) diterapkan, lalu diganti layout referensi pricing. Catatan yang belum ditindaklanjuti: rencana Harga di bagian 4 perlu diperbarui karena section Benefit (yang menjawab M2) dihapus dan isinya pindah ke daftar di kartu harga.

**Revisi setelah feedback fasilitator, 26 November 2026:**

- **Feedback fasilitator 1:** "Coba kasih foto2 dan thumbnailnya mas biar kelihatan real", "Perjelas batas antar sectionnya", "Coba explore lagi bagian CTA sebelum footer, kasih urgensi kenapa perlu segera daftar". Ditindaklanjuti: foto pengganti di Hero, Bidang, Daftar mentor, dan testimoni; ritme latar per section; CTA sebelum footer dieksplor. Urgensi berupa slot nyata dari `data/mentors.json` sempat dipakai, lalu dilepas saat peserta memilih CTA minimalis. Yang tersisa sekarang hook dari target karier user.
- **Feedback fasilitator 2 (Loom):** About dan Bidang terlihat seperti satu section, pembanding belum tegas, CTA terakhir perlu lebih besar dengan benefit dan konteks sesi pertama. Ditindaklanjuti: Bidang jadi section hitam penuh dengan whitespace dan garis tebal di awal section, pembanding ✕ dan ✓, kartu ajakan dengan hook, ajakan, dan benefit sesi pertama (di HP hanya kalimat dan tombol).
- **Audit tampilan (skill design-taste-frontend), tanpa mengubah desain:** dibetulkan: slide Lihat semua mentor tidak terlihat saat difokus lewat Tab (carousel kini menggeser ke kartu yang difokus), dan urutan heading Harga (judul kartu h3 → h2, tampilan sama). Tidak dikerjakan atas pilihan peserta: area sentuh titik penanda di HP (14px, di bawah 24px WCAG). Dicatat untuk nanti: belum ada skip link (pekan 7), logo dan link menu di bawah 44px (aturan Button pekan 4). Paragraf keterangan #595958 di #F4F3EE (6,31:1) lolos WCAG AA, sudah ada di tabel kontras.
- Belum ditindaklanjuti: Putri Ayu kini tanpa hijab dan dua foto pengganti terakhir (Putri, Hendra) tidak semirip mentor lain dengan user Indonesia; benefit sesi pertama di Beranda hanya tampil di desktop.

## Refleksi

_Ditulis peserta._

- **Keputusan tersulit pekan ini dan kenapa:** keputusan tersulit pada pekan ini adalah memilih warna yang cocok, karena banyak sekali warna yang bisa digunakan akan tetapi tidak efektif dan mencari kontras yang pas dengan mempertahankan brand colour itu menurut aku sangat susah.
- **Satu hal yang akan dilakukan berbeda:** mungkin aku akan memperbaiki wireframe sampai benar benar beres terlebih dahulu sebelum menentukan warna

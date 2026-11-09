# Laporan pekan 1 · Dokumen kedua project

**Brief:** B (Mentorku), platform mentoring soft skills 1-on-1 untuk developer.

## Progres

- [x] 1.1 Pilih brief dari fasilitator
- [x] 1.2 Pahami brief-mu: pilih masalah yang paling mengancam goal di website dan web app, dan sikapmu saat bisnis dan user bertabrakan
- [x] 1.3 Tulis isi yang menjawab masalah M1–M3 website
- [x] 1.4 Tandai titik di flow kunci yang butuh validasi, loading, atau pesan error
- [x] 1.5 Laporan pekan ini

## Keputusan design

**Prioritasku (1.2)**

- **Website:** M3 paling mengancam goal, karena kalau tidak terjawab, pengunjung tidak akan memesan satupun sesi jika pengunjung ragu akan kualitas mentor yang ditawarkan.
- **Web app:** M2 paling mengancam goal, karena kalau tidak terjawab, user yang sudah membeli sesi akan merasa kecewa kepada produk dan tidak membeli sesi berikutnya karena user tidak mengikuti sesi yang dijadwalkan karena lupa, ini bisa dicegah dengan adanya kemudahan dalam menemukan sesi yang sudah dijadwalkan dan user juga dapat menjadwal ulang jika pengingat sudah terlewat.
- **Saat bertabrakan:** Di Pilih jadwal dan bayar, bisnis ingin user membeli langsung 4 sesi, sedangkan user takut "payah, aku sudah membeli 4 sesi dan yang aku terima hanya ini saja selama 1 sesi, aku merasa tidak worth it untuk memebeli 4 sesi ini." Kalau bisnis didahulukan, user akan menutup layar jadwal dan bayar sebelum melakukan pertimbangan karena user merasa ada rasa khawatir yang ditimbulkan. Kalau user didahlukan, bisnis tidak mendapatkan keuntungan yang sebesar 4 sesi. Aku mendahulukan user, dan tampilannya menjawab keduanya dengan cara menampilkan pilihan Per sesi yang sudah ada di plans sebagai coba dulu, lalu setelah itu user dapat memilih membayar 4 sesi selanjutnya atau tidak menggunakan jasa ini.

**Isi yang menjawab masalah website (1.3)**

- M1: pengunjung perlu melihat mentor yang cocok dengan topics yang diinginkan dan pengalaman mentor sehingga pengunjung dapat mempercayai mentor tersebut, isinya dari `data/mentors.json` (tiga mentor yang memenuhi dan pengalaman tertinggi)
- M2: pengunjung perlu melihat harga dari sesi yang dia pilih dan deskripsi singkat pada sesi itu akan dilakukan apa sehingga pengunjung dapat membayangkan apa yang akan dia dapat di sesi tersebut, dan jika sesi sudah selesai pengunjung dapat membandingkan bayangan dan realita nya apa yang dia dapatkan, isinya dari `data/plans.json` dan `data/mentors.json`
- M3: pengunjung perlu melihat record dari mentor tersebut seperti rating, jam terbang, banyaknya sesi yang ditangani, dan juga testimoni, isinya dari `data/mentors.json` dan `data/testimonials.json` (testimoni untuk Mentorku secara umum, bukan untuk mentor tertentu)

**Titik yang butuh validasi, loading, atau pesan error (1.4)**

- F1 langkah 3 (Daftar): butuh validasi, karena email jika tidak sesua dengan format dan salah membuat user tidak bisa mendaftarkan dirinya ke web.
- F2 langkah 3 (jadwal dan bayar): saat user melakukan pembayaran membutuhkan loading dan block sampai ssesi terkonfirmasi sehingga tidak menyebabkan multiple click yang mengakibatkan user membayar lebih dari 1 kali
- F2 langhak 3 (jadwal dan pembayaran): butuh pesan error saat terjadi kegagalan, rollback ke form pengisian dan form tetap terisi hanya saja kembali sebelum dia menekan submit, karena jika user tidak mendapatkan pesan error user akan mengira sudah berhasil melakukan pembayaran sesi, ditambah jika itu error dan tidak di rollback maka akan ada kemungkinan uang user akan terambil walaupun error
- F3 langkah 4 (Detail sesi): butuh loading dan tombol nonaktif, karena dapat mengurangi jatah sesi user (asumsi: jika user menekan pesan lagi maka akan terjadwal secara otomatis dengan mentor yang sama akan tetapi beda hari saja)

## Cara mengarahkan Claude Code

Permintaan kunci dari log:

- "B" (memilih brief, Claude Code mengerjakan setup)
- "oke kita gunakan yang sudah ada di plans sebagai coba dulu, lalu untuk jawaban nomor 4 ubah ke jadwal dan bayar"
- "oke untuk sumber M2 tuliskan dua @briefs/B/data/plans.json & @briefs/B/data/mentors.json"
- "apakah aku bisa menambahkan 1 state loading lagi? soalnya menurut aku di F3 diperlukan loading dan block juga saat pesan lagi"
- "jelaskan kepadaku apa yang terjadi saat pesan lagi"

Iterasi: pekan ini belum ada halaman atau section yang dibangun. Semua langkah berupa tulisan, dan setiap jawaban disusun lewat tanya jawab satu pertanyaan per giliran. Peserta memperbaiki tulisannya sendiri sebelum disimpan sebanyak lima kali: jawaban 2 di 1.2 (kata "mendapatkan" menjadi "menemukan … dan menjadwal ulang"), layar tabrakan di 1.2 (Harga menjadi Pilih jadwal dan bayar), cara menjawab tabrakan di 1.2 (promo trial menjadi pilihan Per sesi dari data), M2 di 1.3 (ditulis ulang dengan isi yang spesifik, lalu sumbernya ditambah), dan titik ketiga di 1.4 (alasan ditambahkan). Setelah 1.4 tercentang, peserta menambah satu titik di F3 atas inisiatifnya sendiri dan meminta penjelasan perilaku "Pesan lagi" sebelum menulis akibatnya.

## Feedback dan tindak lanjut

- **1.2:** efektif, karena setiap pilihan punya akibat dari sisi user. Clue bahwa brief menyebut tabrakan di Pilih jadwal dan bayar ditindaklanjuti peserta dengan mengganti layarnya. Clue bahwa harga trial atau promo tidak ada di `plans.json` ditindaklanjuti dengan memakai pilihan Per sesi. Catatan untuk pekan 2: urutan section Beranda perlu mencerminkan M3 di atas M1.
- **1.3:** M2 versi pertama masih mengulang masalah. Peserta menulis ulang dengan harga dan gambaran isi sesi, lalu menambah `mentors.json` sebagai sumber. Catatan untuk pekan 2: tiga mentor di M1 diambil dari semua bidang atau dari bidang yang dicari pengunjung; testimoni tidak terkait mentor tertentu (peserta menegaskan ini disengaja).
- **1.4:** lubang "karena" di titik pesan error diisi peserta. Catatan bahwa F3 belum punya titik rawan ditindaklanjuti peserta dengan menambah titik F3 langkah 4. Catatan untuk nanti: asumsi "terjadwal otomatis" berbeda dengan F2 yang lewat Pilih jadwal dan bayar, perlu dikonfirmasi ke fasilitator.

## Refleksi

_Ditulis peserta._

- **Keputusan tersulit pekan ini dan kenapa:** keputusan tersulit yang aku rasakan itu ada di menentukan bagaimana flow berjalan, aku harus membayang bayang agar menemukan titik yang membutuhkan validasi, loading, dan pesan error.
- **Satu hal yang akan dilakukan berbeda:** mungkin aku akan mengarahkan kamu untuk membuat rangkuman antara brief, data, dan pertanyaan atau tidak apa yang diinginkan sehingga aku dapat mengerti pertanyaan lebih jelas

# Panduan peserta · Design Sense untuk Developer

Panduan ini menjelaskan cara kerja program dari pekan 1 sampai 10: di mana kamu belajar, di mana kamu membangun, dan bagaimana Claude Code memandumu. Tujuannya supaya kamu tidak perlu memikirkan "selanjutnya apa", dan tenagamu habis untuk materinya.

## Tiga tempat kerja

| Tempat | Gunanya |
|---|---|
| **Learning path** (designsense.web.id) | Materi setiap pekan: Sesi A (prinsip) dan Sesi B (Track Taste), tugas pekan ini, goal program, dan brief. Mulai setiap pekan dari sini. |
| **Repo-mu + Claude Code** | Tempat membangun kedua project. `CLAUDE.md` di repo ini memandu langkahmu, mencatat progres, dan menjadi catatan keputusan design-mu. |
| **Library referensi di Notion** | Hasil Track Taste: contoh section yang efektif dari produk nyata, yang kamu pakai saat membangun. |

Tugas, feedback, dan diskusi tidak lewat situs atau repo: tugas dikirim langsung ke fasilitator, dan diskusi ada di thread pekan itu di Google Chat.

## Persiapan, sekali di awal

1. Pastikan kamu bisa membuka learning path (login dengan email yang didaftarkan fasilitator), punya akses ke template starter kit di GitHub, dan sudah login di Claude Code.
2. Buat repo-mu dari template: buka `github.com/sidiqprihatno/designsense-starterkit`, klik **Use this template**, buat repo private, lalu clone ke komputermu. Dengan GitHub CLI:

   ```bash
   gh repo create nama-repo-mu --template sidiqprihatno/designsense-starterkit --private --clone
   ```

3. Masuk ke folder repo, jalankan `claude`, lalu ketik `/mulai`. Claude Code menunjukkan peta 10 pekan dan ritme kerjanya, lalu menanyakan brief-mu (A atau B, dari fasilitator) dan menyiapkannya.
4. Duplikat template Library Referensi di Notion dari link di Info kelas, lalu bagikan ke fasilitator.

## Ritme setiap pekan

1. **Baca materinya dulu.** Buka pekan itu di learning path, baca Sesi A dan Sesi B. Claude Code memandu langkah, tapi materinya ada di sana.
2. **Pindah pekan di repo.** Saat fasilitator mengumumkan pekan baru, ketik `/pekan N` (misalnya `/pekan 2`). Claude Code menunjukkan checklist pekan itu. Pekan tidak dihitung dari tanggal, karena jadwal bisa bergeser kalau satu pekan diulang.
3. **Kerjakan langkah demi langkah:**
   - `/lanjut` → Claude Code membuka langkah berikutnya: kenapa langkah ini penting, lalu satu pertanyaan kecil per giliran. Setiap pertanyaan disertai contoh dari produk lain (Kebunku, di `langkah/contoh.md`) sebagai gambaran cara menulis, bukan untuk disalin.
   - Jawab satu per satu di chat. Setelah semua terjawab, Claude Code menyusun jawabanmu apa adanya ke format langkah itu, menunjukkannya dulu, lalu memasukkannya ke `CLAUDE.md` dan memberi feedback. Kamu juga boleh menjawab semuanya sekaligus, atau menulis langsung di `CLAUDE.md` lalu ketik `/cek`.
   - `/cek` → feedback: apa yang sudah efektif, apa yang kurang efektif, dan pertanyaan untuk memperbaikinya. Langkah dicentang di Progres kalau sudah cukup.
   - Kalau langkahnya bagian Claude Code, ia membangun satu bagian dari tulisanmu, lalu kamu menilai hasilnya.
   - Ulangi sampai semua langkah pekan itu tercentang.
4. **Track Taste.** Kerjakan Sesi B dan tambahkan dua-tiga referensi ke library-mu.
5. **Laporan.** Ketik `/laporan`. Claude Code menyusun `laporan/pekan-N.md` dari catatan selama pekan itu: progres, keputusan design-mu, cara kamu mengarahkan Claude Code, dan feedback yang kamu tindak lanjuti. Refleksinya kamu tulis sendiri.
6. **Simpan dan kirim.** Commit dan push repo-mu (atau minta Claude Code: "commit dan push progres pekan ini"), lalu kirim link repo dan hasil Track Taste langsung ke fasilitator. Feedback-nya juga langsung ke kamu.

## Perintah

| Perintah | Gunanya |
|---|---|
| `/mulai` | Peta program dan langkah pertama; setelah itu, peta posisimu kapan saja |
| `/lanjut` | Langkah berikutnya di pekan ini |
| `/cek` | Feedback untuk bagian yang baru kamu tulis atau bangun |
| `/pekan N` | Pindah ke pekan N saat fasilitator mengumumkannya |
| `/laporan` | Laporan pekan ini, dengan refleksimu |
| `/laporan N` | Laporan pekan tertentu, misalnya yang terlewat |
| `/laporan akhir` | Laporan akhir dari semua pekan, bahan presentasi pekan 10 |

Perintah ini jalan pintas, bukan satu-satunya cara. Kamu tetap bisa menulis biasa, misalnya "cek flow-ku", "kenapa section Hero ini terasa ramai?", atau "jelaskan beda user goal dan business goal". Progres-mu tersimpan di bagian **Progres** di `CLAUDE.md`, jadi kamu bisa berhenti dan melanjutkan kapan saja.

## Laporan pekanan

Selama kamu bekerja, Claude Code mencatat setiap permintaanmu dan tanggapanmu atas hasilnya di `laporan/pekan-N-log.md`. Di akhir pekan, `/laporan` menyusun catatan itu menjadi satu laporan. Fasilitator membacanya untuk melihat cara berpikirmu: bagaimana kamu memberi instruksi, kapan kamu memperbaiki rencana atau deskripsi dibanding hanya mengulang permintaan, dan alasan kamu menerima atau menolak hasil.

Laporan bukan nilai. Tulis permintaanmu sejelas mungkin, dengan alasan dan prinsipnya, karena itulah yang terekam. Claude Code juga mengingatkan kalau laporan pekan sebelumnya belum dibuat.

## Pembagian kerja

Program ini melatih kepekaan design, bukan kecepatan membuat tampilan. Karena itu ada batas yang jelas:

| Kamu yang memutuskan dan menulis | Claude Code yang mengerjakan |
|---|---|
| User, goal, flow, dan daftar halaman | Setup brief dan file |
| Rencana halaman website dan layar web app (tujuan, urutan section), deskripsi section, dan "Kenapa layout ini" | Kode HTML, CSS, dan JS dari rencanamu |
| Font, type scale, palet, dan alasannya | Menerapkan typography, warna, dan token |
| Daftar state dan pesan error | Membangun state dan simulasinya (`?state=`) |
| Temuan usability test dan aturan accessibility | Memperbaiki temuan yang kamu pilih |
| Penilaian atas setiap hasil | Feedback dan pertanyaan lewat `/cek` |

Kalau kamu meminta Claude Code mengisi bagianmu, ia akan menolak dan memberi pertanyaan pemandu. Itu disengaja: bagian itulah yang dinilai, dan bagian itu juga yang melatih matamu.

## Melihat hasilmu

Jalankan server di folder repo:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000/website/` (P1) dan `http://localhost:8000/app/` (P2). Mulai pekan 6, kondisi yang tidak ideal bisa dibuka lewat URL, misalnya `http://localhost:8000/app/?state=error`.

## Peta 10 pekan

| Pekan | Di repo (dipandu `/lanjut`) | Di luar repo |
|---|---|---|
| 1 | Brief, user, goal, flow, daftar halaman. Belum ada tampilan. | Mulai library referensi |
| 2 | Rencana dan wireframe abu-abu tiga halaman website, lalu perbaikan per section | Bedah beranda dan 5-second test |
| 3 | Font, type scale, palet, lalu website high fidelity dan cek kontras | Bedah typography dan warna referensi |
| 4 | Spacing scale, `tokens.css`, Button dan Input di website | Bedah token produk nyata lewat DevTools |
| 5 | Sisa revisi website, rencana lima layar web app, lalu onboarding, beranda user, dan layar inti produk dari token website | Bedah layar web app, lalu **Review fase 1** (Google Meet) |
| 6 | Layar daftar dan transaksi, state semua layar, pesan error, validasi | Flow teardown |
| 7 | Usability test flow kunci F1–F3 dengan 1–2 orang, cek accessibility, perbaikan, aturan accessibility | Dua aplikasi di HP sendiri, lalu **Review fase 2** |
| 8 | Design system dan checklist review UI di `CLAUDE.md`, satu halaman baru dari sistem itu | Bedah design system publik |
| 9 | Perbaikan dari design crit, cek diri dengan rubrik | Memberi design crit ke peserta lain |
| 10 | Perbaikan terakhir, bahan presentasi | Satu layar dari pekerjaanmu, lalu **Presentasi** dan penilaian akhir |

## Supaya maksimal

- **Halaman dulu, baru section.** Mulai dari tujuan halaman dan urutan section-nya, supaya halaman terbaca sebagai satu cerita menuju aksi utama. Bangun halaman utuh, nilai sebagai satu halaman, lalu perbaiki section yang kurang efektif satu per satu. Di web app, daftarkan juga kondisi layarnya sejak awal: kosong, peringatan, konfirmasi.
- **Kalau hasilnya kurang efektif, perbaiki deskripsinya dulu,** baru minta ulang. Deskripsi yang jelas adalah keterampilan yang sedang dilatih.
- **Jelaskan dengan prinsip, bukan selera.** "Kurang efektif karena ada dua aksi utama yang bersaing" lebih berguna daripada "kurang bagus".
- **Commit setelah setiap langkah selesai,** supaya mudah kembali kalau ada yang rusak.
- **Selesai lebih cepat?** Kerjakan tantangan "Kalau selesai lebih cepat" di learning path. Materi pekan berikutnya tidak dibuka lebih awal: tambah kedalaman, bukan kecepatan.
- **Website dulu, lalu web app.** Pekan 2–4 fokus ke website, pekan 5–8 ke web app, pekan 9–10 ke keduanya. Fokusnya yang bergeser, tidak ada yang terkunci: website tetap boleh diperbaiki sampai pekan 10.
- **Macet?** Tanya di thread pekan itu di Google Chat. Pertanyaanmu kemungkinan juga pertanyaan peserta lain.

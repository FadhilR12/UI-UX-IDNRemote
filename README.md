# Starter kit · Design Sense untuk Developer

Repo awal untuk kedua project program: **website SaaS** (P1) dan **web app** (P2). Keduanya prototype interaktif di kode, bukan produk lengkap: HTML, CSS, dan JS dengan data contoh, tanpa backend atau database. Daftar dan transaksi tetap ada sebagai flow, tapi disimulasikan. Batas pekerjaannya (masalah, flow kunci, dan scope) dikunci di brief-mu. Kamu membangunnya dengan Claude Code: kamu menentukan struktur, isi, dan alasannya, Claude Code menulis kodenya.

## Mulai di pekan 1

1. Buat repo sendiri dari template ini (tombol **Use this template** di GitHub), lalu clone.
2. Fasilitator memberi tahu brief-mu: **A** atau **B**.
3. Buka terminal di folder repo, jalankan `claude`, lalu ketik `/mulai`.

Dari situ Claude Code memandu langkah demi langkah sesuai pekan yang sedang berjalan: memilih brief, lalu bagian yang perlu kamu lengkapi di `CLAUDE.md`.

| Perintah | Gunanya |
|---|---|
| `/mulai` | Peta 10 pekan, cara kerja, dan langkah pertama (memilih brief). Setelah itu, ketik lagi kapan saja untuk melihat posisimu |
| `/lanjut` | Langkah berikutnya di pekan ini, dan apa yang perlu kamu lengkapi |
| `/cek` | Feedback untuk bagian yang baru kamu tulis atau bangun. Langkah dicentang di Progres kalau sudah cukup |
| `/pekan 2` | Pindah ke pekan berikutnya saat fasilitator mengumumkannya |
| `/laporan` | Laporan pekan ini di `laporan/`, dengan refleksimu. `/laporan 3` untuk pekan tertentu, `/laporan akhir` di pekan 10 |

Cara kerja lengkap dari pekan 1 sampai 10 ada di [PANDUAN.md](PANDUAN.md).

Bagian yang berisi keputusan design, seperti user, goal, flow, deskripsi section, dan alasannya, tetap kamu tulis sendiri. Claude Code bertanya dan mengkritik, tapi tidak mengisinya untukmu. Progres-mu tercatat di bagian **Progres** di `CLAUDE.md`.

## Isi repo

```
CLAUDE.md        Kerangka yang kamu lengkapi setiap pekan, dengan Progres dan aturan untuk Claude Code.
.claude/commands Perintah /mulai, /lanjut, /cek, /pekan, dan /laporan.
laporan/         Log dan laporan pekanan, ditulis Claude Code.
PANDUAN.md       Cara kerja program dari pekan 1 sampai 10.
langkah/         Panduan setiap langkah per pekan, dan contoh.md: contoh cara menulis dari produk lain.
briefs/A/        Brief A: brief.md dan data contoh (data/*.json)
briefs/B/        Brief B: brief.md dan data contoh (data/*.json)
tokens.css       Design token. Kosong sampai pekan 4.
website/         P1 · Website SaaS
app/             P2 · Web app
```

## Tiga tahap

| Tahap | Pekan | Hasilnya |
|---|---|---|
| Dokumen | 1 | User, goal, flow, dan daftar halaman di `CLAUDE.md`. Belum ada UI. |
| Wireframe | 2 | Tiga halaman website sebagai HTML abu-abu dari rencanamu. Yang dinilai hanya struktur. |
| High fidelity | 3–10 | Website: typography, warna, dan token (pekan 3–4). Web app langsung high fidelity dari token website: tiga layar di pekan 5, layar daftar dan transaksi bersama state di pekan 6. Lalu accessibility dan design system untuk keduanya. |

Mode tampilan yang sedang berjalan (`wireframe` atau `high fidelity`) ditulis di `CLAUDE.md`, dan Claude Code mengikuti aturannya. Mode berganti di langkah 3.2, setelah kamu setujui.

## Cara bekerja dengan Claude Code

- **Halaman dulu, baru section.** Tulis tujuan halaman dan urutan section-nya, lalu bangun satu halaman utuh. Baru setelah dinilai sebagai satu halaman, perbaiki section yang kurang efektif satu per satu.
- Sebelum meminta, tulis dulu di `CLAUDE.md`: rencana halaman untuk membangun halaman, atau deskripsi section (tujuan, isi, referensi, aksi utama) untuk memperbaiki satu section.
- Setelah hasilnya keluar, nilai dengan prinsip pekan itu. Kalau kurang efektif, perbaiki deskripsinya atau prompt-mu, lalu minta lagi.
- Isi **"Kenapa layout ini"** di setiap section. Bagian ini yang dinilai, bukan hanya tampilannya.

## Menjalankan

Semua halaman HTML, CSS, dan JS polos, tanpa build step dan tanpa backend. Isi diambil dari `briefs/<brief-mu>/data/`.

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000/website/` dan `http://localhost:8000/app/`.

Kondisi yang tidak ideal disimulasikan lewat URL, misalnya `http://localhost:8000/app/?state=error` atau `?state=kosong`. Prototype tetap menunjukkan perjalanan user lengkap: onboarding, happy path, edge case, loading, kosong, error, aksi berhasil, dan aksi gagal.

## Mengirim tugas

Tugas setiap pekan dikirim langsung ke fasilitator, bersama hasil Track Taste: link repo-mu, dengan laporan pekan itu di `laporan/pekan-N.md`. Feedback-nya juga langsung ke kamu.

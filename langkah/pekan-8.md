# Pekan 8 · Design system

Keputusan dari website (pekan 3–4) dan web app (pekan 5–7) dirapikan menjadi satu design system kecil, lalu diuji: bisakah Claude Code membangun halaman baru hanya dari sistem itu?

## 8.1 · Rapikan menjadi design system *(kamu)*

- **Kenapa:** design system adalah brief untuk AI dan untuk dirimu sendiri di masa depan. Aturan yang tidak tertulis akan ditebak.
- **Yang kamu lakukan:** rapikan bagian 5–8 menjadi aturan pemakaian.
- **Template:**
  ```
  Token: [daftar singkat dan maknanya]
  Component: [nama] · dipakai untuk [..] · tidak dipakai untuk [..]
  State: [aturan umum]
  Accessibility: [aturan]
  Larangan: [hal yang tidak boleh dilakukan]
  Checklist review UI:
  - [cek dari ukuran berhasil pekan 1–7, misalnya "satu aksi utama per layar"]
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **9. Design system**.
- **Cukup kalau:** setiap component punya kapan dipakai dan kapan tidak, dan checklist review UI mencakup pekan 1–7.

## 8.2 · Halaman baru dari design system *(Claude Code)*

- **Yang kamu lakukan:** pilih satu halaman tambahan di web app dari brief, tulis rencana halamannya seperti 5.3, lalu ketik `/lanjut`. Claude Code membangunnya hanya dari design system.
- **Cukup kalau:** halaman baru tidak memakai nilai atau component di luar sistem.

## 8.3 · Nilai dan perjelas aturan *(kamu)*

- **Yang kamu lakukan:** nilai halaman baru itu dengan checklist review UI. Di mana Claude Code menebak? Perjelas aturan yang ternyata kurang jelas.
- **Template:**
  ```
  - Claude menebak: [apa] → aturan baru: [..]
  ```
- **Masuk ke:** `CLAUDE.md` › bagian **9. Design system**.
- **Cukup kalau:** setiap tebakan ditindaklanjuti dengan aturan atau keputusan.

## 8.4 · Laporan pekan ini *(kamu dan Claude Code)*

- **Yang kamu lakukan:** `/laporan`, refleksi, commit, push, kirim.

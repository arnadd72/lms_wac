# World Access Computer (WAC) — Learning Management System
## Product Requirements Document (PRD) — v2.0

> **Nama Produk:** WAC Learning Platform
> **Nama Merek:** World Access Computer (WAC)
> **Tagline:** *"Master Your Office. Elevate Your Career."*
> **Versi Dokumen:** 2.0 — Comprehensive Edition
> **Status:** Final Draft
> **Tech Stack:** React.js · Laravel 11 · MySQL 8 · Vercel
> **Klasifikasi:** CONFIDENTIAL — Internal Use Only

---

## Daftar Isi

1. [Executive Summary](#1-executive-summary)
2. [Latar Belakang & Konteks Bisnis](#2-latar-belakang--konteks-bisnis)
3. [Tujuan Produk & OKR](#3-tujuan-produk--okr)
4. [Target Pengguna & Persona](#4-target-pengguna--persona)
5. [Prinsip Desain & UX Philosophy](#5-prinsip-desain--ux-philosophy)
6. [Arsitektur Informasi & Sitemap](#6-arsitektur-informasi--sitemap)
7. [Fitur Lengkap — Student Side](#7-fitur-lengkap--student-side)
8. [Fitur Lengkap — Instructor Side](#8-fitur-lengkap--instructor-side)
9. [Fitur Lengkap — Admin Panel](#9-fitur-lengkap--admin-panel)
10. [Sistem Gamifikasi & Engagement](#10-sistem-gamifikasi--engagement)
11. [Sistem Notifikasi & Komunikasi](#11-sistem-notifikasi--komunikasi)
12. [Arsitektur Teknis & System Design](#12-arsitektur-teknis--system-design)
13. [Database Schema Lengkap](#13-database-schema-lengkap)
14. [API Design & Endpoints](#14-api-design--endpoints)
15. [Desain & UI/UX Specification](#15-desain--uiux-specification)
16. [Keamanan & Compliance](#16-keamanan--compliance)
17. [Performa & Skalabilitas](#17-performa--skalabilitas)
18. [Testing & Quality Assurance](#18-testing--quality-assurance)
19. [Deployment & DevOps](#19-deployment--devops)
20. [Roadmap & Sprint Planning](#20-roadmap--sprint-planning)
21. [Risiko, Asumsi & Dependensi](#21-risiko-asumsi--dependensi)
22. [Acceptance Criteria & Definition of Done](#22-acceptance-criteria--definition-of-done)
23. [Lampiran](#23-lampiran)

---

## 1. Executive Summary

**World Access Computer (WAC)** adalah lembaga kursus komputer yang kini bertransformasi ke ranah digital dengan membangun platform Learning Management System (LMS) berbasis web. Platform ini dirancang untuk menghadirkan pengalaman belajar Microsoft Office yang **terstruktur, interaktif, dan berdampak nyata** bagi jutaan pekerja dan pelajar Indonesia.

WAC LMS bukan sekadar platform video belajar biasa. Ini adalah ekosistem pembelajaran lengkap yang menggabungkan konten berkualitas tinggi, sistem penilaian otomatis, jalur karir yang terukur, komunitas belajar yang aktif, dan sertifikasi resmi yang diakui industri — semua dalam satu platform yang dirancang dengan standar UX kelas enterprise.

### Differensiator Utama WAC vs Kompetitor

| Aspek | YouTube / Blog | Kompetitor Umum | **WAC LMS** |
|---|---|---|---|
| Jalur Belajar | ❌ Tidak ada | ✅ Ada | ✅ Terstruktur per level & karir |
| Tugas & Penilaian | ❌ Tidak ada | ⚠️ Sebagian | ✅ Real-world task + rubrik |
| Sertifikat | ❌ Tidak ada | ✅ Ada | ✅ Terverifikasi + QR Code |
| Komunitas | ⚠️ Komentar | ⚠️ Forum dasar | ✅ Forum + Live Q&A |
| Dukungan Bahasa | 🌐 Campuran | 🌐 Campuran | ✅ Full Bahasa Indonesia |
| Admin Panel | ❌ N/A | ⚠️ Kompleks | ✅ Intuitif & UX-first |
| Gamifikasi | ❌ Tidak ada | ⚠️ Minimal | ✅ Poin, badge, streak, leaderboard |

---

## 2. Latar Belakang & Konteks Bisnis

### 2.1 Tentang World Access Computer

WAC telah beroperasi sebagai lembaga kursus komputer offline sejak bertahun-tahun. Dengan rekam jejak terpercaya dalam mengajarkan Microsoft Office kepada ribuan siswa, WAC kini memperluas jangkauan ke platform digital untuk:

- Melayani siswa yang tidak dapat hadir secara fisik
- Menyediakan materi yang bisa diakses kapan saja dan di mana saja
- Meningkatkan kapasitas instruktur dalam menjangkau lebih banyak pelajar
- Membangun brand WAC sebagai pemimpin pendidikan digital Office di Indonesia

### 2.2 Masalah yang Diselesaikan

**Dari sisi pengguna:**
- Tidak ada sumber belajar Office yang terstruktur dan terpercaya dalam Bahasa Indonesia
- Belajar dari YouTube tidak memiliki jalur yang jelas sehingga pengguna bingung harus mulai dari mana
- Tidak ada bukti kompetensi resmi yang bisa digunakan untuk melamar kerja atau promosi jabatan
- Sulit mengukur sejauh mana kemajuan belajar sendiri

**Dari sisi bisnis WAC:**
- Keterbatasan kapasitas kelas fisik yang membatasi jumlah siswa
- Biaya operasional offline yang tinggi
- Tidak adanya platform digital untuk mendukung loyalitas dan retensi siswa
- Data pembelajaran siswa yang tidak terdigitalisasi sehingga sulit untuk analitik bisnis

### 2.3 Peluang Pasar

- Lebih dari 70 juta pekerja aktif di Indonesia membutuhkan keahlian digital
- Penetrasi internet Indonesia terus meningkat, termasuk di kota-kota tier 2 dan 3
- Microsoft Office masih menjadi skill wajib di hampir semua lowongan pekerjaan
- Pasar e-learning Indonesia tumbuh signifikan pasca pandemi

---

## 3. Tujuan Produk & OKR

### 3.1 Objective 1 — Akuisisi Pengguna

| Key Result | Target (3 Bulan Post-Launch) |
|---|---|
| Total pengguna terdaftar | 1.000 akun |
| Pengguna yang enroll minimal 1 kursus | 700 (70%) |
| Pengguna yang menyelesaikan minimal 1 modul | 500 (50%) |
| Traffic organik (SEO) | 5.000 visit/bulan |

### 3.2 Objective 2 — Engagement & Retensi

| Key Result | Target |
|---|---|
| Course completion rate | ≥ 60% |
| DAU / MAU ratio | ≥ 30% |
| Rata-rata sesi belajar per user | ≥ 25 menit/hari |
| 30-day retention rate | ≥ 40% |
| NPS (Net Promoter Score) | ≥ 50 |

### 3.3 Objective 3 — Kualitas Konten & Platform

| Key Result | Target |
|---|---|
| Rating rata-rata kursus | ≥ 4.3/5.0 |
| Uptime platform | ≥ 99.5% |
| API response time (p95) | < 500ms |
| Bug P1 yang dilaporkan saat launch | 0 |
| Sertifikat diterbitkan dalam 3 bulan | ≥ 300 |

---

## 4. Target Pengguna & Persona

### 4.1 Persona 1 — "Rina si Fresh Graduate"

| Atribut | Detail |
|---|---|
| **Nama** | Rina, 22 tahun |
| **Pekerjaan** | Fresh graduate, sedang melamar kerja |
| **Lokasi** | Purwokerto, Jawa Tengah |
| **Pendidikan** | D3 Administrasi Perkantoran |
| **Perangkat** | Smartphone (utama), Laptop (sekunder) |
| **Goals** | Mendapatkan sertifikat Office untuk memperkuat CV |
| **Pain Points** | Tidak tahu urutan belajar yang benar; YouTube terlalu random |
| **Kebiasaan** | Belajar malam hari setelah aktivitas harian, 1–2 jam per sesi |

### 4.2 Persona 2 — "Budi si Karyawan Aktif"

| Atribut | Detail |
|---|---|
| **Nama** | Budi, 29 tahun |
| **Pekerjaan** | Staff administrasi di perusahaan swasta |
| **Lokasi** | Semarang |
| **Goals** | Naik jabatan dengan menguasai Excel lanjutan dan PowerPoint |
| **Pain Points** | Tidak punya waktu ikut kursus offline; butuh belajar di sela-sela kerja |
| **Kebiasaan** | Belajar saat istirahat siang atau perjalanan pulang kerja (mobile) |

### 4.3 Persona 3 — "Pak Hendra si Pemilik UMKM"

| Atribut | Detail |
|---|---|
| **Nama** | Pak Hendra, 42 tahun |
| **Pekerjaan** | Pemilik UMKM, mengurus pembukuan sendiri |
| **Goals** | Menguasai Excel untuk laporan keuangan sederhana |
| **Pain Points** | Tidak familiar dengan teknologi; butuh UI yang sangat simpel |
| **Kebiasaan** | Belajar di pagi hari, lebih suka video yang singkat dan langsung ke poin |

### 4.4 Persona 4 — "Mbak Sari si Instruktur WAC"

| Atribut | Detail |
|---|---|
| **Nama** | Sari, 35 tahun |
| **Peran** | Instruktur WAC yang mengajar offline & online |
| **Goals** | Membuat & mengelola kursus online dengan mudah, memantau progress siswa |
| **Pain Points** | Tidak mau tool yang rumit; mau fokus pada kualitas konten, bukan teknis |
| **Ekspektasi** | CMS yang intuitif, dashboard yang informatif, notifikasi yang jelas |

---

## 5. Prinsip Desain & UX Philosophy

### 5.1 Design Philosophy

WAC LMS dibangun dengan filosofi desain **"Clarity Over Cleverness"** — setiap elemen UI harus memiliki tujuan yang jelas dan tidak membingungkan pengguna dari segala latar belakang digital literacy.

```
PRINSIP DESAIN WAC:

  1. SIMPLE BUT POWERFUL
     Tampilan bersih, navigasi intuitif, tanpa clutter
     Fitur kompleks tersembunyi di balik interface sederhana

  2. MOBILE-FIRST
     Dirancang untuk layar kecil dulu, lalu diperluas ke desktop
     Semua interaksi utama dapat dilakukan dengan satu tangan

  3. PROGRESSIVE DISCLOSURE
     Tampilkan informasi secara bertahap sesuai kebutuhan
     Jangan bombardir pengguna dengan semua fitur sekaligus

  4. FEEDBACK LOOP
     Setiap aksi pengguna mendapat respons visual yang jelas
     Loading state, success state, error state selalu ada

  5. INCLUSIVE DESIGN
     Accessible untuk semua tingkat digital literacy
     Font besar, kontras tinggi, instruksi yang jelas
```

### 5.2 Visual Design System

#### Color Palette

```
PRIMARY BRAND:
  WAC Blue       #1D4ED8   — Tombol utama, link, aksen brand
  WAC Blue Light #EFF6FF   — Background section, highlight

NEUTRAL:
  Gray 900       #111827   — Heading utama
  Gray 700       #374151   — Body text
  Gray 500       #6B7280   — Subtitle, placeholder
  Gray 100       #F3F4F6   — Background card, input
  White          #FFFFFF   — Background utama

SEMANTIC:
  Success        #16A34A   — Lulus kuis, selesai modul
  Warning        #D97706   — Deadline mendekat, nilai cukup
  Error          #DC2626   — Gagal, input invalid
  Info           #0891B2   — Tips, informasi tambahan

ACCENT:
  Gold           #F59E0B   — Badge premium, sertifikat, star rating
```

#### Typography

```
Font Family:
  Heading  → Inter (semibold / bold)
  Body     → Inter (regular / medium)
  Code     → JetBrains Mono (formula Excel, kode)

Type Scale:
  Display  → 36px / 40px line-height
  H1       → 30px / 36px
  H2       → 24px / 32px
  H3       → 20px / 28px
  Body LG  → 18px / 28px
  Body     → 16px / 24px
  Body SM  → 14px / 20px
  Caption  → 12px / 16px
```

#### Spacing & Layout

```
Grid System : 12-column, max-width 1280px, padding 24px
Spacing     : 4px base unit (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96)
Border Radius: sm=4px, md=8px, lg=12px, xl=16px, full=9999px
Shadow      : xs, sm, md, lg (progressively deeper)
```

### 5.3 UX Principles untuk Admin Panel

Admin panel dirancang dengan standar enterprise-grade UX:

- **Dashboard-first:** Semua informasi penting terlihat di satu layar tanpa scroll
- **Bulk Actions:** Semua tabel mendukung multi-select dan aksi massal
- **Smart Search:** Global search yang bisa mencari user, kursus, dan transaksi sekaligus
- **Contextual Help:** Tooltip dan panduan inline di setiap form kompleks
- **Undo Actions:** Aksi destruktif (hapus, arsip) bisa di-undo dalam 5 detik
- **Keyboard Shortcuts:** Power user dapat navigasi tanpa mouse
- **Persistent Filters:** Filter dan sorting tersimpan per sesi
- **Breadcrumb Navigation:** Selalu tahu posisi dalam hierarki admin

---

## 6. Arsitektur Informasi & Sitemap

### 6.1 Sitemap — Public Area (Tanpa Login)

```
WAC LMS (/)
├── Beranda (/)
│   ├── Hero Section
│   ├── Kategori Kursus
│   ├── Kursus Unggulan
│   ├── Cara Kerja Platform
│   ├── Testimoni Alumni
│   └── CTA Daftar Gratis
│
├── Kursus (/courses)
│   ├── Semua Kursus (dengan filter & sort)
│   ├── Per Kategori (/courses?category=excel)
│   └── Detail Kursus (/courses/:slug)
│       ├── Overview & Silabus
│       ├── Preview Video (gratis)
│       ├── Rating & Ulasan
│       └── Tombol Enroll
│
├── Instruktur (/instructors)
│   └── Profil Instruktur (/instructors/:id)
│
├── Tentang WAC (/about)
├── Blog & Tips (/blog)
│   └── Artikel (/blog/:slug)
├── FAQ (/faq)
├── Kontak (/contact)
│
├── Auth
│   ├── Login (/login)
│   ├── Register (/register)
│   ├── Verifikasi Email (/verify-email)
│   └── Reset Password (/reset-password)
│
└── Verifikasi Sertifikat (/verify/:code)
```

### 6.2 Sitemap — Student Area (Setelah Login)

```
Dashboard Siswa (/dashboard)
├── Overview
│   ├── Kursus Aktif
│   ├── Progress Minggu Ini
│   ├── Streak Belajar
│   └── Sertifikat Terbaru
│
├── Belajar (/learn)
│   ├── Kursus Saya (/learn/my-courses)
│   ├── Lanjutkan Belajar (Continue watching)
│   └── Player Kursus (/learn/:courseSlug/:lessonSlug)
│       ├── Video Player
│       ├── Materi Teks & PDF
│       ├── Catatan Pribadi
│       ├── Navigasi Modul (sidebar)
│       └── Diskusi Per Lesson
│
├── Kuis & Tugas (/assessments)
│   ├── Kuis Aktif
│   ├── Tugas yang Belum Dikerjakan
│   └── Riwayat Pengerjaan
│
├── Progress (/progress)
│   ├── Progress Per Kursus
│   ├── Analitik Belajar (waktu, konsistensi)
│   └── Skill yang Dikuasai
│
├── Sertifikat (/certificates)
│   ├── Sertifikat Diperoleh
│   └── Detail + Download
│
├── Komunitas (/community)
│   ├── Forum Diskusi
│   └── Live Session (jadwal)
│
├── Leaderboard (/leaderboard)
│
└── Profil (/profile)
    ├── Edit Profil
    ├── Pengaturan Notifikasi
    ├── Keamanan & Password
    └── Riwayat Aktivitas
```

### 6.3 Sitemap — Admin Panel (/admin)

```
Admin Panel (/admin)
├── Dashboard (/admin/dashboard)
│
├── Manajemen User
│   ├── Semua User (/admin/users)
│   ├── Siswa (/admin/users/students)
│   ├── Instruktur (/admin/users/instructors)
│   └── Detail User (/admin/users/:id)
│
├── Manajemen Kursus
│   ├── Semua Kursus (/admin/courses)
│   ├── Tambah Kursus (/admin/courses/create)
│   ├── Edit Kursus (/admin/courses/:id/edit)
│   └── Review Kursus Pending (/admin/courses/review)
│
├── Manajemen Konten
│   ├── Modul & Lesson (/admin/content)
│   ├── Bank Soal (/admin/question-bank)
│   └── Manajemen File (/admin/media)
│
├── Enrollment & Akses
│   ├── Semua Enrollment (/admin/enrollments)
│   └── Akses Manual (/admin/enrollments/grant)
│
├── Penilaian
│   ├── Tugas Masuk (/admin/submissions)
│   └── Dispute Nilai (/admin/grade-disputes)
│
├── Sertifikat
│   ├── Semua Sertifikat (/admin/certificates)
│   └── Template Sertifikat (/admin/certificates/templates)
│
├── Komunitas
│   ├── Forum Moderasi (/admin/forum)
│   └── Jadwal Live Session (/admin/live-sessions)
│
├── Laporan & Analitik
│   ├── Overview (/admin/reports)
│   ├── Laporan Pengguna (/admin/reports/users)
│   ├── Laporan Kursus (/admin/reports/courses)
│   ├── Laporan Engagement (/admin/reports/engagement)
│   └── Export Data (/admin/reports/export)
│
├── Pengaturan
│   ├── Umum (/admin/settings/general)
│   ├── Email & Notifikasi (/admin/settings/notifications)
│   ├── Keamanan (/admin/settings/security)
│   ├── Integrasi (/admin/settings/integrations)
│   └── Backup & Maintenance (/admin/settings/maintenance)
│
└── Log & Audit
    ├── Activity Log (/admin/logs/activity)
    └── Error Log (/admin/logs/errors)
```

---

## 7. Fitur Lengkap — Student Side

### 7.1 Onboarding & Registrasi

#### 7.1.1 Halaman Landing & Marketing

**Kebutuhan:**
- Hero section dengan value proposition yang kuat, animasi subtle, dan CTA yang jelas
- Section "Mengapa WAC?" dengan 4–6 keunggulan bergambar ikon
- Showcase kursus populer dengan thumbnail, rating, jumlah siswa, dan harga (gratis)
- Cara kerja platform dalam 3 langkah (Daftar → Belajar → Dapat Sertifikat)
- Testimoni alumni dengan foto, nama, dan hasil nyata (misal: "Naik jabatan 3 bulan setelah belajar Excel")
- Footer dengan link kategori kursus, sosial media WAC, dan kontak
- Responsif sempurna di semua ukuran layar
- Load time < 2 detik (optimasi gambar, lazy loading, CDN)

#### 7.1.2 Registrasi Akun

**Kebutuhan:**
- Form registrasi: nama lengkap, email, password, konfirmasi password
- Validasi real-time (email format, password strength indicator)
- Konfirmasi email dengan link yang expired dalam 24 jam
- Halaman sukses registrasi dengan instruksi langkah selanjutnya
- Resend email verifikasi jika tidak diterima
- Proteksi dari bot dengan rate limiting (maks 5 registrasi per IP per jam)

#### 7.1.3 Login & Autentikasi

**Kebutuhan:**
- Login dengan email + password
- Opsi "Ingat saya" (persistent session 30 hari)
- Lupa password: kirim email reset, link valid 1 jam
- Halaman ganti password yang aman (cek password lama)
- Blokir akun setelah 5 kali percobaan login gagal (unlock via email)
- Session timeout setelah 8 jam tidak aktif

#### 7.1.4 Onboarding Flow (Baru Pertama Kali Login)

**Kebutuhan:**
- Wizard 3 langkah setelah pertama kali login:
  1. **Perkenalan:** "Halo [nama], apa tujuan belajarmu?" (pilih goal dari opsi yang tersedia)
  2. **Level awal:** "Seberapa familiar kamu dengan Excel/Word?" (Pemula / Pernah pakai / Mahir)
  3. **Rekomendasi kursus:** Tampilkan 3 kursus yang direkomendasikan berdasarkan jawaban
- Skip onboarding tersedia
- Onboarding hanya muncul sekali; bisa diulang dari Settings

### 7.2 Katalog Kursus

#### 7.2.1 Halaman Katalog

**Kebutuhan:**
- Grid tampilan kursus (default) dan list view (toggle)
- Setiap card kursus menampilkan:
  - Thumbnail berkualitas tinggi
  - Nama kursus & instruktur
  - Level (Pemula / Menengah / Mahir)
  - Durasi total (jam & menit)
  - Jumlah modul & lesson
  - Rating bintang (agregat) dan jumlah rating
  - Jumlah siswa terdaftar
  - Badge "Baru" / "Populer" / "Diperbarui" jika relevan
  - Status: Gratis / Premium (untuk versi future)
- Filter side panel (desktop) / bottom sheet (mobile):
  - Kategori (Excel, Word, PowerPoint, Outlook, Access, Office 365)
  - Level (Pemula, Menengah, Mahir)
  - Durasi (< 2 jam, 2–5 jam, > 5 jam)
  - Rating (4 bintang ke atas, dll.)
  - Status Enrollment (Sudah Diikuti, Belum Diikuti)
- Sorting: Terpopuler, Rating Tertinggi, Terbaru, A–Z
- Pagination dengan infinite scroll (mobile) atau numbered pages (desktop)
- Jumlah hasil yang ditampilkan ("Menampilkan 24 dari 48 kursus")

#### 7.2.2 Halaman Detail Kursus

**Kebutuhan:**
- Hero dengan thumbnail/preview video, judul, rating, enrollment count
- Tabs: Overview | Silabus | Instruktur | Ulasan
- **Overview tab:**
  - Deskripsi lengkap kursus
  - Apa yang akan dipelajari (checklist poin-poin)
  - Prasyarat (skill yang dibutuhkan sebelumnya)
  - Untuk siapa kursus ini cocok
- **Silabus tab:**
  - Daftar semua modul yang bisa di-expand
  - Setiap modul menampilkan daftar lesson, tipe (video/teks/kuis), dan durasi
  - Preview gratis tersedia untuk lesson pertama setiap modul
- **Instruktur tab:**
  - Foto, nama, bio singkat, jumlah kursus, jumlah siswa yang diajar
- **Ulasan tab:**
  - Breakdown rating (5 bintang, 4 bintang, dst.) dengan progress bar
  - Daftar ulasan dengan nama, tanggal, bintang, dan komentar
  - Filter ulasan (semua / positif / kritis)
  - Form tambah ulasan (hanya untuk yang sudah enroll)
- Sticky sidebar (desktop): tombol enroll, info kursus ringkas, progress jika sudah enroll
- Tombol "Bagikan kursus" (copy link, WhatsApp, Twitter)
- Breadcrumb navigasi

#### 7.2.3 Pencarian

**Kebutuhan:**
- Search bar di header yang bisa diakses dari mana saja
- Autocomplete/suggestion saat mengetik (debounce 300ms)
- Hasil pencarian mencakup: kursus, modul, artikel blog
- Halaman hasil pencarian dengan filter yang sama seperti katalog
- Pencarian kosong menampilkan "kursus populer" sebagai fallback
- Highlight kata kunci di hasil pencarian
- Riwayat pencarian tersimpan secara lokal (5 pencarian terakhir)

### 7.3 Pengalaman Belajar (Learning Experience)

#### 7.3.1 Player & Ruang Belajar

**Kebutuhan layout:**
- Layout dua kolom: player/konten (kiri, 75%) + navigasi sidebar (kanan, 25%)
- Di mobile: layout satu kolom, sidebar jadi panel geser dari bawah

**Video Player:**
- Player custom built di atas HTML5 video atau integrasi YouTube/Vimeo embed
- Kontrol: play/pause, volume, layar penuh, picture-in-picture
- Kecepatan putar: 0.5x, 0.75x, 1x (default), 1.25x, 1.5x, 1.75x, 2x
- Kualitas video: auto / 360p / 480p / 720p / 1080p (jika self-hosted)
- Subtitle / closed caption (jika tersedia)
- Skip intro/outro 10 detik
- Auto-resume dari posisi terakhir
- Auto-play lesson berikutnya setelah video selesai (bisa dimatikan)
- Mini player (pip) saat scroll ke bawah untuk membaca catatan

**Sidebar Navigasi:**
- Accordion per modul yang menampilkan semua lesson
- Status per lesson: ⬜ Belum | 🔵 Sedang | ✅ Selesai | 🔒 Terkunci
- Progress bar keseluruhan kursus di bagian atas sidebar
- Navigasi tombol "Sebelumnya" dan "Berikutnya" di bawah player
- Lebar sidebar bisa dikollaps (full-screen mode belajar)

**Jenis Konten Lesson:**
- **Video:** Video instruksional utama
- **Artikel:** Konten teks dengan gambar, tabel, dan highlight (rendered Markdown)
- **Dokumen:** File PDF, DOCX, XLSX yang bisa diunduh
- **Kuis:** Langsung tampil di halaman belajar (tidak redirect)

#### 7.3.2 Catatan Pribadi (Personal Notes)

**Kebutuhan:**
- Panel catatan bisa dibuka di samping video (split view)
- Editor teks sederhana: bold, italic, bullet, heading
- Catatan otomatis ter-timestamp dengan waktu video saat itu
- Catatan tersimpan per lesson
- Halaman "Semua Catatan" yang bisa difilter per kursus
- Export catatan ke PDF atau TXT
- Catatan bisa dicari (full-text search)

#### 7.3.3 Bookmark & Highlight

**Kebutuhan:**
- Bookmark momen video (klik ikon, beri nama, simpan timestamp)
- Daftar bookmark semua kursus tersedia di halaman profil
- Di konten teks/artikel, teks bisa di-highlight dengan warna (kuning, hijau, biru)
- Highlight tersimpan dan muncul kembali saat materi dibuka lagi

#### 7.3.4 Teks Pendamping (Transcript)

**Kebutuhan:**
- Transcript otomatis video ditampilkan di tab "Transcript" di bawah player
- Klik baris transcript → video loncat ke timestamp tersebut
- Auto-scroll transcript mengikuti posisi video
- Fitur pencarian dalam transcript

### 7.4 Sistem Kuis

#### 7.4.1 Tipe Soal yang Didukung

| Tipe | Deskripsi | Contoh Penggunaan |
|---|---|---|
| Multiple Choice (1 jawaban) | Pilih 1 dari 4 opsi | Soal teori konsep |
| Multiple Select (banyak jawaban) | Pilih semua yang benar | "Pilih semua fungsi Excel yang benar" |
| True / False | Benar atau Salah | Pernyataan tentang fitur |
| Fill in the Blank | Isi kolom kosong | "=SUM(___, B2)" |
| Matching | Pasangkan kolom A ke kolom B | Pasangkan fungsi ke deskripsinya |
| Short Answer | Jawaban teks singkat | Dinilai manual oleh instruktur |
| Ordering / Drag & Drop | Urutkan langkah-langkah yang benar | Urutan membuat Pivot Table |
| Image-based | Identifikasi bagian dari screenshot | "Klik bagian mana untuk membuka Format Cell?" |

#### 7.4.2 Konfigurasi Kuis

**Kebutuhan (per kuis):**
- Judul dan instruksi kuis
- Batas waktu pengerjaan (opsional, hitungan mundur)
- Nilai minimum lulus (passing score, misal 75%)
- Jumlah maksimal percobaan (1 / 2 / 3 / unlimited)
- Urutan soal: tetap atau diacak
- Urutan opsi jawaban: tetap atau diacak
- Tampilkan hasil langsung atau setelah semua selesai
- Review jawaban: langsung / setelah semua percobaan habis / tidak pernah

#### 7.4.3 Pengalaman Mengerjakan Kuis

**Kebutuhan:**
- Tampilan bersih satu soal sekaligus atau semua soal sekaligus (konfigurasi instruktur)
- Progress bar jumlah soal ("Soal 3 dari 10")
- Timer countdown yang visible namun tidak mengganggu
- Bisa kembali ke soal sebelumnya (jika diizinkan)
- Tandai soal untuk direview sebelum submit
- Konfirmasi sebelum submit akhir
- Hasil instan setelah submit:
  - Skor (misal: 80/100)
  - Status: Lulus ✅ / Perlu Perbaikan ❌
  - Breakdown per soal (jika review diizinkan)
  - Jawaban benar + penjelasan per soal
  - Tombol "Coba Lagi" (jika masih ada percobaan tersisa)
  - Tombol "Lanjut ke Materi Berikutnya" (jika lulus)

### 7.5 Sistem Tugas (Assignment)

#### 7.5.1 Tampilan Tugas

**Kebutuhan:**
- Halaman tugas menampilkan:
  - Judul dan deskripsi detail tugas
  - File referensi / template yang bisa diunduh (misal: file Excel kosong yang harus diisi)
  - Rubrik penilaian (kriteria dan bobot nilai)
  - Deadline dengan countdown
  - Riwayat submission sebelumnya
- Indikator status: Belum Dikerjakan / Sedang Dikerjakan / Menunggu Penilaian / Dinilai

#### 7.5.2 Pengiriman Tugas

**Kebutuhan:**
- Upload file: XLSX, DOCX, PPTX, PDF, PNG, JPG
- Maksimal ukuran file: 25 MB per file, 3 file per submission
- Drag & drop upload area
- Preview file sebelum submit
- Kolom komentar / catatan untuk instruktur (opsional)
- Konfirmasi submit yang jelas (karena tidak bisa diubah setelah deadline)
- Notifikasi email setelah submission berhasil
- Notifikasi email saat nilai sudah keluar

#### 7.5.3 Feedback Tugas

**Kebutuhan:**
- Tampilan nilai dengan breakdown per kriteria rubrik
- Komentar teks dari instruktur
- File yang sudah diberi anotasi (jika instruktur mengembalikan file)
- Nilai numerik dan status lulus/tidak
- Opsi banding nilai (dispute) dengan form penjelasan
- Jika tugas bisa dikumpulkan ulang: tombol "Submit Ulang" aktif

### 7.6 Progress & Dashboard Siswa

#### 7.6.1 Dashboard Utama

**Kebutuhan (layout dashboard):**
- **Greeting section:** "Selamat datang kembali, Rina! 👋 Streak belajarmu 5 hari berturut-turut!"
- **Continue Learning card:** Kursus terakhir yang dikerjakan + tombol lanjut langsung
- **My Courses:** Grid 2–3 kolom kursus aktif dengan progress bar per kursus
- **Weekly Goal:** Target menit belajar per minggu + progress bar (bisa di-set sendiri)
- **Upcoming Deadlines:** Tugas dan kuis yang akan deadline dalam 7 hari ke depan
- **Recent Achievements:** Badge terbaru yang diperoleh
- **Recommended Courses:** Kursus rekomendasi berdasarkan riwayat belajar

#### 7.6.2 Halaman Progress Detail

**Kebutuhan:**
- Grafik aktivitas belajar (GitHub-style heatmap): visualisasi intensitas belajar harian dalam setahun
- Grafik waktu belajar per minggu (bar chart)
- Total waktu belajar keseluruhan (jam & menit)
- Kursus yang sedang diikuti dengan % completion
- Kursus yang sudah selesai
- Skill yang dikuasai (tag skill per kursus yang selesai)
- Perbandingan progress minggu ini vs minggu lalu

#### 7.6.3 Halaman Kursus Saya

**Kebutuhan:**
- Tab: Aktif | Selesai | Wishlist
- Filter per kategori
- Sorting: Terakhir Diakses, Progress, Nama
- Card kursus dengan progress bar yang detail

### 7.7 Sertifikat

#### 7.7.1 Penerbitan Sertifikat

**Kebutuhan:**
- Sertifikat otomatis diterbitkan saat semua lesson dan kuis wajib selesai (progress = 100%)
- Notifikasi push + email "Selamat! Sertifikatmu sudah siap"
- Halaman sertifikat dengan preview digital yang elegan

#### 7.7.2 Desain & Konten Sertifikat

**Kebutuhan:**
- Template desain profesional dengan branding WAC (logo, warna brand)
- Elemen sertifikat:
  - Nama lengkap siswa (sesuai profil)
  - Nama kursus yang diselesaikan
  - Tanggal penerbitan
  - Nama instruktur dan tanda tangan digital
  - Nama & logo WAC (World Access Computer)
  - Kode verifikasi unik (UUID)
  - QR Code yang mengarah ke halaman verifikasi online
- Format output: PDF resolusi tinggi (A4 landscape)
- Nomor sertifikat unik dan traceable

#### 7.7.3 Berbagi & Verifikasi

**Kebutuhan:**
- Tombol "Download PDF"
- Tombol "Bagikan ke LinkedIn" (menggunakan LinkedIn Share API)
- Link unik sertifikat yang bisa dibagikan ke siapa saja
- Halaman verifikasi publik (tanpa login): tampilkan nama, kursus, tanggal, status Valid/Tidak Valid
- Sertifikat tersimpan selamanya (tidak kedaluwarsa)

### 7.8 Komunitas & Diskusi

#### 7.8.1 Forum Diskusi Per Lesson

**Kebutuhan:**
- Setiap lesson memiliki section diskusi di bagian bawah
- Posting pertanyaan atau komentar (teks + gambar)
- Balas thread (nested reply hingga 2 level)
- Like/upvote komentar yang berguna
- Tandai jawaban sebagai "Best Answer" (oleh penanya atau instruktur)
- Sort: Terbaru / Paling Disukai / Belum Dijawab
- Notifikasi saat pertanyaanmu dijawab

#### 7.8.2 Forum Umum Per Kursus

**Kebutuhan:**
- Forum terpusat per kursus (bukan per lesson)
- Kategori thread: Pertanyaan / Tips & Trik / Showcase Karya / Off-topic
- Pin thread oleh instruktur (pengumuman penting)
- Search dalam forum
- Notifikasi langganan thread
- Moderasi: lapor postingan yang tidak pantas

#### 7.8.3 Live Session (Jadwal Kelas Online)

**Kebutuhan:**
- Kalender jadwal live session yang akan datang
- Detail sesi: judul, instruktur, tanggal & jam, topik, link meeting (Zoom/Google Meet)
- Tombol "Daftar" untuk menerima notifikasi dan tambah ke kalender
- Rekaman sesi setelah selesai tersedia di platform
- Integrasi kalender: tambah ke Google Calendar / iCal

### 7.9 Profil & Pengaturan Pengguna

#### 7.9.1 Halaman Profil Publik

**Kebutuhan:**
- Foto profil, nama, bio singkat
- Kursus yang sudah selesai (bisa diprivat)
- Sertifikat yang diraih (bisa diprivat)
- Badge & pencapaian
- Statistik: total waktu belajar, kursus selesai, streak terpanjang
- Link profil yang bisa dibagikan

#### 7.9.2 Pengaturan Akun

**Kebutuhan:**
- Edit informasi pribadi: nama, email, nomor HP, tanggal lahir, kota
- Ganti foto profil (crop & resize in-app)
- Ganti password (validasi password lama)
- Pengaturan notifikasi: email, push notification (on/off per kategori)
- Pengaturan privasi profil
- Pengaturan reminder belajar (hari & jam)
- Hapus akun (dengan konfirmasi dan grace period 14 hari)
- Download semua data saya (GDPR-style export)

---

## 8. Fitur Lengkap — Instructor Side

### 8.1 Dashboard Instruktur

**Kebutuhan:**
- Statistik ringkas: total siswa, total kursus aktif, total revenue (jika berbayar), rating rata-rata
- Grafik enrollment baru per 30 hari
- Tugas yang menunggu dinilai (dengan badge angka)
- Pertanyaan forum yang belum dijawab
- Kursus dengan engagement terendah (perlu perhatian)
- Shortcut: Buat Kursus, Lihat Submission, Lihat Pertanyaan

### 8.2 Manajemen Kursus (CMS)

#### 8.2.1 Buat Kursus Baru — Wizard Multi-Step

**Step 1 — Informasi Dasar:**
- Judul kursus (maks 80 karakter, preview SEO slug otomatis)
- Kategori (pilih satu: Excel / Word / PowerPoint / Outlook / Access / Office 365)
- Sub-kategori (misal: Excel > Pivot Table, Excel > Formula & Fungsi)
- Level: Pemula / Menengah / Mahir
- Deskripsi singkat (maks 200 karakter — untuk card)
- Deskripsi lengkap (editor rich text dengan preview)
- Bahasa pengantar

**Step 2 — Media:**
- Upload thumbnail (rekomendasi 1280x720px, preview crop)
- Video trailer / preview kursus (opsional, maks 5 menit)
- Preview sebelum upload

**Step 3 — Detail Kursus:**
- Apa yang akan dipelajari (tambah poin-poin dengan tombol +)
- Prasyarat (tambah poin-poin)
- Target peserta (siapa kursus ini untuk)
- Tags (untuk pencarian internal)

**Step 4 — Akses & Pengaturan:**
- Status: Draft / Published / Archived
- Visibilitas: Publik / Hanya dengan Link / Private
- Pengaturan sertifikat: otomatis saat selesai / manual oleh instruktur
- Persentase minimum completion untuk dapat sertifikat (default: 100%)

#### 8.2.2 Manajemen Silabus (Curriculum Builder)

**Kebutuhan:**
- Interface drag & drop untuk mengatur modul dan lesson
- Tambah modul baru (judul, deskripsi opsional)
- Di dalam modul: tambah lesson
- Jenis lesson:
  - **Video:** Upload file video langsung (mp4, max 2GB) atau embed URL (YouTube/Vimeo)
  - **Artikel:** Editor rich text (heading, bold, italic, link, gambar, code block, tabel)
  - **Dokumen:** Upload file pendukung (PDF, XLSX, DOCX) yang bisa diunduh siswa
  - **Kuis:** Buat kuis langsung atau pilih dari bank soal
  - **Tugas:** Buat assignment dengan rubrik dan deadline
- Setting per lesson:
  - Apakah lesson ini gratis (preview)
  - Apakah lesson wajib diselesaikan sebelum lanjut (prerequisite)
  - Durasi estimasi
- Reorder modul dan lesson dengan drag & drop
- Duplikasi modul atau lesson
- Hapus dengan konfirmasi

#### 8.2.3 Bank Soal

**Kebutuhan:**
- Perpustakaan soal milik instruktur tersendiri
- Tambah, edit, hapus soal
- Kategori dan tag soal
- Import soal dari file (CSV/Excel format template)
- Cari soal berdasarkan kata kunci
- Saat buat kuis, bisa pilih soal dari bank (tambah satu per satu atau random dari tag tertentu)

### 8.3 Manajemen Siswa

**Kebutuhan:**
- Daftar semua siswa yang enroll di kursus instruktur
- Filter per kursus
- Info per siswa: nama, email, tanggal enroll, progress %, nilai terakhir, status
- Export daftar siswa ke Excel
- Kirim pesan/pengumuman ke semua siswa (atau segmen)
- Akses manual: berikan akses kursus ke siswa tertentu (tanpa enroll mandiri)
- Cabut akses siswa tertentu

### 8.4 Penilaian & Feedback

**Kebutuhan:**
- Antrian submission tugas yang masuk (sorted by deadline)
- Tampilan file submission yang bisa dibuka/preview langsung di browser
- Form nilai dengan breakdown per kriteria rubrik
- Area komentar feedback (rich text)
- Upload file kembali dengan anotasi (opsional)
- Nilai keluar dan notifikasi terkirim ke siswa secara otomatis
- Riwayat semua submission yang sudah dinilai
- Statistik penilaian: rata-rata nilai, distribusi nilai per assignment

### 8.5 Analitik Kursus

**Kebutuhan:**
- Grafik enrollment baru per hari/minggu/bulan
- Completion funnel: berapa siswa masuk modul 1, modul 2, dst. (drop-off analysis)
- Lesson dengan engagement terendah (indikasi konten bermasalah)
- Distribusi nilai kuis per soal (soal mana yang paling banyak salah)
- Rata-rata waktu yang dihabiskan per lesson
- Rating dan ulasan terbaru

---

## 9. Fitur Lengkap — Admin Panel

> **Filosofi Admin Panel WAC:** Admin panel dirancang seperti produk SaaS terbaik dunia — clean, data-rich, dan tidak membuang waktu admin. Setiap halaman dapat ditindaklanjuti (actionable) tanpa harus membuka banyak tab.

### 9.1 Dashboard Admin

**Layout Dashboard:**
```
┌─────────────────────────────────────────────────────┐
│  WAC Admin               🔔 3    👤 Admin            │
├──────────┬──────────────────────────────────────────┤
│          │  📊 Overview Cards (4 kolom)              │
│ SIDEBAR  │  Total Users | Kursus Aktif | Siswa Baru  │
│          │  Completion Rate bulan ini                │
│ Dashboard│                                           │
│ Users    │  📈 Grafik Enrollment (30 hari)           │
│ Courses  │  [Line Chart]                             │
│ Content  │                                           │
│ Reports  │  ┌──────────────┐  ┌───────────────────┐  │
│ Settings │  │ Tugas Masuk  │  │ User Baru (7 hari) │  │
│ Logs     │  │ 12 menunggu  │  │ List 5 user baru   │  │
│          │  └──────────────┘  └───────────────────┘  │
└──────────┴──────────────────────────────────────────┘
```

**Metric Cards:**
- Total pengguna (dengan perbandingan bulan lalu: +12%)
- Kursus aktif / total kursus
- Enrollment baru bulan ini
- Course completion rate bulan ini

**Grafik & Chart:**
- Enrollment trend (30 hari terakhir) — Line chart
- Distribusi pengguna per kategori kursus — Donut chart
- Aktivitas belajar harian — Bar chart (heatmap mingguan)

**Panel Tindakan Cepat:**
- Tugas yang menunggu penilaian (jika admin juga menilai)
- Kursus pending review yang baru di-submit instruktur
- Laporan / dispute nilai yang belum direspon
- User baru yang perlu verifikasi manual (jika ada)

### 9.2 Manajemen User

#### 9.2.1 Daftar User

**Kebutuhan:**
- Tabel dengan kolom: Avatar, Nama, Email, Peran, Status, Tanggal Daftar, Terakhir Aktif, Aksi
- Global search (cari nama atau email)
- Filter: Peran (semua / siswa / instruktur / admin), Status (aktif / nonaktif / banned), Tanggal daftar
- Sorting pada semua kolom
- Pagination dengan pilihan 10 / 25 / 50 / 100 per halaman
- Bulk actions: aktifkan, nonaktifkan, kirim email, export
- Export ke CSV / Excel
- Tombol "+ Tambah User" untuk membuat akun manual

**Per baris tabel, aksi cepat:**
- Lihat detail (modal cepat atau halaman penuh)
- Edit peran
- Nonaktifkan / Aktifkan
- Reset password (kirim email)
- Hapus (dengan konfirmasi)

#### 9.2.2 Detail User

**Kebutuhan:**
- Profil lengkap: foto, nama, email, HP, tanggal lahir, kota, tanggal daftar
- Tab: Aktivitas | Enrollment | Sertifikat | Kuis & Nilai | Log Login
- **Aktivitas:** Timeline aktivitas belajar (pelajaran dikunjungi, kuis dikerjakan, tugas dikumpul)
- **Enrollment:** Daftar kursus yang diikuti dengan progress masing-masing
- **Sertifikat:** Semua sertifikat yang diterima, bisa di-revoke jika perlu
- **Kuis & Nilai:** Riwayat semua kuis dan nilai
- **Log Login:** IP address, device, browser, waktu login

#### 9.2.3 Manajemen Instruktur

**Kebutuhan:**
- Approve/reject pendaftaran sebagai instruktur
- Upload dokumen verifikasi (CV, portofolio, sertifikasi)
- Atur komisi jika ada pembagian revenue
- Set kursus mana yang bisa dikelola instruktur tersebut
- Suspend instruktur (nonaktifkan semua kursusnya)

### 9.3 Manajemen Kursus (Admin)

#### 9.3.1 Daftar Kursus

**Kebutuhan:**
- Tabel: Thumbnail, Judul, Instruktur, Kategori, Level, Siswa, Rating, Status, Aksi
- Filter: Kategori, Level, Status (Draft/Published/Archived/Pending Review), Instruktur
- Bulk actions: Publish, Unpublish, Arsipkan, Hapus, Pindah kategori
- Export daftar kursus

#### 9.3.2 Review & Approval Kursus

**Kebutuhan:**
- Antrian kursus yang di-submit instruktur untuk dipublish
- Checklist review: kelengkapan konten, thumbnail, deskripsi, setidaknya 1 lesson, kuis ada
- Form approval dengan catatan untuk instruktur
- Reject dengan alasan yang jelas dan actionable
- Notifikasi ke instruktur saat approved / rejected

#### 9.3.3 Edit Kursus (Override)

- Admin bisa edit field apapun dari kursus (judul, kategori, thumbnail, dll.)
- Log perubahan dicatat (siapa mengubah apa, kapan)

### 9.4 Manajemen Konten

#### 9.4.1 Bank Soal Global

**Kebutuhan:**
- Semua soal dari semua instruktur (dengan filter per instruktur)
- Admin bisa menambah soal ke bank soal global yang bisa digunakan semua instruktur
- Moderasi soal yang dilaporkan tidak pantas

#### 9.4.2 Manajemen Media

**Kebutuhan:**
- File manager untuk semua asset yang di-upload ke platform
- Filter: tipe file, instruktur, tanggal upload, ukuran
- Preview gambar dan PDF langsung di browser
- Hapus file yang tidak terpakai (unused media)
- Quota penggunaan storage per instruktur
- Total penggunaan storage keseluruhan

#### 9.4.3 Manajemen Kategori & Tag

**Kebutuhan:**
- CRUD kategori kursus (nama, ikon, deskripsi, urutan tampil)
- CRUD sub-kategori
- Manajemen tag global
- Merge tag yang duplikat

### 9.5 Manajemen Enrollment

**Kebutuhan:**
- Lihat semua enrollment: siapa enroll kursus apa, kapan, status progress
- Tambah enrollment manual (berikan akses kursus ke user tanpa self-enroll)
- Cabut enrollment
- Bulk enrollment: upload CSV berisi email + kode kursus → proses massal
- Filter: kursus, status enrollment, tanggal
- Export data enrollment

### 9.6 Manajemen Sertifikat

#### 9.6.1 Daftar Sertifikat

**Kebutuhan:**
- Semua sertifikat yang pernah diterbitkan
- Filter: kursus, instruktur, tanggal, status (valid/revoked)
- Aksi: Lihat, Download, Revoke (dengan alasan), Restore

#### 9.6.2 Template Sertifikat

**Kebutuhan:**
- Upload template sertifikat (desain dari Figma/designer → export jadi HTML template)
- Preview template dengan data dummy
- Atur mapping field: {nama_siswa}, {nama_kursus}, {tanggal}, {instruktur}, {kode_verifikasi}
- Aktivasi template (hanya 1 aktif dalam satu waktu)
- Riwayat template yang pernah digunakan

### 9.7 Moderasi Komunitas

**Kebutuhan:**
- Dashboard laporan konten: semua postingan forum yang dilaporkan
- Tampilan postingan yang dilaporkan dengan konteks thread lengkap
- Aksi: Abaikan laporan / Hapus postingan / Peringatkan user / Ban user sementara
- Riwayat moderasi (siapa, apa, kapan)
- Manajemen kata terlarang (filter otomatis)
- Pin / unpin thread di forum

### 9.8 Jadwal Live Session (Admin)

**Kebutuhan:**
- Buat jadwal live session baru: judul, instruktur, topik, tanggal/jam, link meeting, maksimal peserta
- Edit dan hapus jadwal
- Lihat siapa yang sudah daftar
- Kirim pengingat ke semua pendaftar (1 hari sebelum, 1 jam sebelum)
- Upload rekaman setelah sesi selesai

### 9.9 Laporan & Analitik

#### 9.9.1 Dashboard Laporan

**Kebutuhan:**
- Date range picker: Today / This Week / This Month / This Quarter / Custom
- KPI Cards: New Users, New Enrollments, Certificates Issued, Avg Completion Rate
- Bisa export semua laporan ke format Excel/CSV/PDF

#### 9.9.2 Laporan Pengguna

**Kebutuhan:**
- Grafik pertumbuhan user baru per hari/minggu/bulan
- Breakdown user per kota / provinsi (jika data tersedia)
- Tabel user dengan aktivitas belajar (waktu belajar total, kursus selesai)
- Cohort analysis: dari user yang daftar minggu X, berapa % yang masih aktif di minggu X+4

#### 9.9.3 Laporan Kursus

**Kebutuhan:**
- Ranking kursus berdasarkan: enrollment, completion rate, rating, waktu belajar total
- Completion rate per kursus (% siswa yang menyelesaikan)
- Drop-off rate per modul (di modul berapa siswa paling banyak berhenti)
- Performa kuis: rata-rata skor, pass rate, soal dengan jawaban salah terbanyak

#### 9.9.4 Laporan Engagement

**Kebutuhan:**
- Heatmap aktivitas belajar (jam berapa paling banyak diakses)
- Rata-rata durasi sesi belajar
- Perangkat yang digunakan (desktop / mobile / tablet)
- Browser yang digunakan
- Fitur yang paling sering digunakan

### 9.10 Pengaturan Platform

#### 9.10.1 Pengaturan Umum

**Kebutuhan:**
- Nama platform, tagline, deskripsi singkat
- Logo (header), logo (footer), favicon
- Warna brand utama (primary color picker)
- Informasi kontak: email, nomor WhatsApp, alamat
- Tautan media sosial
- Meta tag default (SEO): title, description

#### 9.10.2 Pengaturan Email & Notifikasi

**Kebutuhan:**
- Konfigurasi SMTP (host, port, user, password, encryption)
- Test kirim email
- Template email per event: welcome, verifikasi, reset password, sertifikat, nilai tugas, dll.
- Editor template email dengan variabel dinamis ({nama}, {link}, dll.)
- Log email terkirim (status: sent / failed / bounced)

#### 9.10.3 Pengaturan Keamanan

**Kebutuhan:**
- Konfigurasi kebijakan password (min length, kompleksitas)
- Jumlah percobaan login sebelum lockout
- Durasi lockout
- Daftar IP yang di-whitelist atau di-blacklist
- Toggle maintenance mode (aktifkan halaman "Sedang dalam pemeliharaan")
- Force logout semua sesi aktif (darurat)

#### 9.10.4 Backup & Maintenance

**Kebutuhan:**
- Jadwal backup otomatis database (daily, pukul 02.00 WIB)
- Download backup manual
- Log backup (sukses / gagal)
- Clear cache (application cache, view cache, config cache)
- Log error aplikasi terbaru (tail log)
- Queue monitor (job berhasil / gagal)

### 9.11 Log & Audit

**Kebutuhan:**
- **Activity Log:** Semua aksi admin dan instruktur dicatat (siapa, aksi apa, object apa, kapan, dari IP mana)
- Filter log: tanggal, user, tipe aksi
- Cari dalam log
- Tidak bisa dihapus oleh admin biasa (hanya super admin)
- **Error Log:** Error level warning dan ke atas, dengan stack trace
- Alert ke email admin jika error rate > threshold dalam 5 menit

---

## 10. Sistem Gamifikasi & Engagement

### 10.1 Poin & Reward

| Aktivitas | Poin |
|---|---|
| Menyelesaikan lesson video | +5 poin |
| Menyelesaikan lesson artikel | +3 poin |
| Lulus kuis (pertama kali) | +20 poin |
| Lulus kuis dengan skor sempurna | +30 poin |
| Mengumpulkan tugas sebelum deadline | +15 poin |
| Menyelesaikan 1 modul penuh | +50 poin |
| Menyelesaikan 1 kursus penuh | +200 poin |
| Login berturut-turut 7 hari | +50 poin bonus |
| Memberi jawaban terbaik di forum | +25 poin |
| Memberi ulasan kursus | +10 poin |

### 10.2 Badge & Achievement

| Badge | Syarat |
|---|---|
| 🎯 First Step | Selesaikan lesson pertama |
| 🔥 On Fire | Login 7 hari berturut-turut |
| 🏆 Excel Master | Selesaikan semua kursus Excel |
| ⚡ Speed Learner | Selesaikan kursus dalam < 3 hari |
| 💯 Perfect Score | Lulus kuis dengan 100% |
| 🤝 Helpful | Jawaban diklik "Best Answer" 5 kali |
| 📚 Knowledge Seeker | Enroll 5 kursus berbeda |
| 🎓 Graduate | Dapatkan sertifikat pertama |
| 🌟 WAC Champion | Selesaikan semua kursus yang tersedia |

### 10.3 Streak System

- Streak dihitung berdasarkan login + minimal 1 aktivitas belajar per hari
- Notifikasi pengingat streak sore hari (jam 18.00) jika belum belajar
- Streak yang hampir putus mendapat notifikasi lebih agresif
- Grace period: 1 freeze streak per minggu (tidak memutus streak)
- Visual streak di dashboard: api 🔥 dengan angka hari

### 10.4 Leaderboard

**Kebutuhan:**
- Leaderboard mingguan, bulanan, dan all-time
- Filter per kursus atau keseluruhan
- Posisi user sendiri selalu terlihat (sticky di bawah tabel)
- Privasi: user bisa memilih opt-out dari leaderboard publik
- Top 3 mendapat highlight khusus (podium visual)

### 10.5 Weekly Goals

**Kebutuhan:**
- User bisa set target menit belajar per minggu (30 / 60 / 120 / 180 menit / custom)
- Progress bar visual di dashboard
- Notifikasi di tengah minggu jika belum mencapai setengah target
- Notifikasi selamat saat goal tercapai
- Statistik goal tercapai vs tidak per bulan

---

## 11. Sistem Notifikasi & Komunikasi

### 11.1 Kategori Notifikasi

| Kategori | Trigger | Channel |
|---|---|---|
| **Belajar** | Lesson baru tersedia, kursus diperbarui | In-app, Email |
| **Deadline** | Tugas deadline 48 jam lagi, 24 jam lagi | In-app, Email |
| **Nilai** | Tugas selesai dinilai instruktur | In-app, Email |
| **Komunitas** | Pertanyaanmu dijawab, mention di forum | In-app |
| **Sertifikat** | Sertifikat baru diterbitkan | In-app, Email |
| **Streak** | Reminder harian, streak terancam putus | In-app, Push |
| **System** | Reset password, verifikasi email, perubahan akun | Email |
| **Promosi** | Kursus baru, event khusus | Email (opt-in) |

### 11.2 Notification Center (In-App)

**Kebutuhan:**
- Ikon lonceng di header dengan badge jumlah yang belum dibaca
- Panel dropdown notifikasi (klik ikon) dengan daftar notif terbaru (20 terakhir)
- Halaman notifikasi penuh dengan filter per kategori dan status
- Mark as read (satu per satu atau semua sekaligus)
- Delete notifikasi
- Deep link: klik notif langsung ke halaman yang relevan

### 11.3 Email Templates

Template email yang dibutuhkan (minimal):
1. Selamat datang (setelah registrasi)
2. Verifikasi email
3. Reset password
4. Enrollment berhasil
5. Sertifikat terbit
6. Nilai tugas keluar
7. Deadline tugas mendekat
8. Pengumuman dari instruktur
9. Jadwal live session (konfirmasi + reminder)
10. Laporan mingguan progress (opsional, opt-in)

Semua template menggunakan desain HTML email yang branded WAC, responsif di semua email client.

### 11.4 Pesan Langsung (Direct Message)

**Kebutuhan (fase 2):**
- Siswa bisa mengirim DM ke instruktur kursus yang diikuti
- Instruktur bisa membalas
- Batas: hanya antara siswa dan instruktur kursus aktif (bukan antar siswa)
- Admin bisa melihat semua DM untuk moderasi
- Notifikasi DM masuk

---

## 12. Arsitektur Teknis & System Design

### 12.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        PENGGUNA                             │
│         Browser (Desktop) / Mobile Browser / PWA            │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS
┌──────────────────────▼──────────────────────────────────────┐
│                   FRONTEND LAYER                            │
│              React.js (Vite) — Vercel CDN                   │
│   React Router | Zustand | React Query | Tailwind CSS       │
└──────────────────────┬──────────────────────────────────────┘
                       │ REST API (JSON) / HTTPS
┌──────────────────────▼──────────────────────────────────────┐
│                    BACKEND LAYER                            │
│               Laravel 11 — VPS / Railway                    │
│   API Routes | Controllers | Services | Jobs | Events       │
│                    Laravel Sanctum                           │
└──────┬──────────────────┬──────────────────┬────────────────┘
       │                  │                  │
┌──────▼──────┐   ┌───────▼──────┐  ┌───────▼────────┐
│   MySQL 8   │   │ File Storage │  │  Queue Worker  │
│  (Primary   │   │  (S3 / Disk) │  │  (Laravel      │
│  Database)  │   │              │  │   Horizon)     │
└─────────────┘   └──────────────┘  └───────┬────────┘
                                            │
                                    ┌───────▼────────┐
                                    │ Redis (Cache   │
                                    │ + Queue)       │
                                    └────────────────┘
```

### 12.2 Frontend Architecture (React)

```
src/
├── app/                    # App-level setup
│   ├── router.jsx          # React Router v6 config
│   ├── store.js            # Zustand global store
│   └── queryClient.js      # React Query client config
│
├── assets/                 # Static assets (images, fonts)
│
├── components/             # Reusable UI components
│   ├── ui/                 # Base components (Button, Input, Modal, etc.)
│   ├── layout/             # Layout components (Header, Sidebar, Footer)
│   └── shared/             # Shared complex components
│
├── features/               # Feature-based modules
│   ├── auth/               # Login, register, forgot password
│   ├── courses/            # Catalog, detail, enrollment
│   ├── learning/           # Player, progress, notes
│   ├── quiz/               # Quiz player, results
│   ├── assignment/         # Assignment, submission
│   ├── certificate/        # Certificate list, download
│   ├── community/          # Forum, live session
│   ├── gamification/       # Points, badges, leaderboard
│   ├── dashboard/          # Student dashboard
│   ├── instructor/         # Instructor dashboard & CMS
│   └── admin/              # Admin panel pages
│
├── hooks/                  # Custom React hooks
├── services/               # API service functions (axios)
├── utils/                  # Helper functions
└── constants/              # App-wide constants
```

### 12.3 Backend Architecture (Laravel)

```
app/
├── Http/
│   ├── Controllers/
│   │   ├── Api/             # API Controllers (versioned)
│   │   │   ├── V1/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── CourseController.php
│   │   │   │   ├── LessonController.php
│   │   │   │   ├── QuizController.php
│   │   │   │   ├── AssignmentController.php
│   │   │   │   ├── EnrollmentController.php
│   │   │   │   ├── ProgressController.php
│   │   │   │   ├── CertificateController.php
│   │   │   │   ├── CommunityController.php
│   │   │   │   └── Admin/  # Admin-specific controllers
│   │   └── Web/             # Web Controllers (jika ada SSR)
│   ├── Middleware/
│   │   ├── RoleMiddleware.php
│   │   ├── EnsureEmailVerified.php
│   │   └── AdminMiddleware.php
│   └── Requests/            # Form Request Validation
│
├── Models/                  # Eloquent Models
├── Services/                # Business Logic Layer
│   ├── CertificateService.php
│   ├── ProgressService.php
│   ├── GamificationService.php
│   └── NotificationService.php
│
├── Jobs/                    # Queue Jobs
│   ├── GenerateCertificateJob.php
│   ├── SendEmailNotificationJob.php
│   └── ProcessVideoUploadJob.php
│
├── Events/                  # Laravel Events
├── Listeners/               # Event Listeners
├── Policies/                # Authorization Policies
└── Observers/               # Model Observers

routes/
├── api.php                  # API routes (versioned: /api/v1/)
└── web.php                  # Web routes (minimal)
```

### 12.4 State Management (Frontend)

```
Zustand Stores:
├── authStore          — User session, token, role
├── courseStore        — Active course, lesson state
├── playerStore        — Video player state, position
├── notificationStore  — Unread count, notification list
└── uiStore            — Sidebar state, modals, theme

React Query Usage:
├── Course catalog      — Cached, 5 min stale time
├── Course detail       — Cached, 10 min stale time
├── User progress       — Real-time, 1 min stale time
├── Notifications       — Poll every 60 seconds
└── Leaderboard         — Cached, 15 min stale time
```

---

## 13. Database Schema Lengkap

### 13.1 User Management

```sql
-- Users
CREATE TABLE users (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE NOT NULL,
    password        VARCHAR(255) NOT NULL,
    role            ENUM('student','instructor','admin') DEFAULT 'student',
    avatar          VARCHAR(500) NULL,
    phone           VARCHAR(20) NULL,
    bio             TEXT NULL,
    city            VARCHAR(100) NULL,
    birth_date      DATE NULL,
    status          ENUM('active','inactive','banned') DEFAULT 'active',
    email_verified_at TIMESTAMP NULL,
    last_login_at   TIMESTAMP NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at      TIMESTAMP NULL -- soft delete

    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_status (status)
);

-- User Preferences
CREATE TABLE user_preferences (
    id                          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id                     BIGINT UNSIGNED NOT NULL,
    notify_email_deadline       TINYINT(1) DEFAULT 1,
    notify_email_grade          TINYINT(1) DEFAULT 1,
    notify_email_course_update  TINYINT(1) DEFAULT 1,
    notify_push_streak          TINYINT(1) DEFAULT 1,
    weekly_goal_minutes         INT DEFAULT 60,
    profile_public              TINYINT(1) DEFAULT 1,
    show_in_leaderboard         TINYINT(1) DEFAULT 1,
    video_speed                 DECIMAL(3,2) DEFAULT 1.00,
    created_at                  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Login History
CREATE TABLE login_histories (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    ip_address  VARCHAR(45),
    user_agent  TEXT,
    logged_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
);
```

### 13.2 Course & Content

```sql
-- Categories
CREATE TABLE categories (
    id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    slug        VARCHAR(120) UNIQUE NOT NULL,
    icon        VARCHAR(100) NULL,
    description TEXT NULL,
    parent_id   INT UNSIGNED NULL,
    sort_order  INT DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (parent_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Courses
CREATE TABLE courses (
    id                  BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    instructor_id       BIGINT UNSIGNED NOT NULL,
    category_id         INT UNSIGNED NOT NULL,
    title               VARCHAR(200) NOT NULL,
    slug                VARCHAR(220) UNIQUE NOT NULL,
    short_description   VARCHAR(300) NOT NULL,
    description         LONGTEXT NOT NULL,
    thumbnail           VARCHAR(500) NULL,
    trailer_url         VARCHAR(500) NULL,
    level               ENUM('beginner','intermediate','advanced') NOT NULL,
    language            VARCHAR(10) DEFAULT 'id',
    status              ENUM('draft','pending_review','published','archived') DEFAULT 'draft',
    visibility          ENUM('public','unlisted','private') DEFAULT 'public',
    total_duration      INT DEFAULT 0, -- in minutes, auto-calculated
    total_lessons       INT DEFAULT 0, -- auto-calculated
    enrolled_count      INT DEFAULT 0, -- cached count
    completion_threshold TINYINT DEFAULT 100, -- % required for certificate
    certificate_enabled TINYINT(1) DEFAULT 1,
    published_at        TIMESTAMP NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (instructor_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    INDEX idx_status (status),
    INDEX idx_category (category_id),
    FULLTEXT INDEX ft_search (title, short_description)
);

-- Course What You'll Learn
CREATE TABLE course_outcomes (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    course_id   BIGINT UNSIGNED NOT NULL,
    outcome     VARCHAR(300) NOT NULL,
    sort_order  INT DEFAULT 0,

    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Course Prerequisites
CREATE TABLE course_prerequisites (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    course_id       BIGINT UNSIGNED NOT NULL,
    prerequisite    VARCHAR(300) NOT NULL,
    sort_order      INT DEFAULT 0,

    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Modules
CREATE TABLE modules (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    course_id   BIGINT UNSIGNED NOT NULL,
    title       VARCHAR(200) NOT NULL,
    description TEXT NULL,
    sort_order  INT DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    INDEX idx_course_id (course_id)
);

-- Lessons
CREATE TABLE lessons (
    id                  BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    module_id           BIGINT UNSIGNED NOT NULL,
    title               VARCHAR(200) NOT NULL,
    type                ENUM('video','article','document','quiz','assignment') NOT NULL,
    content             LONGTEXT NULL,        -- artikel HTML atau embed URL
    video_url           VARCHAR(500) NULL,    -- URL video (YouTube/Vimeo/self-hosted)
    video_duration      INT NULL,             -- seconds
    is_preview          TINYINT(1) DEFAULT 0,
    is_required         TINYINT(1) DEFAULT 1,
    sort_order          INT DEFAULT 0,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
    INDEX idx_module_id (module_id)
);

-- Lesson Attachments
CREATE TABLE lesson_attachments (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lesson_id   BIGINT UNSIGNED NOT NULL,
    filename    VARCHAR(255) NOT NULL,
    file_url    VARCHAR(500) NOT NULL,
    file_type   VARCHAR(50) NOT NULL,
    file_size   INT NOT NULL, -- bytes
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);
```

### 13.3 Enrollment & Progress

```sql
-- Enrollments
CREATE TABLE enrollments (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id         BIGINT UNSIGNED NOT NULL,
    course_id       BIGINT UNSIGNED NOT NULL,
    status          ENUM('active','completed','expired','revoked') DEFAULT 'active',
    progress_pct    DECIMAL(5,2) DEFAULT 0.00,
    enrolled_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at    TIMESTAMP NULL,
    last_accessed_at TIMESTAMP NULL,

    UNIQUE KEY uq_user_course (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    INDEX idx_user_id (user_id),
    INDEX idx_course_id (course_id)
);

-- Lesson Progress
CREATE TABLE lesson_progress (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id         BIGINT UNSIGNED NOT NULL,
    lesson_id       BIGINT UNSIGNED NOT NULL,
    is_completed    TINYINT(1) DEFAULT 0,
    last_position   INT DEFAULT 0,       -- video timestamp in seconds
    watch_duration  INT DEFAULT 0,       -- total seconds watched
    completed_at    TIMESTAMP NULL,
    updated_at      TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE KEY uq_user_lesson (user_id, lesson_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);

-- User Notes
CREATE TABLE user_notes (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    lesson_id   BIGINT UNSIGNED NOT NULL,
    content     TEXT NOT NULL,
    timestamp   INT NULL,       -- video timestamp saat catatan dibuat
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- User Bookmarks
CREATE TABLE user_bookmarks (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    lesson_id   BIGINT UNSIGNED NOT NULL,
    label       VARCHAR(100) NULL,
    timestamp   INT NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 13.4 Quiz System

```sql
-- Quizzes
CREATE TABLE quizzes (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lesson_id       BIGINT UNSIGNED NOT NULL,
    title           VARCHAR(200) NOT NULL,
    instructions    TEXT NULL,
    pass_score      TINYINT DEFAULT 75,   -- percentage
    max_attempts    TINYINT DEFAULT 3,    -- 0 = unlimited
    time_limit      INT NULL,             -- minutes, NULL = no limit
    shuffle_questions TINYINT(1) DEFAULT 0,
    shuffle_answers TINYINT(1) DEFAULT 0,
    show_result_immediately TINYINT(1) DEFAULT 1,
    allow_review    TINYINT(1) DEFAULT 1,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- Quiz Questions
CREATE TABLE quiz_questions (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quiz_id         BIGINT UNSIGNED NOT NULL,
    question_text   TEXT NOT NULL,
    question_image  VARCHAR(500) NULL,
    type            ENUM('multiple_choice','multiple_select','true_false','fill_blank','matching','short_answer','ordering','image_based') NOT NULL,
    explanation     TEXT NULL,   -- penjelasan jawaban benar
    points          TINYINT DEFAULT 1,
    sort_order      INT DEFAULT 0,

    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Quiz Options (untuk multiple choice, dll.)
CREATE TABLE quiz_options (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    question_id BIGINT UNSIGNED NOT NULL,
    option_text TEXT NOT NULL,
    is_correct  TINYINT(1) DEFAULT 0,
    sort_order  INT DEFAULT 0,

    FOREIGN KEY (question_id) REFERENCES quiz_questions(id) ON DELETE CASCADE
);

-- Quiz Attempts
CREATE TABLE quiz_attempts (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id         BIGINT UNSIGNED NOT NULL,
    quiz_id         BIGINT UNSIGNED NOT NULL,
    score           DECIMAL(5,2) NOT NULL,
    max_score       DECIMAL(5,2) NOT NULL,
    score_pct       DECIMAL(5,2) NOT NULL,
    passed          TINYINT(1) NOT NULL,
    time_spent      INT NULL,  -- seconds
    started_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    submitted_at    TIMESTAMP NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
    INDEX idx_user_quiz (user_id, quiz_id)
);

-- Quiz Attempt Answers
CREATE TABLE quiz_attempt_answers (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    attempt_id      BIGINT UNSIGNED NOT NULL,
    question_id     BIGINT UNSIGNED NOT NULL,
    selected_options JSON NULL,   -- array of option IDs
    text_answer     TEXT NULL,    -- untuk fill_blank / short_answer
    is_correct      TINYINT(1) NULL,
    points_earned   DECIMAL(5,2) DEFAULT 0,

    FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id) ON DELETE CASCADE
);
```

### 13.5 Assignments & Submissions

```sql
-- Assignments
CREATE TABLE assignments (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    lesson_id       BIGINT UNSIGNED NOT NULL,
    title           VARCHAR(200) NOT NULL,
    description     LONGTEXT NOT NULL,
    rubric          JSON NULL,      -- array of {criteria, max_points, description}
    max_score       INT DEFAULT 100,
    pass_score      INT DEFAULT 60,
    deadline        TIMESTAMP NULL,
    allow_late_submission TINYINT(1) DEFAULT 0,
    max_submissions INT DEFAULT 1,  -- berapa kali bisa submit ulang
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
);

-- Assignment Attachments (template yang bisa diunduh)
CREATE TABLE assignment_attachments (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    assignment_id   BIGINT UNSIGNED NOT NULL,
    filename        VARCHAR(255) NOT NULL,
    file_url        VARCHAR(500) NOT NULL,

    FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE
);

-- Submissions
CREATE TABLE submissions (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    assignment_id   BIGINT UNSIGNED NOT NULL,
    user_id         BIGINT UNSIGNED NOT NULL,
    note            TEXT NULL,       -- catatan dari siswa
    score           INT NULL,
    rubric_scores   JSON NULL,       -- breakdown score per kriteria
    feedback        TEXT NULL,
    graded_by       BIGINT UNSIGNED NULL,
    graded_at       TIMESTAMP NULL,
    is_late         TINYINT(1) DEFAULT 0,
    status          ENUM('submitted','graded','returned') DEFAULT 'submitted',
    submitted_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (assignment_id) REFERENCES assignments(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (graded_by) REFERENCES users(id)
);

-- Submission Files
CREATE TABLE submission_files (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    submission_id   BIGINT UNSIGNED NOT NULL,
    filename        VARCHAR(255) NOT NULL,
    file_url        VARCHAR(500) NOT NULL,
    file_size       INT NOT NULL,
    file_type       VARCHAR(50) NOT NULL,

    FOREIGN KEY (submission_id) REFERENCES submissions(id) ON DELETE CASCADE
);
```

### 13.6 Certificates

```sql
-- Certificate Templates
CREATE TABLE certificate_templates (
    id              INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name            VARCHAR(100) NOT NULL,
    html_template   LONGTEXT NOT NULL,
    is_active       TINYINT(1) DEFAULT 0,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certificates
CREATE TABLE certificates (
    id                  BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id             BIGINT UNSIGNED NOT NULL,
    course_id           BIGINT UNSIGNED NOT NULL,
    enrollment_id       BIGINT UNSIGNED NOT NULL,
    template_id         INT UNSIGNED NOT NULL,
    verification_code   VARCHAR(36) UNIQUE NOT NULL,  -- UUID
    certificate_url     VARCHAR(500) NOT NULL,         -- PDF path
    issued_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revoked_at          TIMESTAMP NULL,
    revoke_reason       TEXT NULL,

    UNIQUE KEY uq_user_course (user_id, course_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    INDEX idx_verification_code (verification_code)
);
```

### 13.7 Gamification

```sql
-- User Points
CREATE TABLE user_points (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    points      INT NOT NULL,
    reason      VARCHAR(200) NOT NULL,
    reference_type VARCHAR(50) NULL,  -- 'lesson', 'quiz', 'assignment'
    reference_id BIGINT UNSIGNED NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id)
);

-- Badges
CREATE TABLE badges (
    id          INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name        VARCHAR(100) NOT NULL,
    description VARCHAR(300) NOT NULL,
    icon        VARCHAR(200) NOT NULL,
    criteria    JSON NOT NULL  -- aturan otomatis badge
);

-- User Badges
CREATE TABLE user_badges (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    badge_id    INT UNSIGNED NOT NULL,
    earned_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE KEY uq_user_badge (user_id, badge_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Learning Streaks
CREATE TABLE learning_streaks (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id         BIGINT UNSIGNED UNIQUE NOT NULL,
    current_streak  INT DEFAULT 0,
    longest_streak  INT DEFAULT 0,
    last_activity   DATE NULL,
    freeze_used_at  DATE NULL,  -- tanggal freeze streak terakhir digunakan

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### 13.8 Community & Notifications

```sql
-- Forum Posts
CREATE TABLE forum_posts (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    lesson_id   BIGINT UNSIGNED NULL,
    course_id   BIGINT UNSIGNED NULL,
    parent_id   BIGINT UNSIGNED NULL,   -- untuk reply
    content     TEXT NOT NULL,
    is_pinned   TINYINT(1) DEFAULT 0,
    is_best_answer TINYINT(1) DEFAULT 0,
    likes_count INT DEFAULT 0,
    status      ENUM('active','hidden','deleted') DEFAULT 'active',
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (parent_id) REFERENCES forum_posts(id)
);

-- Notifications
CREATE TABLE notifications (
    id          BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED NOT NULL,
    type        VARCHAR(100) NOT NULL,
    title       VARCHAR(200) NOT NULL,
    body        TEXT NOT NULL,
    data        JSON NULL,        -- metadata (link, reference_id, dll.)
    read_at     TIMESTAMP NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_unread (user_id, read_at)
);

-- Activity Logs (Admin)
CREATE TABLE activity_logs (
    id              BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id         BIGINT UNSIGNED NULL,
    action          VARCHAR(100) NOT NULL,
    subject_type    VARCHAR(100) NULL,
    subject_id      BIGINT UNSIGNED NULL,
    old_values      JSON NULL,
    new_values      JSON NULL,
    ip_address      VARCHAR(45) NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_user_id (user_id),
    INDEX idx_created_at (created_at)
);
```

---

## 14. API Design & Endpoints

### 14.1 Konvensi API

```
Base URL     : https://api.wac.id/api/v1
Auth Header  : Authorization: Bearer {token}
Content-Type : application/json
Accept       : application/json

Response Format:
{
  "success": true,
  "message": "...",
  "data": { ... },
  "meta": {             // untuk paginasi
    "current_page": 1,
    "last_page": 5,
    "per_page": 15,
    "total": 72
  }
}

Error Format:
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "email": ["Email sudah terdaftar"]
  }
}

HTTP Status Codes:
  200 OK          — Berhasil
  201 Created     — Data baru berhasil dibuat
  204 No Content  — Berhasil, tidak ada data dikembalikan
  400 Bad Request — Request tidak valid
  401 Unauthorized — Token tidak valid / tidak ada
  403 Forbidden   — Tidak punya akses
  404 Not Found   — Data tidak ditemukan
  422 Unprocessable — Validasi gagal
  429 Too Many Requests — Rate limit
  500 Server Error — Error server
```

### 14.2 Auth Endpoints

```
POST   /auth/register          Daftar akun baru
POST   /auth/login             Login, return token
POST   /auth/logout            Logout, revoke token
POST   /auth/refresh           Refresh token
POST   /auth/forgot-password   Request reset password email
POST   /auth/reset-password    Reset password dengan token
POST   /auth/verify-email      Verifikasi email dengan OTP/link
POST   /auth/resend-verification Resend email verifikasi
GET    /auth/me                 Info user yang sedang login
```

### 14.3 Course Endpoints

```
GET    /courses                      Daftar kursus (filter, sort, paginate)
GET    /courses/featured             Kursus unggulan (untuk beranda)
GET    /courses/:slug                Detail kursus
GET    /courses/:slug/modules        Silabus kursus
GET    /courses/:slug/reviews        Ulasan kursus
POST   /courses/:id/enroll           Enroll ke kursus
POST   /courses/:id/reviews          Tambah ulasan
PUT    /courses/:id/reviews/:rid     Edit ulasan
DELETE /courses/:id/reviews/:rid     Hapus ulasan
GET    /courses/:id/related          Kursus terkait
GET    /search                       Pencarian global
```

### 14.4 Learning Endpoints

```
GET    /learn/:courseSlug                Info enrollment + progress
GET    /lessons/:id                      Detail lesson (konten, attachment)
POST   /lessons/:id/progress             Update progress (posisi video, dll.)
POST   /lessons/:id/complete             Tandai lesson selesai
GET    /lessons/:id/notes                Catatan user di lesson ini
POST   /lessons/:id/notes               Tambah catatan
PUT    /notes/:id                        Edit catatan
DELETE /notes/:id                        Hapus catatan
GET    /notes                            Semua catatan user (lintas kursus)
POST   /lessons/:id/bookmarks            Tambah bookmark
DELETE /bookmarks/:id                    Hapus bookmark
GET    /bookmarks                        Semua bookmark user
```

### 14.5 Quiz Endpoints

```
GET    /quizzes/:id                 Info kuis (soal dikirim setelah start)
POST   /quizzes/:id/start           Mulai kuis, return soal + attempt_id
POST   /quizzes/:id/submit          Submit semua jawaban
GET    /quiz-attempts/:id           Detail hasil kuis
GET    /quiz-attempts               Riwayat semua kuis user
```

### 14.6 Assignment Endpoints

```
GET    /assignments/:id             Detail tugas + rubrik
POST   /assignments/:id/submit      Upload submission (multipart/form-data)
GET    /submissions/:id             Detail submission + nilai
GET    /submissions                 Semua submission user
POST   /submissions/:id/dispute     Ajukan banding nilai
```

### 14.7 Progress & Dashboard Endpoints

```
GET    /dashboard                   Data dashboard siswa
GET    /enrollments                 Kursus yang diikuti
GET    /progress/overview           Statistik belajar (heatmap, chart)
GET    /progress/courses            Progress per kursus
GET    /streak                      Info streak belajar
GET    /points                      Total poin + riwayat
GET    /badges                      Badge yang dimiliki
GET    /leaderboard                 Leaderboard (weekly/monthly/all-time)
```

### 14.8 Certificate Endpoints

```
GET    /certificates                     Semua sertifikat milik user
GET    /certificates/:id                 Detail sertifikat
GET    /certificates/:id/download        Download PDF (stream)
GET    /certificates/:id/share-card      Generate share image (OG image)
GET    /verify/:code                     Verifikasi sertifikat (publik)
```

### 14.9 Community Endpoints

```
GET    /lessons/:id/discussion      Diskusi per lesson
POST   /lessons/:id/discussion      Posting di diskusi lesson
GET    /forum/courses/:id           Forum per kursus
POST   /forum/courses/:id           Posting di forum kursus
PUT    /forum/posts/:id             Edit postingan
DELETE /forum/posts/:id             Hapus postingan
POST   /forum/posts/:id/like        Like postingan
POST   /forum/posts/:id/best-answer Tandai best answer
POST   /forum/posts/:id/report      Lapor postingan
GET    /live-sessions               Jadwal live session
POST   /live-sessions/:id/register  Daftar ke live session
```

### 14.10 Instructor Endpoints

```
GET    /instructor/dashboard         Dashboard instruktur
GET    /instructor/courses           Kursus milik instruktur
POST   /instructor/courses           Buat kursus baru
GET    /instructor/courses/:id       Detail kursus
PUT    /instructor/courses/:id       Update kursus
DELETE /instructor/courses/:id       Hapus kursus (hanya draft)
POST   /instructor/courses/:id/submit Submit untuk review

POST   /instructor/modules           Buat modul
PUT    /instructor/modules/:id       Edit modul
DELETE /instructor/modules/:id       Hapus modul
POST   /instructor/modules/:id/reorder Reorder lesson dalam modul

POST   /instructor/lessons           Buat lesson
PUT    /instructor/lessons/:id       Edit lesson
DELETE /instructor/lessons/:id       Hapus lesson
POST   /instructor/lessons/upload-video Upload file video

GET    /instructor/question-bank     Daftar soal
POST   /instructor/question-bank     Tambah soal
PUT    /instructor/question-bank/:id Edit soal

GET    /instructor/submissions       Submission yang menunggu nilai
PUT    /instructor/submissions/:id/grade Beri nilai

GET    /instructor/students          Daftar siswa
GET    /instructor/analytics/:courseId Analitik kursus
```

### 14.11 Admin Endpoints

```
-- Users
GET    /admin/users                  Daftar semua user
POST   /admin/users                  Buat user manual
GET    /admin/users/:id              Detail user
PUT    /admin/users/:id              Update user
DELETE /admin/users/:id              Hapus user
POST   /admin/users/:id/ban          Ban user
POST   /admin/users/:id/activate     Aktifkan user
POST   /admin/users/bulk-action      Aksi massal

-- Courses
GET    /admin/courses                Semua kursus
PUT    /admin/courses/:id            Override edit kursus
POST   /admin/courses/:id/approve    Approve kursus
POST   /admin/courses/:id/reject     Reject kursus
DELETE /admin/courses/:id            Hapus kursus

-- Enrollments
GET    /admin/enrollments            Semua enrollment
POST   /admin/enrollments            Grant enrollment manual
DELETE /admin/enrollments/:id        Revoke enrollment
POST   /admin/enrollments/bulk-import Bulk import CSV

-- Certificates
GET    /admin/certificates           Semua sertifikat
POST   /admin/certificates/:id/revoke Revoke sertifikat

-- Reports
GET    /admin/reports/overview       KPI overview
GET    /admin/reports/users          Laporan user
GET    /admin/reports/courses        Laporan kursus
GET    /admin/reports/engagement     Laporan engagement
GET    /admin/reports/export         Export data ke Excel/CSV

-- Settings
GET    /admin/settings               Semua pengaturan
PUT    /admin/settings               Update pengaturan
POST   /admin/settings/test-email    Test kirim email
GET    /admin/activity-logs          Log aktivitas admin
```

---

## 15. Desain & UI/UX Specification

### 15.1 Komponen UI — Design System

#### Buttons

```
Variant       Size     Use Case
─────────────────────────────────────────
Primary       lg/md/sm Aksi utama (CTA, Submit, Enroll)
Secondary     lg/md/sm Aksi sekunder (Batal, Lihat Detail)
Outline       lg/md/sm Aksi tersier (Filter, Sort)
Ghost         md/sm    Navigasi, action minimal
Danger        md/sm    Aksi destruktif (Hapus, Revoke)
Icon          md/sm    Action dengan ikon saja
Link          —        Navigasi dalam teks
Loading state —        Semua tombol punya loading state

States: default | hover | focus | active | disabled | loading
```

#### Form Inputs

```
- Text input dengan label, placeholder, helper text, error state
- Textarea (auto-resize)
- Select dropdown (searchable untuk daftar panjang)
- Multi-select dengan tags
- Date & time picker
- File upload (drag & drop zone)
- Rich text editor (untuk deskripsi dan konten artikel)
- Toggle / Switch
- Checkbox & Radio
- Range slider (untuk filter durasi)
- Search input (dengan debounce dan clear button)
```

#### Data Display

```
- Table (sortable, selectable, pagination, responsive)
- Card (course card, stat card, achievement card)
- Badge/Tag (status, kategori, level)
- Progress bar (linear dan circular)
- Avatar (foto atau inisial)
- Rating stars (readonly dan interactive)
- Tooltip
- Accordion / Collapsible
- Tabs
- Timeline
```

#### Feedback & Overlay

```
- Toast notification (sukses, error, warning, info)
- Alert / Banner (dismissible)
- Modal / Dialog
- Drawer / Sidebar panel
- Skeleton loading
- Empty state (dengan ilustrasi dan CTA)
- Error state (500, 404, dll.)
- Confirmation dialog (untuk aksi destruktif)
```

### 15.2 Halaman Kritis — Layout Spec

#### Halaman Belajar (Learning Player)

```
Desktop (≥ 1024px):
┌─────────────────────────────────────────────────┐
│ Header WAC (sticky) — Logo | Nav | User          │
├───────────────────────────┬─────────────────────┤
│                           │ Sidebar (300px)      │
│  Video Player (16:9)      │ ─────────────────    │
│  atau Konten Artikel      │ 🎯 Progress (72%)   │
│                           │ ─────────────────    │
│  ─────────────────────    │ Modul 1             │
│  Tab: Diskusi | Catatan   │  ✅ Lesson 1        │
│  | Transcript | Lampiran  │  🔵 Lesson 2 ◀      │
│                           │  ⬜ Lesson 3        │
│                           │ Modul 2             │
│  [⬅ Sebelumnya]   [Berikutnya ➡]               │
└───────────────────────────┴─────────────────────┘

Mobile (< 768px):
┌──────────────────┐
│ ← Kursus         │
│ ────────────────  │
│ Video Player     │
│ (full width)     │
│ ────────────────  │
│ Judul Lesson     │
│ ────────────────  │
│ Tabs: Diskusi    │
│ Catatan Transcript│
│ ────────────────  │
│ [⬅ Prev] [Next ➡]│
│ ────────────────  │
│ [≡ Lihat Silabus] │
│ (bottom sheet)   │
└──────────────────┘
```

#### Admin Dashboard

```
Desktop:
┌───────────────────────────────────────────────────┐
│ WAC Admin  [🔍 Global Search]   [🔔] [👤 Admin ▼] │
├────────────┬──────────────────────────────────────┤
│ 🏠 Dashboard│  Dashboard                           │
│ 👥 Users   │                                      │
│ 📚 Courses │  [Total Users] [Kursus] [Enrollment] [Completion]  │
│ 📁 Content │                                      │
│ 📊 Reports │  Grafik Enrollment 30 Hari           │
│ ⚙️ Settings │  ─────────────────────────────────  │
│ 📋 Logs    │  [Pending Tugas 12]  [User Baru]     │
│            │                                      │
│ ─────────  │                                      │
│ 🌙 Dark    │                                      │
│ ❓ Help    │                                      │
└────────────┴──────────────────────────────────────┘
```

### 15.3 Animasi & Micro-interactions

```
Filosofi: "Purposeful, not decorative"

Transisi Halaman:
- Fade in/out (150ms ease-out)
- Slide dari kanan untuk drill-down
- Slide dari bawah untuk modal mobile

Loading States:
- Skeleton loader (bukan spinner) untuk konten utama
- Button loading state dengan spinner inline
- Progress bar untuk upload file

Feedback Positif:
- Konfeti animasi saat sertifikat diterbitkan
- Bounce animasi saat badge baru diperoleh
- Checkmark animasi saat lesson selesai
- Number counter animasi untuk statistik

Hover & Focus:
- Scale 1.02 untuk course card saat hover
- Underline animasi untuk link
- Border highlight untuk input focus
- Background subtle untuk tabel row hover

Semua animasi mengikuti:
- duration: 150ms – 300ms
- easing: ease-out untuk muncul, ease-in untuk menghilang
- Respek terhadap prefers-reduced-motion
```

### 15.4 Dark Mode

- Toggle dark/light mode tersedia di header (semua halaman)
- Tersimpan di localStorage dan user preference (jika login)
- Mengikuti system preference saat pertama kali
- Semua komponen mendukung dark mode dengan CSS custom properties

---

## 16. Keamanan & Compliance

### 16.1 Autentikasi & Otorisasi

```
Autentikasi:
- Laravel Sanctum untuk SPA authentication
- Token berbasis Bearer (bukan cookie) untuk API
- CSRF protection untuk form web
- Bcrypt untuk hash password (cost factor 12)

Otorisasi:
- Role-based: student | instructor | admin | super_admin
- Laravel Policies untuk otorisasi resource-level
- Gate untuk aksi-aksi khusus
- Middleware pemeriksaan role di setiap endpoint sensitif

Contoh policy:
- Hanya instruktur pemilik kursus yang bisa edit
- Hanya siswa yang sudah enroll yang bisa akses lesson
- Admin bisa edit semua, namun semua perubahan ter-log
```

### 16.2 Proteksi Input & Output

```
- Semua input divalidasi di backend (tidak hanya frontend)
- Eloquent ORM: auto protection dari SQL injection
- XSS prevention: semua output di-escape oleh Blade/React
- Konten HTML dari rich text editor difilter dengan HTMLPurifier
- File upload: validasi tipe file (whitelist), scan dengan ClamAV (opsional)
- Nama file di-sanitize sebelum disimpan
```

### 16.3 Rate Limiting & Throttling

```
Endpoint                    Limit
────────────────────────────────────────────────
POST /auth/login            5 per menit per IP
POST /auth/register         3 per jam per IP
POST /auth/forgot-password  3 per jam per IP
GET  /api/* (umum)          60 per menit per user
POST /api/* (write)         20 per menit per user
POST /lessons/*/progress    120 per menit per user
Upload file                 10 per jam per user
```

### 16.4 HTTPS & Transport Security

```
- SSL/TLS wajib (enforce HTTPS redirect)
- HSTS header: max-age 1 tahun
- Secure & HttpOnly cookie flags
- CORS: whitelist origin yang diizinkan (hanya domain WAC)
- Content Security Policy (CSP) header
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
```

### 16.5 Privasi Data (Perlindungan Data Pribadi)

```
- Data pengguna disimpan di server Indonesia (jika regulasi menuntut)
- Fitur "Download semua dataku" (export JSON)
- Fitur "Hapus akun" dengan soft delete 14 hari
- Tidak ada data dijual ke pihak ketiga
- Privacy policy dan terms of service yang jelas
- Log aktivitas dihapus otomatis setelah 6 bulan
```

---

## 17. Performa & Skalabilitas

### 17.1 Target Performa

| Metrik | Target |
|---|---|
| First Contentful Paint (FCP) | < 1.5 detik |
| Largest Contentful Paint (LCP) | < 2.5 detik |
| Time to Interactive (TTI) | < 3.5 detik |
| Cumulative Layout Shift (CLS) | < 0.1 |
| API Response Time (p50) | < 200ms |
| API Response Time (p95) | < 500ms |
| Core Web Vitals | All Green |

### 17.2 Strategi Optimasi Frontend

```
- Code splitting per route (React.lazy)
- Image optimization: WebP format, lazy loading, srcset
- Bundle size: tree shaking, hanya import yang dipakai
- Font: subset, preload font yang kritis
- CDN Vercel untuk semua static asset
- Service Worker untuk cache asset statis (PWA)
- Preload/prefetch untuk halaman yang kemungkinan dikunjungi selanjutnya
```

### 17.3 Strategi Optimasi Backend

```
- Database indexing: semua foreign key dan kolom yang sering di-query
- Eager loading (with()) untuk menghindari N+1 query
- Redis caching: catalog kursus (5 menit), leaderboard (15 menit), user dashboard (1 menit)
- Queue: email, generate PDF sertifikat, update statistik (tidak blocking request)
- Pagination: semua list endpoint di-paginate (default 15)
- Select spesifik: tidak pernah SELECT *, selalu pilih kolom yang dibutuhkan
- Database connection pooling
```

### 17.4 Skalabilitas

```
Fase 1 (0–1.000 user):
- Single VPS (2 CPU, 4 GB RAM)
- MySQL single instance
- Storage: local disk

Fase 2 (1.000–10.000 user):
- Redis untuk caching dan queue
- S3-compatible storage untuk media
- MySQL + read replica

Fase 3 (10.000+ user):
- Horizontal scaling backend
- Load balancer
- CDN untuk video streaming
- Database sharding atau managed DB (PlanetScale/RDS)
```

---

## 18. Testing & Quality Assurance

### 18.1 Testing Strategy

```
Testing Pyramid:

        /\
       /  \
      / E2E\      Cypress (UI flow kritikal)
     /──────\
    /  Int.  \     PHPUnit Integration Tests
   /──────────\
  / Unit Tests \   PHPUnit (Services, Jobs)
 ──────────────── Jest + React Testing Library (Components)
```

### 18.2 Unit Tests (Backend — PHPUnit)

**Wajib dicover:**
- Semua Service class (CertificateService, ProgressService, GamificationService)
- Semua Job class
- Helper/utility functions
- Model method yang custom

**Target coverage:** ≥ 80%

### 18.3 Integration Tests (Backend)

**Wajib dicover (endpoint tests):**
- Semua auth endpoints (register, login, logout, reset password)
- Enroll dan akses lesson (dengan token valid dan tidak valid)
- Submit kuis dan pengecekan nilai
- Upload submission tugas
- Generate sertifikat
- Admin CRUD operations

### 18.4 Component Tests (Frontend — React Testing Library)

**Wajib dicover:**
- Form registrasi dan login (validasi, submit, error state)
- Course card dan catalog (filter, sort)
- Video player controls
- Quiz player (pilih jawaban, submit, tampilan hasil)
- Progress bar dan dashboard cards

### 18.5 End-to-End Tests (Cypress)

**Happy path yang harus di-test:**
1. Register → Verifikasi email → Login → Onboarding
2. Browse catalog → Buka detail kursus → Enroll → Tonton video → Selesai
3. Kerjakan kuis → Lihat hasil → Lanjut ke lesson berikutnya
4. Kumpulkan tugas → Lihat nilai → Lihat feedback
5. Selesaikan kursus → Terima sertifikat → Download PDF
6. Admin: Login → Buat kursus → Tambah modul → Publish

### 18.6 Performance Testing

- Load testing dengan k6 atau Artillery: simulasi 100 concurrent users
- Stress testing: temukan breaking point sebelum launch
- Lighthouse audit: semua halaman publik harus score ≥ 85

### 18.7 User Acceptance Testing (UAT)

- Minimal 5 pengguna nyata dari target persona yang berbeda
- Skenario test disiapkan (task-based usability testing)
- Feedback dikumpulkan dan diprioritaskan
- UAT dilakukan 2 minggu sebelum launch

---

## 19. Deployment & DevOps

### 19.1 Environment

| Environment | Tujuan | Branch | URL |
|---|---|---|---|
| **Local** | Development | feature/* | localhost |
| **Staging** | Testing & QA | develop | staging.wac.id |
| **Production** | Live | main | wac.id |

### 19.2 Frontend Deployment (Vercel)

```
Konfigurasi Vercel:
- Framework: Vite (React)
- Build command: npm run build
- Output directory: dist
- Environment variables: per environment
- Auto-deploy dari GitHub (main → production, develop → staging)
- Preview deployment untuk setiap Pull Request
- Custom domain: wac.id
- Edge network Vercel untuk CDN global
```

### 19.3 Backend Deployment (Laravel)

```
Opsi deployment (pilih salah satu):
A. VPS (DigitalOcean / Linode / Hetzner)
   - Ubuntu 22.04 LTS
   - Nginx + PHP-FPM
   - Let's Encrypt SSL (auto-renew)
   - Supervisor untuk queue worker
   - Cron untuk scheduled tasks

B. Railway / Render (Platform as a Service)
   - Lebih simpel, tidak perlu manage server
   - Auto-scaling dasar tersedia
   - Database MySQL disediakan

CI/CD Pipeline (GitHub Actions):
1. Push ke branch → Trigger CI
2. Run PHPUnit tests
3. Run PHP CS Fixer (code style)
4. Build Docker image (opsional)
5. Deploy ke staging (jika push ke develop)
6. Deploy ke production (jika push ke main, setelah approval)
```

### 19.4 Database Management

```
- Migration: semua perubahan schema via Laravel Migration
- Seeder: data default (kategori, admin awal, badge, template sertifikat)
- Backup harian otomatis jam 02.00 WIB ke S3 (atau Backblaze B2)
- Retensi backup: 30 hari
- Proses restore harus bisa dilakukan < 30 menit
- Monitoring database: slow query log aktif (> 1 detik)
```

### 19.5 Monitoring & Observability

```
Error Tracking:
- Sentry (Laravel + React) untuk real-time error tracking
- Alert ke email admin jika error spike > 10 error/menit

Uptime Monitoring:
- UptimeRobot atau BetterUptime
- Check setiap 5 menit
- Alert ke WhatsApp dan email jika down > 2 menit

Performance Monitoring:
- Vercel Analytics untuk frontend
- Laravel Telescope (staging) untuk debug API
- Application Performance Monitoring (APM) — opsional

Log Management:
- Laravel Log ke file (daily rotation)
- Error log terpusat (Papertrail atau Logtail)
```

---

## 20. Roadmap & Sprint Planning

### 20.1 Fase Pengembangan Overview

```
Timeline: 20 Minggu hingga Public Launch

FASE 1: FONDASI (Minggu 1–4)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 1: Setup project, CI/CD, database schema, auth API
Week 2: Frontend setup, auth UI (login, register, forgot password)
Week 3: Profil user, onboarding flow, email verification
Week 4: Testing fase 1, bug fix, code review

FASE 2: KATALOG & BELAJAR (Minggu 5–9)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 5: API katalog kursus (CRUD, filter, paginate)
Week 6: Frontend katalog — halaman daftar & detail kursus
Week 7: Enrollment, learning player (video + artikel), progress tracking
Week 8: Notes, bookmark, attachment, navigasi silabus
Week 9: Testing fase 2, QA

FASE 3: PENILAIAN (Minggu 10–13)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 10: Quiz engine backend (semua tipe soal)
Week 11: Quiz player frontend, hasil kuis
Week 12: Assignment system, submission upload, grading instruktur
Week 13: Testing fase 3

FASE 4: SERTIFIKAT & GAMIFIKASI (Minggu 14–16)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 14: Generator sertifikat PDF, halaman sertifikat, verifikasi online
Week 15: Sistem poin, badge, streak, leaderboard
Week 16: Notifikasi (in-app + email)

FASE 5: ADMIN PANEL & KOMUNITAS (Minggu 17–19)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 17: Admin dashboard, manajemen user, kursus, enrollment
Week 18: Admin laporan & analitik, pengaturan platform
Week 19: Forum diskusi, live session scheduling, moderasi

FASE 6: QA & LAUNCH (Minggu 20)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 20: UAT dengan pengguna nyata, performance testing, bug fix, soft launch
```

### 20.2 Out of Scope v1.0

Fitur ini **sengaja tidak dikerjakan** di v1.0 untuk menjaga fokus:

| Fitur | Alasan Ditunda | Target |
|---|---|---|
| Aplikasi mobile native | Prioritas web dulu | v2.0 |
| Pembayaran / kursus berbayar | Perlu gateway payment | v1.5 |
| AI tutor / chatbot | Complexity tinggi | v2.0 |
| Integrasi SSO (Google, Microsoft) | Tidak urgent | v1.5 |
| Sistem afiliasi & referral | Butuh payment system dulu | v2.0 |
| Multi-tenant (banyak lembaga) | Scope terlalu besar | v3.0 |
| Fitur konferensi video built-in | Gunakan Zoom/Meet dulu | v2.0 |

---

## 21. Risiko, Asumsi & Dependensi

### 21.1 Risiko & Mitigasi

| # | Risiko | Probability | Impact | Mitigasi |
|---|---|---|---|---|
| R1 | Scope creep menyebabkan delay launch | Tinggi | Tinggi | Weekly scope review, semua request fitur masuk backlog |
| R2 | Performa video buruk pada hosting murah | Tinggi | Tinggi | Embed YouTube/Vimeo untuk v1.0, self-hosted di v2.0 |
| R3 | Completion rate rendah, pengguna drop | Sedang | Tinggi | Gamifikasi agresif, analitik drop-off, iterasi cepat |
| R4 | Bug pada PDF generator sertifikat | Sedang | Sedang | E2E test + staging testing sebelum deploy |
| R5 | CORS issue antara Vercel dan backend | Sedang | Sedang | Test CORS dari awal sprint 1 |
| R6 | Instruktur kesulitan menggunakan CMS | Rendah | Sedang | UX testing dengan instruktur WAC sebelum launch |
| R7 | Data breach / keamanan | Rendah | Sangat Tinggi | Security audit, penetration testing, backup rutin |
| R8 | Key developer sakit atau keluar | Rendah | Tinggi | Dokumentasi teknis lengkap, bus factor ≥ 2 per fitur |

### 21.2 Asumsi

- Konten kursus (video, materi) sudah disiapkan oleh instruktur WAC sebelum launch
- Domain wac.id dan server sudah tersedia
- Anggaran untuk Vercel Pro, server VPS, dan layanan email (Mailgun) sudah dialokasikan
- Tim terdiri dari minimal: 1 backend developer, 1 frontend developer, 1 UI/UX designer, 1 QA

### 21.3 Dependensi Eksternal

| Layanan | Kegunaan | Fallback |
|---|---|---|
| Vercel | Hosting frontend | Netlify |
| Mailgun / Brevo | Pengiriman email | Gmail SMTP (dev) |
| YouTube / Vimeo | Hosting video | Self-hosted (S3) |
| AWS S3 / Cloudflare R2 | Storage file | Local disk (dev) |
| GitHub | Version control & CI/CD | GitLab |
| Sentry | Error tracking | Laravel log saja |

---

## 22. Acceptance Criteria & Definition of Done

### 22.1 Definition of Done — Per Fitur

Sebuah fitur dinyatakan **DONE** hanya jika memenuhi SEMUA kriteria ini:

- [ ] Kode sudah melalui code review oleh minimal 1 developer lain
- [ ] Unit test & integration test tersedia dan semua passing
- [ ] Code coverage tidak turun dari baseline
- [ ] Tidak ada bug P1 (critical) yang open
- [ ] Tampilan responsif terverifikasi di 3 ukuran layar (mobile/tablet/desktop)
- [ ] Tampilan terverifikasi di 2 browser utama (Chrome + Firefox)
- [ ] API endpoint terdokumentasi di Postman Collection (diperbarui)
- [ ] Empty state dan error state dihandle dengan baik
- [ ] Loading state diimplementasikan
- [ ] Tidak ada console.error di frontend saat flow normal
- [ ] PR sudah di-merge ke branch develop
- [ ] Sudah didemo ke product owner dan disetujui

### 22.2 Definition of Done — Untuk Launch

Platform siap diluncurkan ke publik jika:

- [ ] Semua fitur MUST HAVE di Fase 1–5 sudah DONE
- [ ] Load testing: sistem stabil dengan 100 concurrent users (tidak ada error > 1%)
- [ ] Lighthouse score semua halaman utama ≥ 85
- [ ] SSL certificate aktif di semua domain
- [ ] Backup database otomatis sudah berjalan dan diverifikasi
- [ ] Monitoring (Sentry, uptime) sudah aktif dan alerting sudah dikonfigurasi
- [ ] Privacy policy dan terms of service sudah tersedia
- [ ] UAT dengan pengguna nyata selesai, tidak ada blocker
- [ ] Konten kursus minimal (≥ 3 kursus lengkap) sudah tersedia
- [ ] Akun admin dan instruktur sudah dikonfigurasi
- [ ] Rollback plan sudah disiapkan

### 22.3 Bug Priority Matrix

| Priority | Deskripsi | SLA Fix |
|---|---|---|
| P1 — Critical | Aplikasi tidak bisa digunakan, data loss, security breach | Hotfix dalam 4 jam |
| P2 — High | Fitur utama tidak bekerja, tidak ada workaround | Fix dalam 24 jam |
| P3 — Medium | Fitur tidak bekerja sempurna, ada workaround | Fix dalam sprint berikutnya |
| P4 — Low | Kosmetik, typo, minor UX issue | Backlog |

---

## 23. Lampiran

### 23.1 Glosarium Teknis

| Istilah | Definisi |
|---|---|
| **LMS** | Learning Management System |
| **CMS** | Content Management System (untuk instruktur) |
| **SPA** | Single Page Application — React app yang tidak reload halaman |
| **API** | Application Programming Interface — penghubung FE dan BE |
| **JWT** | JSON Web Token — format token autentikasi |
| **Sanctum** | Library autentikasi Laravel untuk SPA |
| **Queue** | Antrian pekerjaan background (email, generate PDF) |
| **Redis** | In-memory database untuk caching dan queue |
| **CDN** | Content Delivery Network — mempercepat distribusi asset |
| **PWA** | Progressive Web App — web yang bisa diinstal di HP |
| **CORS** | Cross-Origin Resource Sharing — kebijakan akses lintas domain |
| **N+1** | Anti-pattern query database yang menyebabkan query berulang |
| **Eager Loading** | Teknik memuat relasi sekaligus untuk menghindari N+1 |
| **Soft Delete** | Hapus data tapi masih tersimpan di DB (bisa di-restore) |
| **Slugify** | Ubah teks menjadi URL-friendly (misal: "Excel Dasar" → "excel-dasar") |

### 23.2 Tools & Services yang Direkomendasikan

| Kategori | Rekomendasi | Alternatif |
|---|---|---|
| UI Design | Figma | Adobe XD |
| Project Management | Jira / Linear | Trello / Notion |
| Version Control | GitHub | GitLab |
| API Testing | Postman | Insomnia |
| Error Tracking | Sentry | Bugsnag |
| Email Service | Mailgun | Brevo (Sendinblue) |
| Storage | Cloudflare R2 | AWS S3 |
| Video Hosting | Vimeo Pro | YouTube Unlisted |
| CI/CD | GitHub Actions | Bitbucket Pipelines |
| Uptime Monitor | UptimeRobot | BetterUptime |
| Analytics | Mixpanel | PostHog (open source) |
| Load Testing | k6 | Artillery |
| Password Manager | 1Password | Bitwarden |

### 23.3 Referensi Desain & Inspirasi

- Platform e-learning: Udemy, Coursera, Ruangguru
- Design system: Shadcn/ui, Radix UI, Headless UI
- Admin template inspirasi: Vercel Dashboard, Linear, Notion
- Typography & spacing: Tailwind CSS default scale

---

> **📋 Catatan Dokumen**
>
> Dokumen PRD ini adalah dokumen hidup. Setiap perubahan signifikan pada scope, arsitektur, atau requirement harus:
> 1. Didiskusikan dengan seluruh stakeholder
> 2. Disetujui oleh product owner
> 3. Direkam sebagai versi baru dokumen dengan changelog
>
> Untuk pertanyaan teknis, hubungi Tim Engineering WAC.
> Untuk pertanyaan produk, hubungi Product Manager WAC.

---

*World Access Computer (WAC) Learning Management System*
*PRD v2.0 — Comprehensive Edition — CONFIDENTIAL*
*© 2025 World Access Computer. All rights reserved.*

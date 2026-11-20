# 🗺️ Content Architecture & Revision Guide - Bindala Tech Landing Page

Panduan ini dibuat agar Anda dapat merevisi teks/materi landing page dengan cepat, terstruktur, dan tanpa khawatir merusak kode layout.

---

## 📑 Peta Bagian (Section Map)

| No | Nama Bagian | Lokasi di `index.html` | Yang Bisa Direvisi |
|---|---|---|---|
| **1** | **Navbar & Header** | `<nav>` (Baris ~100) | Logo, link menu, tombol CTA "Contact Us" |
| **2** | **Hero Section** | `<section id="home">` (Baris ~210) | Tagline, Headline H1, Paragraf value proposition, tombol CTA |
| **3** | **Layanan (Services)** | `<section id="services">` (Baris ~280) | Judul & deskripsi 3 layanan: Company Profile, E-Commerce, Custom Web Apps |
| **4** | **Paket Harga (Pricing)** | `<section id="pricing">` (Baris ~390) | Nama paket (Starter, Standard, Pro), harga, rincian fitur centang, biaya renewal |
| **5** | **Cara Pesan (How to Order)** | `<section id="how-to-order">` (Baris ~520) | 4 langkah kerja: Konsultasi, Desain, Development, Peluncuran |
| **6** | **Portofolio Karya** | `<section id="portfolio">` (Baris ~630) | Judul proyek, kategori tag, deskripsi singkat, link preview |
| **7** | **Testimoni Klien** | `<section id="testimoni">` (Baris ~840) | Testimoni klien, bintang rating, nama, perusahaan, foto |
| **8** | **Kontak & Form** | `<section id="contact">` (Baris ~1010) | Alamat kantor, email resmi, tautan WhatsApp (wa.me), teks pengantar form |
| **9** | **Footer** | `<footer>` (Baris ~1190) | Deskripsi footer, daftar link cepat, sosial media, hak cipta |

---

## 🎯 Panduan Cepat Revisi Materi (Ctrl + F Search Keywords)

Saat membuka `index.html` di VS Code, cukup tekan **Ctrl + F** lalu ketik kata kunci berikut untuk langsung menuju ke teks yang ingin Anda ubah:

### 1. Mengubah Nomor WhatsApp & Link Chat
* **Cari kata kunci:** `https://wa.me/`
* **Lokasi:** Tombol konsultasi di hero, tombol CTA tengah, dan tombol WhatsApp di bagian kontak.
* **Format:** Ganti nomor dengan format internasional tanpa tanda `+` (contoh: `https://wa.me/6283116031192?text=Halo%20Bindala%20Tech`).

### 2. Mengubah Paket Harga & Rincian Fitur
* **Cari kata kunci:** `Pilih Starter` atau `Paling Populer`
* **Yang diubah:**
  - Angka harga: `Rp 850.000`, `Rp 1.750.000`, `Rp 3.500.000`
  - Daftar fitur: teks di dalam tag `<li>✓ ...</li>`

### 3. Mengubah Testimoni Klien
* **Cari kata kunci:** `Apa Kata`
* **Yang diubah:** Teks kutipan di dalam tag `<p class="... italic ...">"..."</p>`, serta nama klien pada tag `<h4>`.

### 4. Mengubah Portofolio
* **Cari kata kunci:** `Karya Unggulan`
* **Yang diubah:** Tag `<h3>` nama proyek, kategori di dalam tag `<span>`, serta `src="..."` gambar mockup.

---

## 🚀 File Arsitektur Proyek
```text
landing-page/
├── dist/                   # File aset gambar & logo teroptimasi
│   ├── favicon-bindala.png
│   ├── logo-bindala-nav.png
│   └── logo-bindala-horizontal.png
├── src/
│   ├── js/
│   │   └── main.js         # Script interaktif (Clean Architecture)
│   ├── data/
│   │   └── CONTENT_MAP.md  # Panduan revisi materi (file ini)
│   ├── input.css           # Konfigurasi Tailwind & variabel warna tema
│   └── output.css          # File CSS hasil build
├── index.html              # Struktur utama landing page (SEO-optimized)
├── robots.txt              # Panduan search engine crawler
├── sitemap.xml             # Peta halaman untuk Google index
└── package.json            # Script build Tailwind
```

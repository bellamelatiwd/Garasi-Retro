# Garasi Retro

Landing page untuk bisnis restorasi & sparepart mobil klasik JDM dan pasar Indonesia. Dibangun sebagai project portfolio untuk menunjukkan kemampuan Front-End development dengan Next.js dan React.

> Project ini merupakan konsep desain — nama bisnis, unit mobil, dan kontak yang ditampilkan adalah contoh/fiktif.

## Preview

<!-- Tambahkan screenshot di sini setelah deploy, contoh: -->
<!-- ![Preview Garasi Retro](./preview.png) -->

## Fitur

- **Hero section** dengan headline, deskripsi singkat, dan dua CTA (konsultasi & lihat galeri)
- **Section Layanan** — tiga kartu servis (restorasi bodi & cat, sparepart langka, detailing)
- **Galeri interaktif** — filter daftar mobil berdasarkan merek (Semua/Toyota/Datsun/Honda) menggunakan React state, tanpa reload halaman
- **Section Proses Kerja** — timeline 4 tahap kerja, dari inspeksi sampai serah terima
- **Footer kontak** dengan informasi lokasi dan cara menghubungi
- **Responsive** — layout menyesuaikan dari mobile sampai desktop
- **Desain custom** — palet warna dan tipografi yang dirancang khusus (bukan template default), terinspirasi dari estetika plat nomor & bengkel mobil klasik

## Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 14 (App Router) |
| Library UI | React 18 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS (config custom untuk warna & font) |
| State management | React `useState` (client component) |
| Font | Oswald (headline), Inter (body) — via `next/font/google` |

Belum ada backend/database — seluruh data (daftar mobil, dll) masih di-hardcode di komponen sebagai contoh.

## Struktur Project

```
garasi-retro/
├── app/
│   ├── layout.tsx      # Root layout + font loading
│   ├── page.tsx         # Merangkai semua section
│   └── globals.css      # Tailwind directives
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx      # Client component — filter mobil pakai useState
│   ├── Process.tsx
│   └── Footer.tsx
├── tailwind.config.ts   # Palet warna & font custom
└── package.json
```

## Menjalankan Secara Lokal

Pastikan Node.js 18+ sudah terpasang.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Build untuk Production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Push project ini ke repo GitHub baru.
2. Buka [vercel.com](https://vercel.com) → New Project → import repo tersebut.
3. Vercel otomatis mendeteksi framework Next.js — klik **Deploy**.
4. Setelah selesai, Vercel memberikan URL live (`https://nama-project.vercel.app`).

## Yang Bisa Dikembangkan Selanjutnya

- Ganti data mobil hardcoded dengan fetch dari API/CMS
- Tambah halaman detail per unit mobil (dynamic route)
- Tambah form kontak yang beneran mengirim data (mis. lewat API route atau layanan seperti Formspree)
- Tambah animasi transisi saat filter galeri berubah

# Garasi Retro

🔗 **Live:** [garasi-retro-landing.vercel.app](https://garasi-retro-landing.vercel.app)

Landing page untuk bisnis restorasi & sparepart mobil klasik JDM dan pasar Indonesia.

## Lisensi

Project ini dibuat untuk keperluan portfolio pribadi.

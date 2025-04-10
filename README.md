# Dokumentasi GitHub: Assesment Elemes Group

## Daftar Isi

- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Prasyarat](#prasyarat)
- [Penginstalan](#penginstalan)
- [Menjalankan Program](#menjalankan-program)
- [Perintah yang Tersedia](#perintah-yang-tersedia)
- [Konvensi CSS](#konvensi-css)

## Teknologi yang Digunakan

Proyek ini dikembangkan menggunakan teknologi terbaru:

- **Next.js 15.3.0** - Framework React dengan rendering sisi server
- **React 19.0.0** - Library JavaScript untuk membangun antarmuka pengguna
- **TypeScript 5** - Superset JavaScript dengan fitur tipe data statis
- **Tailwind CSS v4** - Framework CSS utility-first
- **Turbopack** - Bundler JavaScript yang cepat (digunakan dalam mode pengembangan)

## Prasyarat

Sebelum menginstal proyek ini, pastikan Anda memiliki:

- Node.js (versi 18.18.0 atau lebih baru)
- npm atau yarn atau pnpm sebagai package manager

## Penginstalan

Ikuti langkah-langkah berikut untuk menginstal proyek ini:

1. Clone repositori dari GitHub

   ```bash
   git clone https://github.com/edo6661/elemes-assesment
   cd assesment-elemes-group
   ```

2. Instal semua dependensi
   ```bash
   npm install
   ```

## Menjalankan Program

Setelah penginstalan selesai, Anda dapat menjalankan proyek dalam berbagai mode:

### Mode Pengembangan

Untuk menjalankan aplikasi dalam mode pengembangan dengan Turbopack:

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000) dan akan otomatis memuat ulang ketika Anda melakukan perubahan pada kode.

### Mode Produksi

Untuk membangun aplikasi untuk produksi:

```bash
npm run build
```

Kemudian untuk menjalankan versi produksi:

```bash
npm run start
```

Aplikasi produksi akan berjalan di [http://localhost:3000](http://localhost:3000).

## Perintah yang Tersedia

Berikut daftar semua perintah yang tersedia dalam proyek:

- `npm run dev` - Menjalankan aplikasi dalam mode pengembangan dengan Turbopack
- `npm run build` - Membangun aplikasi untuk produksi
- `npm run start` - Menjalankan aplikasi yang sudah di-build dalam mode produksi
- `npm run lint` - Menjalankan ESLint untuk memeriksa kode

## Konvensi CSS

Proyek ini menggunakan metode **BEM (Block Element Modifier)** untuk konvensi penamaan CSS, yang dikombinasikan dengan Tailwind CSS.

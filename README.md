# Ecerci Bot Setup

Script ini memerlukan **Node.js** dan beberapa dependensi eksternal agar dapat berjalan dengan lancar, terutama untuk fitur pengambilan proxy otomatis.

## Pra-syarat
* Node.js (Disarankan versi 16 atau yang lebih baru)
* NPM atau Yarn
* PM2 (Untuk menjalankan bot 24/7)

## Instalasi

### 1. Persiapan Lingkungan
Jika kamu menggunakan VPS baru, pastikan folder memiliki izin akses yang benar:
```bash chmod -R 777```

### 2. Instalasi Dependensi
* Gunakan Yarn atau NPM dengan flag khusus untuk menghindari error lockfile pada sistem tertentu:
Menggunakan NPM:

```npm install --no-package-lock --legacy-peer-deps```

## Atau Menggunakan Yarn (Direkomendasikan):

```yarn install --network-timeout 1000000```

### 3. Konfigurasi Fix (PENTING)
* Jika muncul error fetch is not defined, pastikan kamu telah menginstal node-fetch versi 2:

```npm install node-fetch@2```

## Cara Menjalankan
``` npm start
#or
pm2 start index.js --name "ecerci-bot"
```


- 1. Soal Nomor 1
- MANFAAT JSON
JSON pada umumnya sering digunakan pada aplikasi web untuk mengirim data dari server ke browser. Sebagai contoh kasus misalnya seperti ini:

Seorang user melakukan klik pada gambar thumbnail sebuah produk yang dijual disebuah toko online
Selanjutnya script Javascript dijalankan pada browser, melakukan Ajax request ke script PHP yang dijalankan pada server, melemparkan ID dari produk yang dipilih
Kemudian script PHP mengambil data nama produk, deskripsi, harga dan info-info lainnya dari database. Kemudian data dirubah dalam bentuk JSON dan dikirimkan kembali ke browser
Javascript yang jalan di browser kemudian membaca format JSON dan menampilkan detail informasi pada user
Saat proses itu terjadi, browser pada user tidak perlu reload atau berganti halaman. Semuanya terjadi di background.

- 2. Soal Nomor 6
Stack Yang Digunakan
- Node.js
- MongoDB
- Angular.js

- 3. Cara Penggunaan Aplikasi (Soal nomor 6)
- cd soal_6
- npm install
- pastikan service mongodb sudah berjalan
- node server.js
- untuk melakukan seeding Data Paslon, buka browser atau postman dan hit ke API berikut ini http://localhost:8080/api/candidates/seed
- jika sudah maka aplikasi sudah bisa di buka di browser dengan url Localhost dan PORT 8080 (http://localhost:8080)

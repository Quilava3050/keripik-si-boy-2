# 🍿 Keripik Si Boy - Website Bisnis Keripik Tempe

Website modern untuk bisnis keripik tempe dengan desain yang menarik dan fitur-fitur lengkap.

## ✨ Fitur Utama

### 🎨 Desain Modern
- **Responsive Design**: Tampilan yang sempurna di desktop, tablet, dan mobile
- **Animasi Smooth**: Transisi dan animasi yang halus menggunakan CSS
- **Color Scheme**: Gradien warna yang menarik dan profesional
- **Typography**: Font Poppins yang modern dan mudah dibaca

### 🛍️ Fitur E-commerce
- **Product Showcase**: Tampilan produk yang menarik dengan gambar berkualitas
- **Shopping Cart**: Keranjang belanja dengan modal popup
- **Add to Cart**: Fungsi menambah produk ke keranjang
- **Checkout Process**: Proses checkout yang sederhana

### 📱 Responsive Navigation
- **Desktop Menu**: Menu horizontal untuk desktop
- **Mobile Menu**: Hamburger menu untuk mobile
- **Smooth Scrolling**: Navigasi halus antar section

### 📞 Contact & Communication
- **Contact Form**: Form kontak yang lengkap
- **Contact Info**: Informasi kontak yang jelas
- **Social Media Links**: Link ke media sosial

## 🚀 Cara Menjalankan Website

1. **Buka file `index.html`** di browser web Anda
2. **Atau gunakan live server** jika Anda menggunakan VS Code:
   - Install extension "Live Server"
   - Klik kanan pada `index.html`
   - Pilih "Open with Live Server"

## 📁 Struktur File

```
snack-business-website/
├── index.html          # File utama website
├── README.md          # Dokumentasi ini
└── assets/            # Folder untuk gambar (opsional)
    ├── images/
    └── icons/
```

## 🎯 Sections Website

### 1. **Header & Navigation**
- Logo SnackDelight
- Menu navigasi responsif
- Shopping cart icon

### 2. **Hero Section**
- Background image yang menarik
- Call-to-action button
- Animasi fade-in

### 3. **About Section**
- Informasi tentang bisnis
- Gambar produk
- Layout grid responsif

### 4. **Products Section**
- Grid produk yang menarik
- Hover effects
- Add to cart functionality
  - 2 produk keripik original:
  - Keripik Tempe Original (Rp 15.000)
  - Keripik Pare Original (Rp 18.000)

### 5. **Features Section**
- 4 fitur unggulan:
  - Kualitas Terjamin
  - Pengiriman Cepat
  - Harga Terjangkau
  - Promo Menarik

### 6. **Contact Section**
- Informasi kontak lengkap
- Contact form yang fungsional
- Layout 2 kolom

### 7. **Footer**
- Social media links
- Copyright information

## 🛒 Shopping Cart Features

- **Add to Cart**: Klik tombol "Tambah ke Keranjang"
- **View Cart**: Klik icon keranjang di header
- **Remove Items**: Hapus item dari keranjang
- **Checkout**: Proses pesanan
- **Total Calculation**: Kalkulasi total otomatis

## 🎨 Customization

### Mengubah Warna
Edit CSS variables di bagian `<style>`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
}
```

### Menambah Produk dengan Media
Tambahkan card produk baru di section Products:
```html
<div class="product-card">
    <div class="product-media">
        <div class="media-tabs">
            <button class="media-tab active" onclick="switchMedia(this, 'image-new')">Gambar</button>
            <button class="media-tab" onclick="switchMedia(this, 'video-new')">Video</button>
        </div>
        <div class="product-image active" id="image-new">
            <img src="path/to/image.jpg" alt="Nama Produk">
        </div>
        <div class="product-video" id="video-new">
            <video controls>
                <source src="path/to/video.mp4" type="video/mp4">
                Browser Anda tidak mendukung video.
            </video>
        </div>
    </div>
    <div class="product-info">
        <h3 class="product-title">Nama Produk</h3>
        <p class="product-description">Deskripsi produk</p>
        <div class="product-price">Rp 15.000</div>
        <button class="order-button" onclick="addToCart('Nama Produk', 15000)">Tambah ke Keranjang</button>
    </div>
</div>
```

### Mengubah Konten
- Edit teks di file `index.html`
- Ganti gambar dengan URL gambar Anda
- Update informasi kontak

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Technologies Used

- **HTML5**: Struktur website
- **CSS3**: Styling dan animasi
- **JavaScript**: Interaktivitas dan fungsi
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- Email: info@snackdelight.com
- Phone: +62 812-3456-7890

## 📄 License

Website ini dibuat untuk bisnis makanan ringan. Silakan modifikasi sesuai kebutuhan bisnis Anda.

---

**🍿 Keripik Si Boy - Keripik Tempe Terbaik untuk Keluarga Indonesia** 
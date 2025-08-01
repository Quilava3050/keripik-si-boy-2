# 🚀 Panduan Deployment ke Vercel

Website Keripik Si Boy sudah siap untuk di-deploy ke Vercel! Berikut adalah panduan lengkapnya:

## ✅ Checklist Sebelum Deployment

### 1. **File yang Sudah Siap:**
- ✅ `index.html` - File utama website
- ✅ `styles.css` - File CSS terpisah
- ✅ `script.js` - File JavaScript terpisah
- ✅ `vercel.json` - Konfigurasi Vercel
- ✅ `package.json` - Metadata proyek
- ✅ `README.md` - Dokumentasi
- ✅ `.gitignore` - File gitignore

### 2. **Struktur File:**
```
snack-business-website/
├── index.html          # File utama
├── styles.css          # CSS styles
├── script.js           # JavaScript functions
├── vercel.json         # Vercel config
├── package.json        # Project metadata
├── README.md           # Documentation
├── .gitignore          # Git ignore
└── DEPLOYMENT.md       # This file
```

## 🚀 Cara Deploy ke Vercel

### **Metode 1: Deploy via Vercel Dashboard**

1. **Buka [vercel.com](https://vercel.com)**
2. **Sign up/Login** dengan GitHub, GitLab, atau Bitbucket
3. **Klik "New Project"**
4. **Import Repository:**
   - Pilih "Import Git Repository"
   - Pilih repository yang berisi file website
   - Atau drag & drop folder `snack-business-website`
5. **Konfigurasi Project:**
   - Project Name: `keripik-siboy-website`
   - Framework Preset: `Other`
   - Root Directory: `./` (atau kosong)
6. **Klik "Deploy"**

### **Metode 2: Deploy via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy dari folder website:**
   ```bash
   cd snack-business-website
   vercel
   ```

4. **Ikuti instruksi yang muncul:**
   - Set up and deploy? `Y`
   - Which scope? `[Pilih scope Anda]`
   - Link to existing project? `N`
   - Project name: `keripik-siboy-website`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

### **Metode 3: Deploy via GitHub Integration**

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/keripik-siboy-website.git
   git push -u origin main
   ```

2. **Connect di Vercel:**
   - Buka Vercel Dashboard
   - Klik "New Project"
   - Pilih repository dari GitHub
   - Deploy otomatis

## ⚙️ Konfigurasi Vercel

File `vercel.json` sudah dikonfigurasi dengan:

### **Build Configuration:**
- Static file handling untuk HTML, CSS, JS
- Proper routing untuk SPA
- Security headers
- Cache optimization

### **Security Headers:**
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

### **Cache Optimization:**
- CSS/JS files: 1 year cache
- Images: 1 year cache
- Static assets optimization

## 🌐 Domain & Custom Domain

### **Setelah Deploy:**
1. **Vercel akan memberikan URL:** `https://keripik-siboy-website.vercel.app`
2. **Untuk Custom Domain:**
   - Buka Project Settings di Vercel
   - Klik "Domains"
   - Tambahkan domain Anda (misal: `keripiksiboy.com`)
   - Update DNS records sesuai instruksi Vercel

## 📊 Monitoring & Analytics

### **Vercel Analytics:**
- Otomatis tersedia setelah deploy
- Page views, performance metrics
- Real-time monitoring

### **Google Analytics (Opsional):**
Tambahkan di `index.html` sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Environment Variables (Opsional)

Jika diperlukan, tambahkan di Vercel Dashboard:
- `NODE_ENV`: `production`
- `SITE_URL`: URL website Anda

## 🚀 Post-Deployment Checklist

### **Setelah Deploy Berhasil:**

1. **✅ Test Website:**
   - Buka URL yang diberikan Vercel
   - Test semua fitur (cart, contact form, dll)
   - Test responsive design

2. **✅ Update Content:**
   - Ganti gambar produk dengan gambar asli
   - Update informasi kontak
   - Sesuaikan harga jika perlu

3. **✅ SEO Optimization:**
   - Update meta tags di `index.html`
   - Tambahkan Google Analytics
   - Submit ke Google Search Console

4. **✅ Performance Check:**
   - Test loading speed
   - Optimize images jika perlu
   - Check mobile performance

## 🆘 Troubleshooting

### **Jika Deploy Gagal:**
1. **Check file structure** - pastikan semua file ada
2. **Check vercel.json** - pastikan syntax benar
3. **Check console logs** di Vercel Dashboard
4. **Redeploy** jika diperlukan

### **Jika Website Tidak Muncul:**
1. **Check routing** di `vercel.json`
2. **Check file paths** di HTML
3. **Check browser console** untuk errors

## 📞 Support

Jika ada masalah dengan deployment:
- **Vercel Documentation:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **Community:** https://github.com/vercel/vercel/discussions

---

**🎉 Website Keripik Si Boy siap untuk go live!**

Setelah deploy, website Anda akan memiliki:
- ✅ URL publik yang bisa diakses siapa saja
- ✅ SSL certificate otomatis
- ✅ CDN global untuk performa cepat
- ✅ Auto-deploy dari Git repository
- ✅ Analytics dan monitoring
- ✅ Custom domain support 
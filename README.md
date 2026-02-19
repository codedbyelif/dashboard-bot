# Dashboard Bot

Advanced dashboard application featuring an integrated Instagram Bot tool, built with Next.js, TypeScript, and Supabase.
Designed by **@codedbyelif**.

---

## 🇹🇷 Türkçe (Turkish)

### 📌 Proje Hakkında
Bu proje, modern bir web arayüzü üzerinden çeşitli bot araçlarını yönetmenizi sağlayan bir dashboard uygulamasıdır. İçerisinde bulunan **Instagram Bot** aracı sayesinde Instagram kullanıcılarını takip edebilir, durumlarını kontrol edebilir ve veritabanı kaydı tutabilirsiniz.

### ✨ Özellikler

#### 🖥️ Dashboard & Arayüz
- **Modern UI:** Tailwind CSS ve shadcn/ui ile tasarlanmış şık ve karanlık mod (Dark Mode) destekli arayüz.
- **Responsive Tasarım:** Mobil ve masaüstü uyumlu.
- **Güvenli Giriş:** Global şifre korumalı giriş ekranı.

#### 🤖 Instagram Bot Aracı
- **Kullanıcı Takibi:** `/adduser [kullanici_adi]` komutu ile kullanıcıları takip listesine ekleme.
- **Otomatik Kontrol:** Arka planda çalışan servis ile kullanıcı durumlarını periyodik olarak kontrol etme.
- **Detaylı Raporlama:** Kullanıcıların aktif, pasif veya silinmiş olup olmadığını görsel olarak raporlama.
- **Sohbet Arayüzü:** Telegram benzeri komut yapısı ve mesaj formatı ile kolay kullanım.
- **Veritabanı Kaydı:** Tüm kullanıcı verileri Supabase üzerinde güvenli bir şekilde saklanır.

### 📂 Dosya Yapısı

```
.
├── public/                 # Statik dosyalar (logo, ikonlar)
├── src/
│   ├── app/
│   │   ├── api/            # Backend API rotaları
│   │   │   ├── chat/       # Sohbet ve bot işlemleri
│   │   │   └── login/      # Giriş işlemi
│   │   ├── dashboard/      # Dashboard sayfaları
│   │   │   ├── chat/       # Sohbet arayüzü
│   │   │   └── page.tsx    # Dashboard ana sayfası
│   │   ├── layout.tsx      # Ana düzen
│   │   └── page.tsx        # Giriş sayfası
│   ├── components/         # React bileşenleri
│   │   ├── dashboard/      # Sidebar, Header vb.
│   │   └── ui/             # Temel UI elemanları (Button, Input vb.)
│   └── lib/                # Yardımcı kütüphaneler
│       ├── instagram.ts    # Instagram kontrol mantığı
│       ├── instagram-manager.ts # Bot komut yöneticisi
│       ├── supabase.ts     # Veritabanı bağlantısı
│       └── tool-runner.ts  # Araç çalıştırma servisi
├── create_users_table.sql  # Veritabanı kurulum SQL'i
└── package.json            # Proje bağımlılıkları
```

### ⚙️ Kurulum ve Yapılandırma

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/codedbyelif/dashboard-bot.git
    cd dashboard-bot
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Çevre Değişkenlerini Ayarlayın:**
    `.env.local` dosyasını oluşturun ve gerekli bilgileri girin:
    ```env
    # Supabase Bağlantısı
    SUPABASE_URL=https://your-project.supabase.co
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

    # Güvenlik
    JWT_SECRET=gizli-anahtariniz
    COOKIE_NAME=auth-token
    GLOBAL_PASSWORD=giris-sifreniz

    # Instagram Bot Ayarları
    CHECK_TIME=30 # Dakika cinsinden kontrol süresi
    
    # Proxy Ayarları (Opsiyonel)
    PROXY_HOST=proxy.example.com
    PROXY_PORT=8080
    PROXY_USER=kullanici
    PROXY_PASS=sifre
    ```

4.  **Veritabanını Hazırlayın:**
    Supabase SQL editöründe `create_users_table.sql` dosyasının içeriğini çalıştırarak gerekli tabloları oluşturun.

5.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    ```

---

## 🇺🇸 English (English)

### 📌 About Project
This project is a dashboard application that allows you to manage various bot tools through a modern web interface. With the integrated **Instagram Bot** tool, you can track Instagram users, check their status, and keep database records.

### ✨ Features

#### 🖥️ Dashboard & Interface
- **Modern UI:** Stylish interface designed with Tailwind CSS and shadcn/ui, supporting Dark Mode.
- **Responsive Design:** Compatible with mobile and desktop.
- **Secure Login:** Global password-protected login screen.

#### 🤖 Instagram Bot Tool
- **User Tracking:** Add users to the tracking list with the `/adduser [username]` command.
- **Auto Check:** Periodically check user statuses with a background service.
- **Detailed Reporting:** Visual reporting of whether users are active, passive, or deleted.
- **Chat Interface:** Easy use with Telegram-like command structure and message formatting.
- **Database Logging:** All user data is securely stored on Supabase.

### 📂 File Structure

```
.
├── public/                 # Static files (logo, icons)
├── src/
│   ├── app/
│   │   ├── api/            # Backend API routes
│   │   │   ├── chat/       # Chat and bot operations
│   │   │   └── login/      # Login operation
│   │   ├── dashboard/      # Dashboard pages
│   │   │   ├── chat/       # Chat interface
│   │   │   └── page.tsx    # Dashboard overview
│   │   ├── layout.tsx      # Main layout
│   │   └── page.tsx        # Login page
│   ├── components/         # React components
│   │   ├── dashboard/      # Sidebar, Header etc.
│   │   └── ui/             # Core UI elements (Button, Input etc.)
│   └── lib/                # Utility libraries
│       ├── instagram.ts    # Instagram checking logic
│       ├── instagram-manager.ts # Bot command manager
│       ├── supabase.ts     # Database connection
│       └── tool-runner.ts  # Tool runner service
├── create_users_table.sql  # Database setup SQL
└── package.json            # Project dependencies
```

### ⚙️ Installation & Configuration

1.  **Clone the Project:**
    ```bash
    git clone https://github.com/codedbyelif/dashboard-bot.git
    cd dashboard-bot
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env.local` file and enter the required information:
    ```env
    # Supabase Connection
    SUPABASE_URL=https://your-project.supabase.co
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

    # Security
    JWT_SECRET=your-secret-key
    COOKIE_NAME=auth-token
    GLOBAL_PASSWORD=your-login-password

    # Instagram Bot Settings
    CHECK_TIME=30 # Check interval in minutes
    
    # Proxy Settings (Optional)
    PROXY_HOST=proxy.example.com
    PROXY_PORT=8080
    PROXY_USER=user
    PROXY_PASS=pass
    ```

4.  **Prepare Database:**
    Run the content of the `create_users_table.sql` file in the Supabase SQL editor to create the necessary tables.

5.  **Start Application:**
    ```bash
    npm run dev
    ```

---

### 🛠️ Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [Supabase](https://supabase.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

Developed with ❤️ by **@codedbyelif**

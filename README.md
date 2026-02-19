# Dashboard Bot

Advanced dashboard application featuring an integrated Instagram Bot tool, built with Next.js, TypeScript, and Supabase.
Designed by **@codedbyelif**.

---

## Turkce (Turkish)

### Proje Hakkinda
Bu proje, modern bir web arayuzu uzerinden cesitli bot araclarini yonetmenizi saglayan bir dashboard uygulamasidir. Icerisinde bulunan **Instagram Bot** araci sayesinde Instagram kullanicilarini takip edebilir, durumlarini kontrol edebilir ve veritabani kaydi tutabilirsiniz.

### Ozellikler

#### Dashboard & Arayuz
- **Modern UI:** Tailwind CSS ve shadcn/ui ile tasarlanmis sik ve karanlik mod (Dark Mode) destekli arayuz.
- **Responsive Tasarim:** Mobil ve masaustu uyumlu.
- **Guvenli Giris:** Global sifre korumali giris ekrani.

#### Instagram Bot Araci
- **Kullanici Takibi:** `/adduser [kullanici_adi]` komutu ile kullanicilari takip listesine ekleme.
- **Otomatik Kontrol:** Arka planda calisan servis ile kullanici durumlarini periyodik olarak kontrol etme.
- **Detayli Raporlama:** Kullanicilarin aktif, pasif veya silinmis olup olmadigini gorsel olarak raporlama.
- **Sohbet Arayuzu:** Telegram benzeri komut yapisi ve mesaj formati ile kolay kullanim.
- **Veritabani Kaydi:** Tum kullanici verileri Supabase uzerinde guvenli bir sekilde saklanir.

### Dosya Yapisi

```
.
├── public/                 # Statik dosyalar (logo, ikonlar)
├── src/
│   ├── app/
│   │   ├── api/            # Backend API rotalari
│   │   │   ├── chat/       # Sohbet ve bot islemleri
│   │   │   └── login/      # Giris islemi
│   │   ├── dashboard/      # Dashboard sayfalari
│   │   │   ├── chat/       # Sohbet arayuzu
│   │   │   └── page.tsx    # Dashboard ana sayfasi
│   │   ├── layout.tsx      # Ana duzen
│   │   └── page.tsx        # Giris sayfasi
│   ├── components/         # React bilesenleri
│   │   ├── dashboard/      # Sidebar, Header vb.
│   │   └── ui/             # Temel UI elemanlari (Button, Input vb.)
│   └── lib/                # Yardimci kutuphaneler
│       ├── instagram.ts    # Instagram kontrol mantigi
│       ├── instagram-manager.ts # Bot komut yoneticisi
│       ├── supabase.ts     # Veritabani baglantisi
│       └── tool-runner.ts  # Arac calistirma servisi
├── create_users_table.sql  # Veritabani kurulum SQL'i
└── package.json            # Proje bagimliliklari
```

### Kurulum ve Yapilandirma (Local)

1.  **Projeyi Klonlayin:**
    Terminalinizi acin ve asagidaki komutlari sirasiyla girin:
    ```bash
    git clone https://github.com/codedbyelif/dashboard-bot.git
    cd dashboard-bot
    ```

2.  **Bagimliliklari Yukleyin:**
    Proje klasorunun icindeyken su komutu calistirin:
    ```bash
    npm install
    ```

3.  **Cevre Degiskenlerini Ayarlayin:**
    Proje ana dizininde `.env.local` adinda yeni bir dosya olusturun ve asagidaki bilgileri kendi degerlerinizle doldurun:
    ```env
    # Supabase Baglantisi
    SUPABASE_URL=https://your-project.supabase.co
    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

    # Guvenlik
    JWT_SECRET=gizli-anahtariniz
    COOKIE_NAME=auth-token
    GLOBAL_PASSWORD=giris-sifreniz

    # Instagram Bot Ayarlari
    CHECK_TIME=30 # Dakika cinsinden kontrol suresi
    
    # Proxy Ayarlari (Opsiyonel - Eger proxy kullanacaksaniz)
    PROXY_HOST=proxy.example.com
    PROXY_PORT=8080
    PROXY_USER=kullanici
    PROXY_PASS=sifre
    ```

4.  **Veritabanini Hazirlayin:**
    Supabase panelinize gidin, SQL Editor kismini acin ve projedeki `create_users_table.sql` dosyasinin icerigini kopyalayip calistirin. Bu islem gerekli tablolari olusturacaktir.

5.  **Uygulamayi Baslatin:**
    Her sey hazirsa uygulamayi baslatin:
    ```bash
    npm run dev
    ```
    Tarayicinizda `http://localhost:3000` adresine giderek uygulamayi gorebilirsiniz.

### Vercel ile Deploy (Canliya Alma)

Bu projeyi Vercel uzerinde kolayca yayinlayabilirsiniz:

1.  GitHub projenizi Vercel hesabinizla baglayin.
2.  Import Project ekraninda bu repoyu secin.
3.  **Environment Variables** kismina gelin.
4.  `.env.local` dosyasindaki TUM degiskenleri (SUPABASE_URL, GLOBAL_PASSWORD vb.) buraya tek tek ekleyin.
5.  **Deploy** butonuna basin.
6.  Kurulum tamamlandiginda size verilen URL uzerinden uygulamaya erisebilirsiniz.

---

## English (English)

### About Project
This project is a dashboard application that allows you to manage various bot tools through a modern web interface. With the integrated **Instagram Bot** tool, you can track Instagram users, check their status, and keep database records.

### Features

#### Dashboard & Interface
- **Modern UI:** Stylish interface designed with Tailwind CSS and shadcn/ui, supporting Dark Mode.
- **Responsive Design:** Compatible with mobile and desktop.
- **Secure Login:** Global password-protected login screen.

#### Instagram Bot Tool
- **User Tracking:** Add users to the tracking list with the `/adduser [username]` command.
- **Auto Check:** Periodically check user statuses with a background service.
- **Detailed Reporting:** Visual reporting of whether users are active, passive, or deleted.
- **Chat Interface:** Easy use with Telegram-like command structure and message formatting.
- **Database Logging:** All user data is securely stored on Supabase.

### File Structure

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

### Installation & Configuration (Local)

1.  **Clone the Project:**
    Open your terminal and run the following commands:
    ```bash
    git clone https://github.com/codedbyelif/dashboard-bot.git
    cd dashboard-bot
    ```

2.  **Install Dependencies:**
    Run this command inside the project folder:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env.local` file in the root directory and fill it with your own values:
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
    Go to your Supabase dashboard, open the SQL Editor, copy the content of `create_users_table.sql` file and run it. This will create the necessary tables.

5.  **Start Application:**
    Start the development server:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` in your browser.

### Deployment on Vercel

You can easily deploy this project on Vercel:

1.  Connect your GitHub repository to your Vercel account.
2.  Select this repository in the Import Project screen.
3.  Go to the **Environment Variables** section.
4.  Add ALL variables from your `.env.local` file (SUPABASE_URL, GLOBAL_PASSWORD, etc.) here one by one.
5.  Click the **Deploy** button.
6.  Once the deployment is complete, you can access your application via the provided URL.

---

### Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [Supabase](https://supabase.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

Developed by **@codedbyelif**

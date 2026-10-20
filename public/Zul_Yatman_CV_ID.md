# Zul Yatman

**Senior Software Quality Assurance Engineer · SDET Architect · Distributed Systems & Performance Testing**

Bandung, Jawa Barat, Indonesia  
[zoeltea@gmail.com](mailto:zoeltea@gmail.com) · [linkedin.com/in/zul-yatman](https://www.linkedin.com/in/zul-yatman) · [github.com/zoeltea](https://github.com/zoeltea) · [zoeltea.github.io/resume](https://zoeltea.github.io/resume/)

---

## Ringkasan

Saya membangun framework rekayasa kualitas (quality engineering) otomatis dan memastikan sistem berkonkurensi tinggi berjalan tanpa hambatan di lingkungan produksi. Selama lebih dari **10+ tahun** saya memimpin penjaminan mutu perangkat lunak, arsitektur otomatisasi pengujian, benchmark performa terdistribusi, serta rekayasa backend inti di industri retail omnichannel, e-commerce, fintech, media streaming, dan perbankan di Indonesia.

Sistem retail omnichannel dan integrasi marketplace ber-throughput tinggi adalah fokus saya saat ini. Di **EIGER (PT Eigerindo Multi Produk Industri)**, saya memimpin quality engineering di seluruh operasi omnichannel—merancang validasi otomatis end-to-end untuk migrasi fulfillment pesanan TikTok Shop dari sistem legacy UFFOS ke platform CARE tanpa ada pesanan yang hilang (*zero dropped orders*), memimpin pengujian performa terdistribusi k6 saat lonjakan flash sale dan klaim voucer, serta memastikan sinkronisasi data konsisten di seluruh POS, perangkat inventaris toko (*Blind Counting*), dan platform OMS.

Sebelum di EIGER, saya berkarier selama lebih dari empat tahun di **Bukalapak**, berkembang dari **Lead QA / Test Engineer (2020 – 2023)** menjadi **Senior Software Engineer di Fintech & Commerce Systems (2023 – 2024)**. Di sisi kepemimpinan QA, saya membangun platform otomasi pengujian mandiri bagi tim developer termasuk modul generator HMAC Signature yang menghemat 150+ jam kerja per bulan, memangkas durasi pipeline regresi dari 40 menit menjadi di bawah 5 menit menggunakan eksekusi kontainer paralel di Kubernetes, serta menanamkan budaya *self-service testing*. Di sisi rekayasa backend, saya mengembangkan engine *Dynamic Service Fee* yang menopang lini pendapatan utama di platform web dan mobile, serta mengoptimasi API checkout reseller Lapakgaming hingga memangkas latensi sebesar 87,5% (dari ~40 detik menjadi ~5 detik).

Pengalaman terdahulu mencakup pengembangan otomasi pengujian lintas platform untuk streaming video DRM di **Vidio**, otomasi chat dan dompet digital di **BBM (BlackBerry Messenger)**, serta validasi transaksi switch perbankan ISO8583 di **Aprisma**. Saya memadukan keahlian coding yang kuat dalam Go, Python, Java, dan TypeScript dengan praktik QA mutakhir seperti pengujian beban terdistribusi dan *contract testing*. Saya terbuka untuk peran Senior QA, Lead SDET, QA Architect, maupun Senior Software Engineering pada sistem terdistribusi berskala besar.

---

## Sorotan

- **10+ tahun** merancang framework pengujian otomatis, keandalan sistem, dan pengujian performa terdistribusi di sektor retail omnichannel, fintech, e-commerce, media streaming, dan core banking.
- **Merekayasa eksekusi kontainer paralel** di Kubernetes saat di Bukalapak, memangkas durasi siklus regresi penuh dari 40 menit menjadi di bawah 5 menit (efisiensi waktu 85%+).
- **Membangun pengujian performa terdistribusi** menggunakan k6 yang terintegrasi ke pipeline CI/CD di EIGER, memvalidasi throughput sistem pada beban lonjakan 10.000+ RPM.
- **Menciptakan perkakas otomasi bagi developer**, termasuk generator HMAC Signature otomatis yang menghemat 150+ jam engineering per bulan saat pengujian integrasi perbankan.
- **Mendorong rekayasa dan optimasi sistem fintech inti** di Bukalapak, membangun engine Dynamic Service Fee dan memangkas latensi API checkout Lapakgaming dari 40 detik ke 5 detik.

---

## Kompetensi Inti

| Bidang | Teknologi & Praktik |
|------|--------------------------|
| **Bahasa Pemrograman** | Go (Golang), Python, Java, JavaScript / Node.js, PHP, SQL, Bash / Shell |
| **Otomasi Pengujian & QA** | Playwright, Cypress, Appium, Robot Framework, Postman / Newman, Selenium, TestNG, Contract Testing |
| **Pengujian Beban & Performa** | k6 (Distributed Load Testing), Locust, JMeter, Analisis Konkurensi & Bottleneck |
| **CI/CD & DevOps** | GitLab CI, Jenkins, Docker, Kubernetes, Kontainerisasi Uji, Quality Gates Rilis |
| **Basis Data & Integrasi** | PostgreSQL, MySQL, Redis (Caching / Distributed Locks), RESTful APIs, Microservices, Webhooks |
| **Domain Industri** | Omnichannel Retail, E-Commerce, Fintech & Pembayaran, Core Banking (ISO8583), Video Streaming (DRM / HLS / DASH) |
| **Kepemimpinan** | Arsitektur QA, Budaya Shift-Left, Pemberdayaan Developer, RFC Teknis, Mentoring Mutu Squad |

---

## Pengalaman Profesional

### PT Eigerindo Multi Produk Industri (Contracted by Digital Tech Asia)
**Senior Software Quality Assurance Engineer** · Jan 2026 – Sekarang  
*Bandung, Indonesia (Hybrid)*

Memimpin arsitektur penjaminan mutu, pipeline otomasi pengujian, dan benchmark keandalan sistem ber-throughput tinggi untuk operasional toko retail dan integrasi marketplace.

- **Migrasi Pemrosesan Pesanan TikTok Shop (UFFOS ke CARE):** Memimpin pengujian end-to-end untuk migrasi inti fulfillment pesanan TikTok Shop dari layanan legacy UFFOS ke platform CARE. Bekerja sama erat dengan BA dan Developer untuk memvalidasi keandalan webhook dan sinkronisasi status pesanan, memastikan zero dropped order saat lonjakan flash sale.
- **Pengujian Performa Terdistribusi:** Merancang dan mengeksekusi suite performance test terdistribusi berbasis k6 di pipeline CI/CD, memvalidasi throughput layanan dan ketahanan API pada skenario beban 10.000+ RPM pesanan konkuren.
- **Inisiatif Blind Counting (Inventaris Toko Ritel):** Merumuskan skenario pengujian komprehensif yang menjamin konsistensi stok mutlak antara POS, kasir toko, dan OMS tanpa mengekspos jumlah stok kepada staf lapangan, mendukung peluncuran ke 25+ gerai ritel dan menekan selisih rekonsiliasi stok sebesar 42%.
- **Optimasi Sistem Voucer & Kupon:** Membangun suite load testing k6 untuk menilai ketahanan endpoint saat lonjakan klaim voucer massal, mengisolasi bottleneck sistem dan menetapkan benchmark konkurensi bagi engineer backend.
- Stack: Go, Node.js / TypeScript, Redis, PostgreSQL, k6, Docker, Kubernetes, Robot Framework, Postman

---

### Bukalapak
**Jun 2020 – Des 2024** · *4 tahun 7 bulan*  
*Bandung / Jakarta, Indonesia*

Kepemimpinan teknis progresif yang mencakup arsitektur pengujian, tooling pemberdayaan developer, dan engine kalkulasi backend fintech di squad transaksi dan pembayaran.

#### Senior Software Engineer (Fintech & Commerce Systems) · Okt 2023 – Des 2024
- Mengembangkan dan memelihara engine Dynamic Service Fee di Desktop, Mobile Web, Android, iOS, dan Mitra Bukalapak sebagai penopang pendapatan platform.
- Mengembangkan mekanisme transaksi Cashback dan Mix-Payment untuk platform Lapakgaming.
- Mengoptimasi API pengambilan produk dan checkout pada Lapakgaming Reseller System, memangkas latensi dari ~40 detik menjadi ~5 detik (penurunan 87,5%).
- Menyusun RFC teknis, diagram alir arsitektur, dan sequence diagram untuk fitur-fitur transaksional baru.
- Stack: Ruby on Rails, Go, MySQL, Redis Cluster, Kafka, gRPC, Datadog

#### Lead QA / Test Engineer · Jun 2020 – Apr 2024
- Merancang ulang framework pengujian E2E inti dengan eksekusi kontainer paralel di Kubernetes, memangkas durasi pipeline regresi dari 40 menit menjadi di bawah 5 menit (efisiensi 85%).
- Membangun platform internal pembuatan HMAC Signature dan manipulasi payload webhook bagi developer, menghemat 150+ jam kerja engineering per bulan saat pengujian API mitra perbankan.
- Menstabilkan dan merefaktor suite otomasi pengujian yang flaky pada aplikasi Android, iOS, dan Mitra Bukalapak.
- Membangun dashboard pelaporan regresi terintegrasi Slack dan bot triaging kegagalan, melaporkan status smoke dan regresi real-time langsung ke pipeline deployment.
- Menggerakkan budaya *self-service testing* melalui workshop dan dokumentasi, membimbing 35+ engineer dalam menulis contract testing dan integration test yang tangguh.
- Stack: Go, TypeScript, Cypress, Playwright, Python, k6, Appium, Docker, Kubernetes, GitLab CI, Slack Bolt API

---

### Gan Kapital
**QA Instructor** · Jun 2025  
*Jakarta, Indonesia*

- Memberikan sesi pelatihan Test Automation khusus untuk tim internal engineering perusahaan.
- Menyampaikan kurikulum praktis mengenai penulisan skrip otomasi pengujian, penanganan flaky test, dan implementasi best practices otomasi di lingkungan enterprise.

---

### Vidio & PT Kreatif Media Karya (KMK)
**Test Engineer** · Mar 2019 – Jun 2020  
*Jakarta, Indonesia*

- Memimpin penjaminan mutu untuk layanan inti pemutaran Livestreaming dan Video on Demand (VOD) bagi lebih dari 40 juta penonton.
- Mengembangkan suite otomasi pengujian lintas platform menggunakan Robot Framework berbasis Python untuk Web, Android, dan iOS.
- Mengintegrasikan verifikasi pemutaran video berkepatuhan DRM ke pipeline rilis, memvalidasi fallback adaptive bitrate streaming pada kondisi degradasi jaringan.
- Stack: Python, Robot Framework, Appium, Docker, HLS / DASH, Selenium, Jenkins

---

### BBM (BlackBerry Messenger)
**Senior Software Development Engineer in Test (SDET)** · Jul 2018 – Mei 2019  
*Jakarta, Indonesia*

- Mengembangkan dan memelihara suite otomasi pengujian mobile berskala besar menggunakan Appium dan Robot Framework untuk 60M+ pengguna di Asia Tenggara.
- Menetapkan framework continuous load testing guna mengevaluasi koneksi socket server percakapan di bawah lonjakan koneksi masif.
- Mengonfigurasi Jenkins CI untuk eksekusi terjadwal berkala dan menerapkan praktik pair programming bersama tim pengembang.
- Stack: Java, Appium, Robot Framework, JMeter, TestNG, Jenkins, Git

---

### PT Aprisma Indonesia
**Nov 2015 – Jun 2018** · *2 tahun 8 bulan*  
*Jakarta, Indonesia*

#### Quality Assurance Engineer · Nov 2015 – Jun 2018
- Melakukan verifikasi fungsional, integrasi mobile/web, dan pengujian transaksi basis data langsung untuk sistem core banking perbankan nasional.
- Memverifikasi framing pesan transfer dana antarbank protokol ISO8583, mekanisme rollback transaksi, dan integrasi switch ATM/EDC.
- Menyusun Dokumen Test Plan, Test Cases, persetujuan rilis (sign-off), dan SOP (Standard Operating Procedures).
- Stack: Java, ISO8583, SQL / Oracle DB, SOAP / REST APIs, Linux

#### Java Developer · Agu 2015 – Nov 2015
- Membangun modul software perbankan menggunakan Java dan menyelesaikan defect kritis pada backend service.

---

### PT Sumber Data Persada
**IT Specialist** · Jul 2011 – Jun 2015  
*Bekasi & On-site, Indonesia*

- Menangani deployment, konfigurasi, dan dukungan operasional software monitoring real-time di rig pengeboran minyak & gas bumi (onshore & offshore).
- Memelihara dan mengalibrasi server data telemetri sensor real-time dengan uptime 99,9% pada lingkungan lapangan yang berat.
- Merancang skrip otomatis pencadangan basis data lokal, mekanisme failover, dan verifikasi integritas data untuk mencegah kehilangan data pengeboran vital.
- Stack: Linux / Unix Systems, Industrial Networking & Modbus, Satellite VSAT Telemetry, SQL, Bash

---

## Pendidikan

| Institusi | Program / Fokus | Periode |
|-------------|-----------------|---------|
| **Universitas Pasundan Bandung** | Sarjana Komputer (S.Kom.), Teknik Informatika | 2006 – 2012 |

---

## Bahasa

- **Bahasa Indonesia:** Penutur asli
- **Bahasa Inggris:** Mampu untuk lingkungan kerja profesional

---

## Informasi Tambahan

- **Izin kerja:** Indonesia
- **Domain yang diminati:** Omnichannel Retail, E-Commerce, Fintech & Pembayaran, Sistem Terdistribusi Berkonkurensi Tinggi, Quality Engineering & SDET
- **Cakupan kepemimpinan:** Membimbing 35+ engineer lintas tim QA dan backend; memegang kepemilikan arsitektur penjaminan mutu di berbagai squad/tribe
- **Ketersediaan:** Terbuka untuk peran Senior QA / Lead SDET / QA Architect / Senior Engineering

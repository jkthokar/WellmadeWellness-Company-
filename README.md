# WellmadeWellness

**Naturally good, thoughtfully made.**
"자연 그대로, 정성을 담아 만들었습니다."

WellmadeWellness is a Korean seafood and food products company based in Sokcho. This repository contains the company's public website along with the internal management tools used to track container inventory, brand labels, and 명란 (pollock roe) production.

🔗 **Live site:** https://jkthokar.github.io/WellmadeWellness-Company-/

---

## Pages

Every internal tool is split into an **admin** version (staff sign-in required, full add/edit/delete) and a **public** version (no sign-in, read-only search + Excel export). This keeps data entry behind a login while still letting anyone view current stock and production records.

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Public-facing site — company philosophy and a customer contact/booking form |
| Sign in | `login.html` | Staff-only login gate protecting every admin tool below (lands on the Dashboard after sign-in) |
| Company Dashboard (admin) | `dashboard.html` | One-page overview combining Container, Labelling, and Production — KPI cards, a combined low-stock/reminder alert feed, a 7-day production trend, collapsible stock tables for every tool, a unified recent-activity feed, and a full multi-sheet Excel export |
| Container (public) | `inventory.html` | Read-only view of container stock and transaction history, with search and Excel export |
| Container (admin) | `admin-inventory.html` | Log Bought / Used / Sold transactions across three product groups, with live remaining-stock totals |
| Labelling (public) | `brands.html` | Read-only view of brands, labels, and transaction history, with search and Excel export |
| Labelling (admin) | `admin-brands.html` | Manage brands and labels, log transactions, with per-brand breakdowns |
| Production (public) | `production.html` | Read-only view of the 명란생산일지 (production log) — work history, warehouse stock, and auxiliary materials status |
| Production (admin) | `admin-production.html` | Log thawing/mixing/curing work, manage frozen & refrigerated warehouse stock, log auxiliary material transactions, and view the daily work dashboard |

## Features

- **Real-time shared data** — all staff see the same live data, powered by Firebase Firestore
- **Admin vs. public split** — data entry only happens on admin pages behind Firebase Authentication; public pages are read-only, no login needed
- **Full audit trail** — every entry records who logged it and who checked it, with inline edit and delete
- **Search & filter** — quickly find a specific product, brand, label, or production entry across a large history
- **Automatic backups** — a snapshot is saved before every delete, with a one-click "Restore last backup"
- **Company-wide dashboard** — every tool's stock, alerts, and recent activity combined into one page
- **Daily work dashboard** — per-stage totals and entry counts for any selected day in the production log
- **Auxiliary materials tracking** — logged as In/Used transactions with automatically computed running stock, plus low-stock warnings and a weekly-purchase reminder
- **Bilingual labels** — Korean and English shown side by side throughout the production pages
- **AI assistants** — a Gemini-powered chatbot on the homepage, and a natural-language "Fill with AI" helper on the container and labelling entry forms
- **Excel export** — one click generates a formatted `.xlsx` workbook with a summary sheet plus a detail sheet per item

## Tech stack

- Static HTML, CSS, and vanilla JavaScript — no build step, hosted free on GitHub Pages
- [Firebase Firestore](https://firebase.google.com/products/firestore) for shared, real-time data storage
- [Firebase Authentication](https://firebase.google.com/products/auth) for staff login
- [Firebase AI Logic](https://firebase.google.com/products/vertex-ai-in-firebase) (Gemini Developer API) for the chatbot and Fill-with-AI assistants
- [ExcelJS](https://github.com/exceljs/exceljs) for generating formatted Excel exports client-side

## Notes for contributors

- Each page is self-contained (HTML + CSS + JS in one file) for simplicity of deployment
- Changes are deployed automatically by GitHub Pages a minute or so after committing to `main`
- Firestore security rules allow public reads (`allow read: if true;`) but require an authenticated user for all writes

---

© 2026 WellmadeWellness · Sokcho, South Korea

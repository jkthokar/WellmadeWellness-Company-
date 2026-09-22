# WellmadeWellness

**Naturally good, thoughtfully made.**
"자연 그대로, 정성을 담아 만들었습니다."

WellmadeWellness is a Korean seafood and food products company based in Sokcho. This repository contains the company's public website along with two internal management tools used to track container and label inventory.

🔗 **Live site:** https://jkthokar.github.io/WellmadeWellness-Company-/

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Public-facing site — company philosophy and a customer contact/booking form |
| Container Management | `inventory.html` | Internal tool tracking containers bought, used, and sold, with live remaining-stock totals |
| Label Management | `brands.html` | Internal tool tracking multiple brands and their labels — bought / used / sold, with per-brand breakdowns |
| Sign in | `login.html` | Staff-only login gate protecting the two internal tools above |

## Features

- **Real-time shared data** — all staff see the same live inventory, powered by Firebase Firestore
- **Staff login required** — Inventory and Brands pages are only accessible after signing in (Firebase Authentication)
- **Full audit trail** — every entry records who logged it and who checked it, with inline edit and delete
- **Search & filter** — quickly find a specific product, brand, or label across a large transaction history
- **Excel export** — one click generates a formatted `.xlsx` workbook with a summary sheet plus a detail sheet per item

## Tech stack

- Static HTML, CSS, and vanilla JavaScript — no build step, hosted free on GitHub Pages
- [Firebase Firestore](https://firebase.google.com/products/firestore) for shared, real-time data storage
- [Firebase Authentication](https://firebase.google.com/products/auth) for staff login
- [ExcelJS](https://github.com/exceljs/exceljs) for generating formatted Excel exports client-side

## Notes for contributors

- Each page is self-contained (HTML + CSS + JS in one file) for simplicity of deployment
- Changes are deployed automatically by GitHub Pages a minute or so after committing to `main`
- Firestore security rules require an authenticated user for all reads and writes

---

© 2026 WellmadeWellness · Sokcho, South Korea

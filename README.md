# Standard Saudi Chart of Accounts (دليل الحسابات الموحد للشركات السعودية)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Saudi VAT 15% Ready](https://img.shields.io/badge/ZATCA-15%25%20VAT%20Ready-emerald.svg)](https://biza.app/features/zatca-e-invoicing/)
[![SOCPA Compliant](https://img.shields.io/badge/SOCPA-Compliant-blue.svg)](https://biza.app/features/finance-accounting/)

> **Standard bilingual (Arabic / English) Chart of Accounts (COA) template designed for Small and Medium Enterprises (SMEs) in Saudi Arabia.**
> 
> Conforms to Saudi Organization for Certified Public Accountants (**SOCPA**) standards, **ZATCA Phase 2** VAT reporting rules, and **GOSI** payroll requirements.
> 
> Maintained by [**BIZA App**](https://biza.app) — The AI ERP & Cloud Accounting platform for Saudi Arabia & GCC.

---

## Formats Available

- 📄 **JSON:** [`data/chart-of-accounts.json`](data/chart-of-accounts.json) — Ready for software integrations and database seeds.
- 📊 **CSV (Excel):** [`data/chart-of-accounts.csv`](data/chart-of-accounts.csv) — UTF-8 encoded with BOM for direct opening in Microsoft Excel and Google Sheets without Arabic text corruption.

---

## Account Structure Overview

The chart uses a standard 4-digit hierarchical numerical system:

| Range | Category (English) | الفئة (العربية) | Description |
|---|---|---|---|
| **1000–1999** | **Assets** | الأصول | Current assets, bank accounts, inventory, and fixed assets. |
| **2000–2999** | **Liabilities** | الالتزامات | Accounts payable, accrued expenses, 15% VAT output, and EOSB. |
| **3000–3999** | **Equity** | حقوق الملكية | Paid-in capital, statutory reserve, and retained earnings. |
| **4000–4999** | **Revenue** | الإيرادات | Taxable 15% sales, zero-rated exports, and discounts allowed. |
| **5000–5999** | **Cost of Goods Sold (COGS)** | تكلفة المبيعات | Merchandise cost, shipping, freight, and direct labor. |
| **6000–6999** | **Operating Expenses (OPEX)** | المصروفات التشغيلية | Salaries, GOSI contributions, rent, utilities, and depreciation. |

---

## Key Saudi-Specific Compliance Accounts

1. **VAT Handling (ZATCA 15%):**
   - `1060` — Input VAT (Recoverable on purchases and imports).
   - `2040` — Output VAT Payable (15% collected on standard-rated sales).
2. **GOSI & Labor Law:**
   - `2030` — Accrued Salaries & GOSI Payable.
   - `2060` — End of Service Indemnity Provision (مخصص مكافأة نهاية الخدمة).
   - `6020` — GOSI Employer Contribution (حصة صاحب العمل في التأمينات).
3. **Zakat & Tax:**
   - `2070` — Zakat & Corporate Tax Provision (مخصص الزكاة الشرعية وضريبة الدخل).

---

## Looking for Automated Cloud Accounting in Saudi Arabia?

Avoid manual journal entries and spreadsheet reconciliation. 

[**BIZA App (biza.app)**](https://biza.app) comes pre-loaded with this exact Chart of Accounts and automatically handles:
- **Instant Double-Entry Ledger:** Every sale, purchase entry, payment, and receipt automatically posts to the general ledger.
- **ZATCA Phase 2 E-Invoicing:** Generates compliant clearance (B2B) and reporting (B2C) e-invoices with cryptographic stamps.
- **Automated VAT Return:** Real-time generation of the ZATCA VAT declaration form.
- **Multi-Warehouse Inventory & POS:** Live stock valuation (FIFO / Weighted Average) integrated with accounting.

👉 [**Explore BIZA App Finance & Accounting Features**](https://biza.app/features/finance-accounting/)

---

## License

MIT © [BIZA App](https://biza.app)

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  SAUDI_CHART_OF_ACCOUNTS: () => SAUDI_CHART_OF_ACCOUNTS,
  default: () => index_default,
  getAccountByCode: () => getAccountByCode,
  getAccountsByType: () => getAccountsByType,
  getChildAccounts: () => getChildAccounts,
  getPostableAccounts: () => getPostableAccounts
});
module.exports = __toCommonJS(index_exports);
const SAUDI_CHART_OF_ACCOUNTS = [
  { code: "1000", name_en: "Assets", name_ar: "\u0627\u0644\u0623\u0635\u0648\u0644", type: "Asset", parent: null, is_postable: false },
  { code: "1010", name_en: "Cash and Cash Equivalents", name_ar: "\u0627\u0644\u0646\u0642\u062F \u0648\u0645\u0627 \u0641\u064A \u062D\u0643\u0645\u0647", type: "Asset", parent: "1000", is_postable: false },
  { code: "1011", name_en: "Cash on Hand", name_ar: "\u0627\u0644\u0646\u0642\u062F\u064A\u0629 \u0641\u064A \u0627\u0644\u0635\u0646\u062F\u0648\u0642", type: "Asset", parent: "1010", is_postable: true },
  { code: "1012", name_en: "Petty Cash", name_ar: "\u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0646\u0642\u062F\u064A\u0629", type: "Asset", parent: "1010", is_postable: true },
  { code: "1020", name_en: "Bank Accounts", name_ar: "\u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A \u0627\u0644\u0628\u0646\u0643\u064A\u0629", type: "Asset", parent: "1000", is_postable: false },
  { code: "1021", name_en: "Al Rajhi Bank (Operating)", name_ar: "\u0645\u0635\u0631\u0641 \u0627\u0644\u0631\u0627\u062C\u062D\u064A (\u062D\u0633\u0627\u0628 \u062C\u0627\u0631\u064A)", type: "Asset", parent: "1020", is_postable: true },
  { code: "1022", name_en: "SNB Bank (Operating)", name_ar: "\u0627\u0644\u0628\u0646\u0643 \u0627\u0644\u0623\u0647\u0644\u064A \u0627\u0644\u0633\u0639\u0648\u062F\u064A (\u062D\u0633\u0627\u0628 \u062C\u0627\u0631\u064A)", type: "Asset", parent: "1020", is_postable: true },
  { code: "1030", name_en: "Accounts Receivable (Trade Debtors)", name_ar: "\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0645\u062F\u064A\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0648\u0646", type: "Asset", parent: "1000", is_postable: true },
  { code: "1035", name_en: "Allowance for Doubtful Accounts", name_ar: "\u0645\u062E\u0635\u0635 \u0627\u0644\u062F\u064A\u0648\u0646 \u0627\u0644\u0645\u0634\u0643\u0648\u0643 \u0641\u064A \u062A\u062D\u0635\u064A\u0644\u0647\u0627", type: "Asset", parent: "1000", is_postable: true },
  { code: "1040", name_en: "Inventory (Merchandise)", name_ar: "\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u0628\u0636\u0627\u0626\u0639 \u0644\u0644\u0628\u064A\u0639", type: "Asset", parent: "1000", is_postable: true },
  { code: "1045", name_en: "Goods in Transit", name_ar: "\u0628\u0636\u0627\u0639\u0629 \u0628\u0627\u0644\u0637\u0631\u064A\u0642", type: "Asset", parent: "1000", is_postable: true },
  { code: "1050", name_en: "Prepaid Expenses & Advances", name_ar: "\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0645\u062F\u0641\u0648\u0639\u0629 \u0645\u0642\u062F\u0645\u0627\u064B \u0648\u0633\u0644\u0641", type: "Asset", parent: "1000", is_postable: true },
  { code: "1060", name_en: "Input VAT (Recoverable)", name_ar: "\u0636\u0631\u064A\u0628\u0629 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A (\u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F)", type: "Asset", parent: "1000", is_postable: true },
  { code: "1500", name_en: "Fixed Assets (Property, Plant & Equipment)", name_ar: "\u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062B\u0627\u0628\u062A\u0629 (\u0627\u0644\u0645\u0645\u062A\u0644\u0643\u0627\u062A \u0648\u0627\u0644\u0645\u0639\u062F\u0627\u062A)", type: "Asset", parent: "1000", is_postable: false },
  { code: "1510", name_en: "Computers & IT Equipment", name_ar: "\u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u062D\u0627\u0633\u0628 \u0648\u0627\u0644\u062A\u0642\u0646\u064A\u0629", type: "Asset", parent: "1500", is_postable: true },
  { code: "1515", name_en: "Accumulated Depreciation - IT Equipment", name_ar: "\u0645\u062C\u0645\u0639 \u0625\u0647\u0644\u0627\u0643 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u062D\u0627\u0633\u0628", type: "Asset", parent: "1500", is_postable: true },
  { code: "1520", name_en: "Vehicles & Transport", name_ar: "\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0648\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0646\u0642\u0644", type: "Asset", parent: "1500", is_postable: true },
  { code: "1525", name_en: "Accumulated Depreciation - Vehicles", name_ar: "\u0645\u062C\u0645\u0639 \u0625\u0647\u0644\u0627\u0643 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A", type: "Asset", parent: "1500", is_postable: true },
  { code: "2000", name_en: "Liabilities", name_ar: "\u0627\u0644\u0627\u0644\u062A\u0632\u0627\u0645\u0627\u062A", type: "Liability", parent: null, is_postable: false },
  { code: "2010", name_en: "Accounts Payable (Suppliers)", name_ar: "\u0627\u0644\u0645\u0648\u0631\u062F\u0648\u0646 \u0648\u0627\u0644\u062F\u0627\u0626\u0646\u0648\u0646 \u0627\u0644\u062A\u062C\u0627\u0631\u064A\u0648\u0646", type: "Liability", parent: "2000", is_postable: true },
  { code: "2020", name_en: "Accrued Expenses", name_ar: "\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0645\u0633\u062A\u062D\u0642\u0629", type: "Liability", parent: "2000", is_postable: true },
  { code: "2030", name_en: "Accrued Salaries & GOSI Payable", name_ar: "\u0631\u0648\u0627\u062A\u0628 \u0645\u0633\u062A\u062D\u0642\u0629 \u0648\u0645\u0633\u062A\u062D\u0642\u0627\u062A \u0627\u0644\u062A\u0623\u0645\u064A\u0646\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629", type: "Liability", parent: "2000", is_postable: true },
  { code: "2040", name_en: "Output VAT Payable (15%)", name_ar: "\u0636\u0631\u064A\u0628\u0629 \u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062E\u0631\u062C\u0627\u062A (\u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629 15%)", type: "Liability", parent: "2000", is_postable: true },
  { code: "2050", name_en: "Customer Advances / Unearned Revenue", name_ar: "\u062F\u0641\u0639\u0627\u062A \u0645\u0642\u062F\u0645\u0629 \u0645\u0646 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 / \u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0645\u0624\u062C\u0644\u0629", type: "Liability", parent: "2000", is_postable: true },
  { code: "2060", name_en: "End of Service Indemnity (EOSB)", name_ar: "\u0645\u062E\u0635\u0635 \u0645\u0643\u0627\u0641\u0623\u0629 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u062E\u062F\u0645\u0629", type: "Liability", parent: "2000", is_postable: true },
  { code: "2070", name_en: "Zakat & Corporate Tax Provision", name_ar: "\u0645\u062E\u0635\u0635 \u0627\u0644\u0632\u0643\u0627\u0629 \u0648\u0636\u0631\u064A\u0628\u0629 \u0627\u0644\u062F\u062E\u0644", type: "Liability", parent: "2000", is_postable: true },
  { code: "3000", name_en: "Equity", name_ar: "\u062D\u0642\u0648\u0642 \u0627\u0644\u0645\u0644\u0643\u064A\u0629", type: "Equity", parent: null, is_postable: false },
  { code: "3010", name_en: "Share Capital", name_ar: "\u0631\u0623\u0633 \u0627\u0644\u0645\u0627\u0644 \u0627\u0644\u0645\u062F\u0641\u0648\u0639", type: "Equity", parent: "3000", is_postable: true },
  { code: "3020", name_en: "Statutory Reserve", name_ar: "\u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A \u0627\u0644\u0646\u0638\u0627\u0645\u064A", type: "Equity", parent: "3000", is_postable: true },
  { code: "3030", name_en: "Retained Earnings", name_ar: "\u0627\u0644\u0623\u0631\u0628\u0627\u062D (\u0627\u0644\u062E\u0633\u0627\u0626\u0631) \u0627\u0644\u0645\u0628\u0642\u0627\u0629", type: "Equity", parent: "3000", is_postable: true },
  { code: "3040", name_en: "Current Year Net Profit / Loss", name_ar: "\u0635\u0627\u0641\u064A \u0631\u0628\u062D / (\u062E\u0633\u0627\u0631\u0629) \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062D\u0627\u0644\u064A", type: "Equity", parent: "3000", is_postable: true },
  { code: "4000", name_en: "Revenue", name_ar: "\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A", type: "Revenue", parent: null, is_postable: false },
  { code: "4010", name_en: "Sales of Goods (Standard 15% VAT)", name_ar: "\u0645\u0628\u064A\u0639\u0627\u062A \u0627\u0644\u0628\u0636\u0627\u0626\u0639 (\u062E\u0627\u0636\u0639\u0629 \u0644\u0644\u0636\u0631\u064A\u0628\u0629 15%)", type: "Revenue", parent: "4000", is_postable: true },
  { code: "4020", name_en: "Services Revenue (Standard 15% VAT)", name_ar: "\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u062F\u0645\u0627\u062A (\u062E\u0627\u0636\u0639\u0629 \u0644\u0644\u0636\u0631\u064A\u0628\u0629 15%)", type: "Revenue", parent: "4000", is_postable: true },
  { code: "4030", name_en: "Zero-Rated Sales & Exports", name_ar: "\u0645\u0628\u064A\u0639\u0627\u062A \u0628\u0646\u0633\u0628\u0629 \u0627\u0644\u0635\u0641\u0631 \u0648\u0635\u0627\u062F\u0631\u0627\u062A", type: "Revenue", parent: "4000", is_postable: true },
  { code: "4040", name_en: "Sales Returns and Allowances", name_ar: "\u0645\u0631\u062F\u0648\u062F\u0627\u062A \u0648\u0645\u0633\u0645\u0648\u062D\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A", type: "Revenue", parent: "4000", is_postable: true },
  { code: "4050", name_en: "Discounts Allowed", name_ar: "\u0627\u0644\u062E\u0635\u0645 \u0627\u0644\u0645\u0633\u0645\u0648\u062D \u0628\u0647", type: "Revenue", parent: "4000", is_postable: true },
  { code: "5000", name_en: "Cost of Goods Sold (COGS)", name_ar: "\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0628\u0636\u0627\u0639\u0629 \u0627\u0644\u0645\u0628\u0627\u0639\u0629", type: "Expense", parent: null, is_postable: false },
  { code: "5010", name_en: "Cost of Merchandise Sold", name_ar: "\u062A\u0643\u0644\u0641\u0629 \u0627\u0644\u0628\u0636\u0627\u0639\u0629 \u0627\u0644\u0645\u0628\u064A\u0639\u0629", type: "Expense", parent: "5000", is_postable: true },
  { code: "5020", name_en: "Freight In & Customs Clearance", name_ar: "\u0627\u0644\u0634\u062D\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A \u0648\u062A\u0643\u0627\u0644\u064A\u0641 \u0627\u0644\u062A\u062E\u0644\u064A\u0635 \u0627\u0644\u062C\u0645\u0631\u0643\u064A", type: "Expense", parent: "5000", is_postable: true },
  { code: "5030", name_en: "Direct Labor", name_ar: "\u0623\u062C\u0648\u0631 \u0627\u0644\u0639\u0645\u0627\u0644\u0629 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629", type: "Expense", parent: "5000", is_postable: true },
  { code: "5040", name_en: "Purchase Returns & Discounts", name_ar: "\u0645\u0631\u062F\u0648\u062F\u0627\u062A \u0648\u062E\u0635\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u0634\u062A\u0631\u064A\u0627\u062A", type: "Expense", parent: "5000", is_postable: true },
  { code: "6000", name_en: "Operating Expenses (OPEX)", name_ar: "\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u062A\u0634\u063A\u064A\u0644\u064A\u0629 \u0648\u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629", type: "Expense", parent: null, is_postable: false },
  { code: "6010", name_en: "Salaries & Wages", name_ar: "\u0627\u0644\u0631\u0648\u0627\u062A\u0628 \u0648\u0627\u0644\u0623\u062C\u0648\u0631", type: "Expense", parent: "6000", is_postable: true },
  { code: "6020", name_en: "GOSI Employer Contribution", name_ar: "\u062D\u0635\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0641\u064A \u0627\u0644\u062A\u0623\u0645\u064A\u0646\u0627\u062A \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u0629 (GOSI)", type: "Expense", parent: "6000", is_postable: true },
  { code: "6030", name_en: "Rent & Facilities Expense", name_ar: "\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u0625\u064A\u062C\u0627\u0631 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642", type: "Expense", parent: "6000", is_postable: true },
  { code: "6040", name_en: "Utilities (Electricity, Water)", name_ar: "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621 \u0648\u0627\u0644\u0645\u064A\u0627\u0647 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642", type: "Expense", parent: "6000", is_postable: true },
  { code: "6050", name_en: "Government & Iqama Fees", name_ar: "\u0631\u0633\u0648\u0645 \u062D\u0643\u0648\u0645\u064A\u0629 \u0648\u0631\u062E\u0635 \u0639\u0645\u0644 \u0648\u0625\u0642\u0627\u0645\u0627\u062A", type: "Expense", parent: "6000", is_postable: true },
  { code: "6060", name_en: "Marketing & Advertising", name_ar: "\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0648\u0627\u0644\u062F\u0639\u0627\u064A\u0629 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0646", type: "Expense", parent: "6000", is_postable: true },
  { code: "6070", name_en: "Software Subscriptions & Cloud Hosting", name_ar: "\u0627\u0634\u062A\u0631\u0627\u0643\u0627\u062A \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0648\u0627\u0644\u0627\u0633\u062A\u0636\u0627\u0641\u0629 \u0627\u0644\u0633\u062D\u0627\u0628\u064A\u0629", type: "Expense", parent: "6000", is_postable: true },
  { code: "6080", name_en: "Depreciation Expense", name_ar: "\u0645\u0635\u0631\u0648\u0641 \u0627\u0644\u0625\u0647\u0644\u0627\u0643", type: "Expense", parent: "6000", is_postable: true },
  { code: "6090", name_en: "Bank Charges & POS Fees", name_ar: "\u0631\u0633\u0648\u0645 \u0628\u0646\u0643\u064A\u0629 \u0648\u0639\u0645\u0648\u0644\u0627\u062A \u0646\u0642\u0627\u0637 \u0627\u0644\u0628\u064A\u0639 (\u0645\u062F\u0649)", type: "Expense", parent: "6000", is_postable: true }
];
function getAccountByCode(code) {
  return SAUDI_CHART_OF_ACCOUNTS.find((a) => a.code === code);
}
function getAccountsByType(type) {
  return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.type === type);
}
function getPostableAccounts() {
  return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.is_postable);
}
function getChildAccounts(parentCode) {
  return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.parent === parentCode);
}
var index_default = SAUDI_CHART_OF_ACCOUNTS;

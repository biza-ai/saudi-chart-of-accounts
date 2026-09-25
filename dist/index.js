export const SAUDI_CHART_OF_ACCOUNTS = [
    { code: '1000', name_en: 'Assets', name_ar: 'الأصول', type: 'Asset', parent: null, is_postable: false },
    { code: '1010', name_en: 'Cash and Cash Equivalents', name_ar: 'النقد وما في حكمه', type: 'Asset', parent: '1000', is_postable: false },
    { code: '1011', name_en: 'Cash on Hand', name_ar: 'النقدية في الصندوق', type: 'Asset', parent: '1010', is_postable: true },
    { code: '1012', name_en: 'Petty Cash', name_ar: 'العهدة النقدية', type: 'Asset', parent: '1010', is_postable: true },
    { code: '1020', name_en: 'Bank Accounts', name_ar: 'الحسابات البنكية', type: 'Asset', parent: '1000', is_postable: false },
    { code: '1021', name_en: 'Al Rajhi Bank (Operating)', name_ar: 'مصرف الراجحي (حساب جاري)', type: 'Asset', parent: '1020', is_postable: true },
    { code: '1022', name_en: 'SNB Bank (Operating)', name_ar: 'البنك الأهلي السعودي (حساب جاري)', type: 'Asset', parent: '1020', is_postable: true },
    { code: '1030', name_en: 'Accounts Receivable (Trade Debtors)', name_ar: 'العملاء والمدينون التجاريون', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1035', name_en: 'Allowance for Doubtful Accounts', name_ar: 'مخصص الديون المشكوك في تحصيلها', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1040', name_en: 'Inventory (Merchandise)', name_ar: 'مخزون البضائع للبيع', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1045', name_en: 'Goods in Transit', name_ar: 'بضاعة بالطريق', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1050', name_en: 'Prepaid Expenses & Advances', name_ar: 'مصروفات مدفوعة مقدماً وسلف', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1060', name_en: 'Input VAT (Recoverable)', name_ar: 'ضريبة القيمة المضافة المدخلات (القابلة للاسترداد)', type: 'Asset', parent: '1000', is_postable: true },
    { code: '1500', name_en: 'Fixed Assets (Property, Plant & Equipment)', name_ar: 'الأصول الثابتة (الممتلكات والمعدات)', type: 'Asset', parent: '1000', is_postable: false },
    { code: '1510', name_en: 'Computers & IT Equipment', name_ar: 'أجهزة الحاسب والتقنية', type: 'Asset', parent: '1500', is_postable: true },
    { code: '1515', name_en: 'Accumulated Depreciation - IT Equipment', name_ar: 'مجمع إهلاك أجهزة الحاسب', type: 'Asset', parent: '1500', is_postable: true },
    { code: '1520', name_en: 'Vehicles & Transport', name_ar: 'السيارات ووسائل النقل', type: 'Asset', parent: '1500', is_postable: true },
    { code: '1525', name_en: 'Accumulated Depreciation - Vehicles', name_ar: 'مجمع إهلاك السيارات', type: 'Asset', parent: '1500', is_postable: true },
    { code: '2000', name_en: 'Liabilities', name_ar: 'الالتزامات', type: 'Liability', parent: null, is_postable: false },
    { code: '2010', name_en: 'Accounts Payable (Suppliers)', name_ar: 'الموردون والدائنون التجاريون', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2020', name_en: 'Accrued Expenses', name_ar: 'مصروفات مستحقة', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2030', name_en: 'Accrued Salaries & GOSI Payable', name_ar: 'رواتب مستحقة ومستحقات التأمينات الاجتماعية', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2040', name_en: 'Output VAT Payable (15%)', name_ar: 'ضريبة القيمة المضافة المخرجات (المستحقة 15%)', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2050', name_en: 'Customer Advances / Unearned Revenue', name_ar: 'دفعات مقدمة من العملاء / إيرادات مؤجلة', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2060', name_en: 'End of Service Indemnity (EOSB)', name_ar: 'مخصص مكافأة نهاية الخدمة', type: 'Liability', parent: '2000', is_postable: true },
    { code: '2070', name_en: 'Zakat & Corporate Tax Provision', name_ar: 'مخصص الزكاة وضريبة الدخل', type: 'Liability', parent: '2000', is_postable: true },
    { code: '3000', name_en: 'Equity', name_ar: 'حقوق الملكية', type: 'Equity', parent: null, is_postable: false },
    { code: '3010', name_en: 'Share Capital', name_ar: 'رأس المال المدفوع', type: 'Equity', parent: '3000', is_postable: true },
    { code: '3020', name_en: 'Statutory Reserve', name_ar: 'الاحتياطي النظامي', type: 'Equity', parent: '3000', is_postable: true },
    { code: '3030', name_en: 'Retained Earnings', name_ar: 'الأرباح (الخسائر) المبقاة', type: 'Equity', parent: '3000', is_postable: true },
    { code: '3040', name_en: 'Current Year Net Profit / Loss', name_ar: 'صافي ربح / (خسارة) العام الحالي', type: 'Equity', parent: '3000', is_postable: true },
    { code: '4000', name_en: 'Revenue', name_ar: 'الإيرادات', type: 'Revenue', parent: null, is_postable: false },
    { code: '4010', name_en: 'Sales of Goods (Standard 15% VAT)', name_ar: 'مبيعات البضائع (خاضعة للضريبة 15%)', type: 'Revenue', parent: '4000', is_postable: true },
    { code: '4020', name_en: 'Services Revenue (Standard 15% VAT)', name_ar: 'إيرادات الخدمات (خاضعة للضريبة 15%)', type: 'Revenue', parent: '4000', is_postable: true },
    { code: '4030', name_en: 'Zero-Rated Sales & Exports', name_ar: 'مبيعات بنسبة الصفر وصادرات', type: 'Revenue', parent: '4000', is_postable: true },
    { code: '4040', name_en: 'Sales Returns and Allowances', name_ar: 'مردودات ومسموحات المبيعات', type: 'Revenue', parent: '4000', is_postable: true },
    { code: '4050', name_en: 'Discounts Allowed', name_ar: 'الخصم المسموح به', type: 'Revenue', parent: '4000', is_postable: true },
    { code: '5000', name_en: 'Cost of Goods Sold (COGS)', name_ar: 'تكلفة البضاعة المباعة', type: 'Expense', parent: null, is_postable: false },
    { code: '5010', name_en: 'Cost of Merchandise Sold', name_ar: 'تكلفة البضاعة المبيعة', type: 'Expense', parent: '5000', is_postable: true },
    { code: '5020', name_en: 'Freight In & Customs Clearance', name_ar: 'الشحن الداخلي وتكاليف التخليص الجمركي', type: 'Expense', parent: '5000', is_postable: true },
    { code: '5030', name_en: 'Direct Labor', name_ar: 'أجور العمالة المباشرة', type: 'Expense', parent: '5000', is_postable: true },
    { code: '5040', name_en: 'Purchase Returns & Discounts', name_ar: 'مردودات وخصومات المشتريات', type: 'Expense', parent: '5000', is_postable: true },
    { code: '6000', name_en: 'Operating Expenses (OPEX)', name_ar: 'المصروفات التشغيلية والعمومية', type: 'Expense', parent: null, is_postable: false },
    { code: '6010', name_en: 'Salaries & Wages', name_ar: 'الرواتب والأجور', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6020', name_en: 'GOSI Employer Contribution', name_ar: 'حصة المنشأة في التأمينات الاجتماعية (GOSI)', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6030', name_en: 'Rent & Facilities Expense', name_ar: 'مصروفات الإيجار والمرافق', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6040', name_en: 'Utilities (Electricity, Water)', name_ar: 'الكهرباء والمياه والمرافق', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6050', name_en: 'Government & Iqama Fees', name_ar: 'رسوم حكومية ورخص عمل وإقامات', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6060', name_en: 'Marketing & Advertising', name_ar: 'التسويق والدعاية والإعلان', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6070', name_en: 'Software Subscriptions & Cloud Hosting', name_ar: 'اشتراكات البرامج والاستضافة السحابية', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6080', name_en: 'Depreciation Expense', name_ar: 'مصروف الإهلاك', type: 'Expense', parent: '6000', is_postable: true },
    { code: '6090', name_en: 'Bank Charges & POS Fees', name_ar: 'رسوم بنكية وعمولات نقاط البيع (مدى)', type: 'Expense', parent: '6000', is_postable: true },
];
export function getAccountByCode(code) {
    return SAUDI_CHART_OF_ACCOUNTS.find((a) => a.code === code);
}
export function getAccountsByType(type) {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.type === type);
}
export function getPostableAccounts() {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.is_postable);
}
export function getChildAccounts(parentCode) {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.parent === parentCode);
}
export default SAUDI_CHART_OF_ACCOUNTS;

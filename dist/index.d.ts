export type AccountType = 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
export interface Account {
    code: string;
    name_en: string;
    name_ar: string;
    type: AccountType;
    parent: string | null;
    is_postable: boolean;
}
export declare const SAUDI_CHART_OF_ACCOUNTS: Account[];
export declare function getAccountByCode(code: string): Account | undefined;
export declare function getAccountsByType(type: AccountType): Account[];
export declare function getPostableAccounts(): Account[];
export declare function getChildAccounts(parentCode: string): Account[];
export default SAUDI_CHART_OF_ACCOUNTS;

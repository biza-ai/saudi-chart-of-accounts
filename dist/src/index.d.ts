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
/**
 * Find an account by its unique 4-digit code.
 */
export declare function getAccountByCode(code: string): Account | undefined;
/**
 * Filter accounts by category (Asset, Liability, Equity, Revenue, Expense).
 */
export declare function getAccountsByType(type: AccountType): Account[];
/**
 * Return only postable accounts (leaf accounts that can receive journal entries).
 */
export declare function getPostableAccounts(): Account[];
/**
 * Return accounts that belong to a specific parent header.
 */
export declare function getChildAccounts(parentCode: string): Account[];
export default SAUDI_CHART_OF_ACCOUNTS;

import rawAccounts from '../data/chart-of-accounts.json' with { type: 'json' };
export const SAUDI_CHART_OF_ACCOUNTS = rawAccounts;
/**
 * Find an account by its unique 4-digit code.
 */
export function getAccountByCode(code) {
    return SAUDI_CHART_OF_ACCOUNTS.find((a) => a.code === code);
}
/**
 * Filter accounts by category (Asset, Liability, Equity, Revenue, Expense).
 */
export function getAccountsByType(type) {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.type === type);
}
/**
 * Return only postable accounts (leaf accounts that can receive journal entries).
 */
export function getPostableAccounts() {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.is_postable);
}
/**
 * Return accounts that belong to a specific parent header.
 */
export function getChildAccounts(parentCode) {
    return SAUDI_CHART_OF_ACCOUNTS.filter((a) => a.parent === parentCode);
}
export default SAUDI_CHART_OF_ACCOUNTS;

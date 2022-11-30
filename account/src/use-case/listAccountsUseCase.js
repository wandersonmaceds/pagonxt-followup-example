import { listAccounts } from '../repositories/accountRepository.js';

export async function listAccountsUseCase() {
    const accounts = await listAccounts();

    return accounts;
}
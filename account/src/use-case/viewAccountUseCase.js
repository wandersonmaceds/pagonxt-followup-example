import { listAccounts } from '../repositories/accountRepository.js';

export async function viewAccountUseCase(id) {
    const accounts = await listAccounts();
    const account = accounts.find(savedAccount => savedAccount._id.toString() === id);
    return account;
}
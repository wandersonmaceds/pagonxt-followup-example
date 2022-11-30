import { existsAccountByEmail, deleteAccount } from "../repositories/accountRepository.js";

export async function deleteAccountUseCase(email) {
    const accountExists = await existsAccountByEmail(email);

    if(!accountExists) {
        console.error('Account cannot be removed. It not exists', email);
        return;
    }

    await deleteAccount(email);


}
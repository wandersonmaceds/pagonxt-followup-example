import { existsAccountById, deleteAccountById } from "../repositories/accountRepository.js";

export async function deleteAccountUseCase(id) {
    const accountExists = await existsAccountById(id);

    if(!accountExists) {
        console.error('Account cannot be removed. It not exists', id);
        throw Error('Invalid account id');
    }

    await deleteAccountById(id);
}
import { existsAccountById, findAccountById, updateAccount } from "../repositories/accountRepository.js";

export async function updateAccountUseCase(id, accountData) {

    const accountExists = await existsAccountById(id);

    if(!accountExists) {
        console.error('Account cannot be updated. It not exists!', id);
        throw new Error('Invalid account id');
    }

    const account = await findAccountById(id);
    
    delete accountData._id; //não sei se recomendo.
    delete accountData.createdDate; //não sei se recomendo.

    const accountUpdated = Object.assign(account, accountData);

    await updateAccount(accountUpdated);

    return accountUpdated;
}
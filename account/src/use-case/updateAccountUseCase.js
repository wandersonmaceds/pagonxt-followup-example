import { findAccountByEmail, existsAccountByEmail, updateAccount } from "../repositories/accountRepository.js";

export async function updateAccountUseCase(email, accountData) {

    const accountExists = await existsAccountByEmail(email);

    if(!accountExists) {
        console.error('Account cannot be updated. It not exists!', email);
        return;
    }

    const account = await findAccountByEmail(email);
    delete accountData._id; //não sei se recomendo.

    const accountUpdated = Object.assign(account, accountData);

    await updateAccount(accountUpdated);
}
import { saveAccount, existsAccountByEmail } from '../repositories/accountRepository.js';

export async function createAccountUseCase(name, email, password) {

    const accountAlreadyExists = await existsAccountByEmail(email);
    
    if(accountAlreadyExists) {
        console.error('Account already exists', email);
        return;
    }

    const createdDate = new Date().toISOString().substring(0, 10);

    const user = {
        name,
        email,
        password,
        createdDate
    }

    saveAccount(user);
}
import { listAccountsUseCase } from '../../src/use-case/listAccountsUseCase.js';
import { createAccountUseCase } from '../../src/use-case/createAccountUseCase.js';
import { updateAccountUseCase } from '../../src/use-case/updateAccountUseCase.js';
import { deleteAccountUseCase } from '../../src/use-case/deleteAccountUseCase.js';

let accounts = null;

console.log('Creating account ======= ')
await createAccountUseCase('Bruna', 'bruna@mail.com', 'senhamuitodificil');
accounts = await listAccountsUseCase();
console.log(accounts);

console.log('Updating account ======= ')
await updateAccountUseCase('bruna@mail.com', { password: 'EssaNinguemAdivinha'});
accounts = await listAccountsUseCase();
console.log(accounts);

console.log('Deleting account ======= ')
await deleteAccountUseCase('bruna@mail.com');
accounts = await listAccountsUseCase();
console.log(accounts);
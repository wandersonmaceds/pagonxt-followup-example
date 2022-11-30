import { createAccountUseCase } from '../../src/use-case/createAccountUseCase.js';

const user = createAccountUseCase('Livia', 'livia@mail.com', 'liviapass');

console.log(user);
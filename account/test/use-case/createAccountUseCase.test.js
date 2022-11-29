import { createAccountUseCase } from '../../src/use-case/createAccountUseCase.js';

const user = createAccountUseCase('Wands', 'wands@mail.com', 'wandstech');

console.log(user);
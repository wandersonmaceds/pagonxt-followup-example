const contas = [];

// salvar uma conta.
function saveAccount(account) {
    const accountAlreadyExists = accountExists(account.email);
    if(accountAlreadyExists) {
        return 'Account already exists';
    }

    contas.push(account);
    return account;
}

// lista todas as contas
function listAccounts() {
    return contas;
}

// atualiza uma conta
function updateAccount(email, accountData) {
    const accountAlreadyExists = accountExists(email);
    if(!accountAlreadyExists) {
        return 'Account does not exists';
    }

    const account = findAccountByEmail(email);
    const updatedAccount = { ...account, ...accountData };

    const accountIndex = contas.findIndex(conta => conta.email === email);
    contas[accountIndex] = updatedAccount;

    return updatedAccount;
}
// remove uma conta

function deleteAccount(email) {
    const accountAlreadyExists = accountExists(email);
    if(!accountAlreadyExists) {
        return 'Account does not exists';
    }

    const accountIndex = contas.findIndex(conta => conta.email === email);

    const deletedAccount = contas.splice(accountIndex, 1);

    return deletedAccount;
}


// funções auxiliares
function accountExists(email) {
    const account = findAccountByEmail(email);
    return account !== undefined;
}

function findAccountByEmail(email) {
    return contas.find(conta => conta.email === email);
}





// testes 

const conta = { name: 'Bruna', email: 'bruna@mail.com', password: '12312345' };

console.log(saveAccount(conta))
console.log(saveAccount(conta))
console.log(listAccounts())

console.log(updateAccount('bruna@mail.com', { password: 'dificilDemais'}))

console.log(listAccounts())

console.log(deleteAccount('bruna@mail.com'))

console.log(listAccounts())
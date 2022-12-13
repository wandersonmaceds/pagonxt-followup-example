import { Router } from 'express';

import { createAccountUseCase } from './use-case/createAccountUseCase.js';
import { deleteAccountUseCase } from './use-case/deleteAccountUseCase.js';
import { listAccountsUseCase } from './use-case/listAccountsUseCase.js'
import { updateAccountUseCase } from './use-case/updateAccountUseCase.js';
import { viewAccountUseCase } from './use-case/viewAccountUseCase.js';

const router = new Router();

router.post('/accounts', function(request, response) {
    const { name, email, password } = request.body;
    createAccountUseCase(name, email, password)
        .then(createdAccount => {
            response.status(201).json(createdAccount)
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        }); 
});

router.get('/accounts', function(request, response) {
    listAccountsUseCase().then(accounts => {
        response.json(accounts);
    });
});

router.get('/accounts/:id', function(request, response) {
    const accountId = request.params.id;
    viewAccountUseCase(accountId).then(account => {
        response.json(account);
    });
});

router.put('/accounts/:id', function(request, response) {
    const accountId = request.params.id;
    const accountData = request.body;

    updateAccountUseCase(accountId, accountData)
        .then(updatedAccount => {
            response.json(updatedAccount);
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        });
});

router.delete('/accounts/:id', function(request, response) {
    const accountId = request.params.id;
    deleteAccountUseCase(accountId)
        .then(() => {
            response.status(204).send();
        })
        .catch(error => {
            response.status(400).json({ status: 'error', message: error.message });
        });
});

export { router };
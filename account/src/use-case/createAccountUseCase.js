
export function createAccountUseCase(name, email, password) {
    /** TODO: 
     * 1. Conectar com o mongodb;
     * 2. Inserir a conta no banco de dados do mongodb;
     * 3. Listar as contas;
     * 4. Atualizar uma conta;
     * 5. Remover uma conta;
     */
    const createdDate = new Date().toISOString().substring(0, 10);

    return {
        name,
        email,
        password,
        createdDate
    }
}
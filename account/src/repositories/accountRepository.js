import { MongoClient } from 'mongodb';

async function databaseConnect() {
    const connectionURL = 'mongodb://mongouser:mongopass@account_db:27017';
    const connection = new MongoClient(connectionURL);
    await connection.connect();

    const database = connection.db('accounts');
    return database.collection('users');
}

export async function saveAccount(account) {
    const collection = await databaseConnect();
    await collection.insertOne(account);
}

export async function listAccounts() {
    const collection = await databaseConnect();
    const accounts = collection.find().toArray();

    return accounts;
}

export async function findAccountByEmail(email) {
    const collection = await databaseConnect();
    const account = collection.findOne({ email });

    return account;
}

export async function existsAccountByEmail(email) {
    const account = await findAccountByEmail(email);

    return account !== null;
}

export async function updateAccount(accountToUpdate) {
    const { _id, ...fieldsToUpdate } = accountToUpdate;
    const collection = await databaseConnect();
    await collection.updateOne({ _id }, { $set: fieldsToUpdate });
}

export async function deleteAccount(email) {
    const collection = await databaseConnect();
    await collection.deleteOne({ email });
}
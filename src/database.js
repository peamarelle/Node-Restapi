import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb+srv://patricio_db:pato35539460@node-restapi.empoe.mongodb.net/node-restapi?retryWrites=true&w=majority', { useUnifiedTopology: true });
        const db = client.db('node-restapi');
        console.log('DB conected');
        return db;
    } catch(e) {
        console.log(e);
    }
}
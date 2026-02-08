//conectando com o banco de dados MongoDB

const mongoose = require('mongoose');

const conncetToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@nodejs.clcyuua.mongodb.net/?appName=nodejs`)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log('Erro ao conectar', err));
}

module.exports = conncetToDatabase;
const mongoose = require('mongoose')
require('dotenv').config()

const conectarDB = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos Conectados a la base de datos'))
    .catch((err) => console.log(err))
}

module.exports = conectarDB


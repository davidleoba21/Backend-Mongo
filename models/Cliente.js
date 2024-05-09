const mongoose = require('mongoose')


//El modelo que se crea aqui debe ser igual al de la Base de Datos
const clienteSchema = mongoose.Schema({
    nombres:{
        type: String,
        require : true
    },
    apellidos:{
        type: String,
        require : true
    },
    documento:{
        type: String,
        require : true
    },
    correo:{
        type: String,
        require : true
    },
    telefono:{
        type: String,
        require : true
    },
    direccion:{
        type: String,
        require : true
    },
},{versionKey:false})

module.exports = mongoose.model('Cliente', clienteSchema)
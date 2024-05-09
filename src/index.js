
// mongodb+srv://davidbautistabernal:WXaE9JrH0DDDONPB@cluster0.h7mdkuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// davidbautistabernal
// WXaE9JrH0DDDONPB

//Creamos nuestro servidor 
const express = require('express')
const cors = require('cors')
const conectarDB = require('../config/db')
const app = express()

//Enlazamos la conexion a la base de datos.

conectarDB()
app.use(cors())

app.use(express.json())
app.use('/api/clientes', require('../routes/rutas'))

//Definimos una ruta
app.get('/', (req, res) => {
    res.send('Estamos Conectados a la web')
})

app.listen(5500, () => {
    console.log('el Servidor esta conectado http://127.0.0.1:5500')
})

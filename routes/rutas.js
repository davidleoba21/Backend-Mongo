const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteCrontoller')


//RUTAS DEL CRUD -- CLIENTE

router.post('/', clienteController.agregarClientes)
router.get('/', clienteController.buscarClientes)
router.get('/:id', clienteController.buscarCliente)
router.delete('/:id', clienteController.eliminarCliente)
router.put('/:id', clienteController.actualizarCliente)


module.exports = router
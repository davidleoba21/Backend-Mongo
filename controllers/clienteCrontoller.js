const Cliente = require('../models/Cliente')


//funcion para mostrar todos los Clientes
exports.buscarClientes = async(req, res) => {
    try {
        const cliente = await Cliente.find()
        res.json(cliente)        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al mostrar los clientes')        
    }
}

//funcion agregar clientes
exports.agregarClientes = async(req, res) => {
    try {
        let cliente
        cliente = new Cliente(req.body)
        await cliente.save()
        res.send(cliente)
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente')
    }
} 

//Funcion buscar cliente por ID
exports.buscarCliente = async(req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id)
        if (!cliente) {
            res.status(404).json({msg:"No se encontro el cliente"})
            return
        }
        res.send(cliente)       
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al buscar el cliente')        
    }
}

//Funcion eliminar cliente por ID
exports.eliminarCliente = async(req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id)
        if (!cliente) {
            res.status(404).json({msg:"No se encontro el cliente"})
            return
        }
        await Cliente.findOneAndDelete({_id:req.params.id})
        res.json({msg:"el cliente fue eliminado"})
        return          
    } catch (error) {
        console.log(error)
        res.status(500).send('Error al eliminar el cliente')        
    }
}

//Funcion para actualizar un cliente
exports.actualizarCliente = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id)
        if(!cliente){
            res.status(404).json({msg:"No se encontro el cliente"})
        } else {
            cliente.nombres = nombres
            cliente.apellidos = apellidos
            cliente.documento = documento
            cliente.correo = correo
            cliente.telefono = telefono
            cliente.direccion = direccion
            cliente = await Cliente.findOneAndUpdate({_id:req.params.id}, cliente, {new:true})
            res.json(cliente)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Error al actualizar el cliente')
        
    }
}
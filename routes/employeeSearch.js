const express = require('express')
const employeeSearch = express.Router()
const db = require('../config/database')

//Obtener un empleado por nombre y buscar sus parecidos
employeeSearch.get('/:name([A-Za-z]+)', async(req,res,next) => {
    console.log("Entrando al get")
    const name = req.params.name
    const emply = await db.query(`SELECT * FROM empleados WHERE nombreEmpleado LIKE  '%${name}%' `)
    let pk2 = emply;
    if (pk2.length > 0){
        return res.status(200).json({code:200,message: emply})
    }
    console.log("Error en este get")
    return res.status(404).send("Empleado no encontrado")
})
module.exports = employeeSearch
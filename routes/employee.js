const express = require('express')
const employee = express.Router()
const db = require('../config/database')

//Insertar empleados a la base de datos
employee.post('/',async(req,res,next)=>{
    const {idEmpleado,nombreEmpleado,apellidosEmpleado,telefonoEmpleado,correoEmpleado,direccionEmpleado}=req.body
        if (idEmpleado&&nombreEmpleado&&apellidosEmpleado&&telefonoEmpleado&&correoEmpleado&&direccionEmpleado){
            let query = `INSERT INTO empleados(idEmpleado,nombreEmpleado,apellidosEmpleado, telefonoEmpleado, correoEmpleado, direccionEmpleado) VALUES (${idEmpleado},'${nombreEmpleado}','${apellidosEmpleado}','${telefonoEmpleado}','${correoEmpleado}','${direccionEmpleado}')`
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(201).json({code:200, message: 'Empleado insertado correctamente'})
        }
        return res.status(500).json({code: 500, message:'Ocurrio un error'})
    }
    return res.status(500).json({code:500,message:'Campos incompletos'})
})
//Eliminar empleados de la base de datos por id
employee.delete ("/:id([0-9]{1,3})",async(req,res,next)=>{
    const query = `DELETE FROM empleados WHERE idEmpleado =${req.params.id}`
    const rows = await db.query(query)
    if (rows.affectedRows == 1) return res.status(200).json({code: 200, message: "Empleado borrado correctamente"})
    return res.status(404).json({code:404, message: "Empleado no encontrado"})
})
//Obtener todos los empleados de la base de datos
employee.get("/",async(req,res,next)=>{
    const emply = await db.query('SELECT * FROM empleados')
    return res.status(200).json({code: 200, message: emply})
})

//Cambiar los datos sobre un empleado buscando por id
employee.put("/:id([0-9]{1,3})",async(req,res,next)=>{
    const {nombreEmpleado,apellidosEmpleado,telefonoEmpleado,correoEmpleado,direccionEmpleado} = req.body
    if (nombreEmpleado&&apellidosEmpleado&&telefonoEmpleado&&correoEmpleado&&direccionEmpleado){
        let query = `UPDATE empleados SET nombreEmpleado='${nombreEmpleado}',apellidosEmpleado='${apellidosEmpleado}',`
        query += `telefonoEmpleado='${telefonoEmpleado}',correoEmpleado='${correoEmpleado}',direccionEmpleado='${direccionEmpleado}' WHERE idEmpleado=${req.params.id};`        
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(200).json({code:200, message: 'Empleado actualizado correctamente'})
    }
    return res.status(500).json({code: 500, message:'Ocurrio un error'})
}
return res.status(500).json({code:500,message:'Campos incompletos'})
})

//Obtener empleados de la base de datos por nombre
employee.get('/:name([A-Za-z]+)', async(req,res,next) => {
    const name = req.params.name
    const emply = await db.query(`SELECT * FROM empleados WHERE nombreEmpleado = \'${name}\'`)
    let pk2 = emply;
    if (pk2.length > 0){
        return res.status(200).json({code:200,message: emply})
    }
    return res.status(404).send("Empleado no encontrado")
})
module.exports = employee


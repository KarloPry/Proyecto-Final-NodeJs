const express = require('express')
const jwt = require('jsonwebtoken')
const user = express.Router();
const db = require('../config/database')

user.post("/signin", async(req, res, next) => {
    const {nombreUsuario,correoUsuario,contraseñaUsuario} = req.body

    if(nombreUsuario && correoUsuario && contraseñaUsuario){
        const query = `INSERT INTO usuarios(nombreUsuario, correoUsuario, contraseñaUsuario) VALUES ('${nombreUsuario}','${correoUsuario}','${contraseñaUsuario}')`
        const rows = await db.query(query);
        
        if (rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Usuario registrado correctamente"})
        }
        return res.status(200).json({code: 401,message: "Usuario y/o contraseña incorrecto"})
    }
    return res.status(500).json({code:500,message:"Campos incompletos"})
})

user.post("/login",async (req,res,next)=>{ //autenticacion de usuarios en el login
    const{correoUsuario,contraseñaUsuario} = req.body
    const query=`SELECT * FROM usuarios WHERE correoUsuario='${correoUsuario}' AND contraseñaUsuario = '${contraseñaUsuario}';`
    const rows = await db.query(query)

    if(correoUsuario && contraseñaUsuario){
        if(rows.length==1) {
            const token = jwt.sign({
                idUsuario: rows[0].idUsuario,
                correoUsuario: rows[0].correoUsuario
            },"debugkey")
            return res.status(200).json({code:200,message:token})
        }
        else{
            return res.status(200).json({code:401, message: "Usuario y/o contraseña incorrecto"})
        }
    }
    return res.status(500).json({code:500,message:"Campos incompletos"})
})

user.get("/",async(req,res,next)=>{ //muestra los usuarios registrados
    const query = 'SELECT * FROM usuarios'
    const rows = await db.query

    return res.status(200).json({code: 200, message: rows})
})

module.exports = user
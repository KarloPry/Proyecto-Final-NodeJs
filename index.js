//Dependencies
const express = require('express')
const morgan = require('morgan')
const app = express()
//Routers
const employee = require('./routes/employee')
const user = require('./routes/user')
//Middleware
const auth = require('./middleware/auth')
const notFound = require('./middleware/notFound')


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running...")
})
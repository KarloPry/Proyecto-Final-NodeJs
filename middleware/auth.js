//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk3NzMwMDR9.NByIOV4CEh23M94rLan68pQCSEjiQsfC6WppH_dt54g
const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,"debugkey");
        req.user = decoded;
        next();
    }
    catch(error){
        res.status(401).json({code:401,message:"No tienes permiso :("})
    }
}
const mongoose = require('mongoose')


const validateSignIn=(req,res,next)=>{
    const {email, password}=req.body;
    if(!email || !password){
        return res.status(409).json({message :"email and password are reqiured"})
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (typeof email !== 'string' || email.trim() == '' || !emailRegex.test(email)) {
        return res.status(400).json({ message: "invalid email" })
    }
     if (typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ message: "invalid password" })
    }
    next();

}



module.exports={
    validateSignIn

}
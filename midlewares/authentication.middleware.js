const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

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

const isAuthenticated=(req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message:"no token provided"});
    }

    const SECRET_KEY = process.env.SECRET_KEY;
    jwt.verify(token,SECRET_KEY,(err, decoded)=>{
        if(err){
            return res.status(401).json({message:"invalid token"});
        }
        req.user = decoded;
        next();
    });
}

const isAdmin=(req,res,next)=>{
    if(req.user.role !== 'ADMIN'){
        return res.status(403).json({message:"access denied only Admin ."})
    }
    next();
}

module.exports={
    validateSignIn,
    isAuthenticated,
    isAdmin
}
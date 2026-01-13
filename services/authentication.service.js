const Person = require ('../models/person.model');

const signUpService = async(data)=>{
         const newUser = new Person(data);
    
return await newUser.save();
}

module.exports={
    signUpService
}
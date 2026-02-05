const Person =require('../models/person.model');

const signUpService=async(data)=>{
    const person=new Person(data);
    return await person.save();
}

module.exports={
    signUpService
}

const Person = require('../models/person.model')

const getPersonByEmailService = async (email) => {
    return await Person.findOne({ email });
}

const createPersonService = async (data) => {
    const person = new Person(data);
    return await person.save();
}

const getAllpersonservice = async()=>{
    return await Person.find({});
}

const getPersonByIdservice = async(id)=>{
     return await Person.findById(id);
}

const deletePersonByIdService = async(id)=>{
    return Person.findByIdAndDelete(id);

}

const updatePersonByIdService= async(id, data)=>{
    return await Person.findByIdAndUpdate(id,data,{new:true})
}


// UpdatePersonByID



module.exports = {
    createPersonService,
    getPersonByEmailService,
    getAllpersonservice,
    getPersonByIdservice,
    deletePersonByIdService,
    updatePersonByIdService
    
};
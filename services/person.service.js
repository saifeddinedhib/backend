const Person = require("../models/person.model");

const getPersonByEmailService = async (email) => {
  return await Person.findOne({ email });
};

const createPersonService = async (data) => {
  const person = new Person(data);
  return await person.save();
};

const getPersonByIdService = async (id) => {
  return await Person.findById(id);
};

const getAllPersonsService = async () => {
  return await Person.find({});
};

const deletePersonByIdService = async (id) => {
  return await Person.findByIdAndDelete(id);
};

const updatePersonByIdService = async (id, data) => {
  return await Person.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  createPersonService,
  getPersonByEmailService,
  getPersonByIdService,
  getAllPersonsService,
  deletePersonByIdService,
  updatePersonByIdService,
};

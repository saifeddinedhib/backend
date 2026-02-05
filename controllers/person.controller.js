const {
  createPersonService,
  getPersonByEmailService,
  getPersonByIdService,
  getAllPersonsService,
  deletePersonByIdService,
  updatePersonByIdService,
} = require("../services/person.service");

const createPersonController = async (req, res) => {
  try {
    const data = req.body;
    const existingPerson = await getPersonByEmailService(data.email);
    if (existingPerson) {
      return res
        .status(409)
        .json({ error: "Person with this email already exists" });
    }
    const newPerson = await createPersonService(data);
    res.status(201).json(newPerson);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to create person : ${error.message}` });
  }
};

const updatePersonsByIdController = async (req, res) => {

  try {
    const { id } = req.params;
    const data = req.body;
    const updatePerson = await updatePersonByIdService(id, data);

    if (!updatePerson) {
      return res
        .status(204)
        .json({ error: `Failed to update person : ${error.message}` });
    }
    return res.status(200).json(updatePerson);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to update person : ${error.message}` });
  }
};

const getPersonByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const person = await getPersonByIdService(id);
    if (!person) {
      return res
        .status(204)
        .json({ message: "No person found with the given id " });
    }
    return res.status(200).json(person);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create person : ${error.message}` });
  }
};

const getAllPersonsController = async (req, res) => {
  try {
    const persons = await getAllPersonsService();
    return res.status(200).json(persons);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to create person : ${error.message}` });
  }
};

const deletePersonByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePerson = await deletePersonByIdService(id);
    if (!deletePerson) {
      return res.status(204).json({});
    }

    return res.status(200).json({ message: "deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Failed to delete person : ${error.message}` });
  }
};

module.exports = {
  createPersonController,
  getPersonByIdController,
  getAllPersonsController,
  deletePersonByIdController,
  updatePersonsByIdController,
};

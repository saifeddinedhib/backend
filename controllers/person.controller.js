const { createPersonService, getPersonByEmailService, getAllpersonservice,
    getPersonByIdservice,
    deletePersonByIdService,
    updatePersonByIdService
} = require('../services/person.service');


const createPersonController = async (req, res) => {
    try {
        const data = req.body;

        const existingPerson = await getPersonByEmailService(data.email);
        if (existingPerson) {
            return res.status(409).json({ message: "person with this email already takeen" })
        }
        const newPerson = await createPersonService(data);
        return res.status(201).json(newPerson);
    } catch (error) {
        return res.status(500).json({ message: `failed to create peron${error.message}` })
    }
}

const getAllPersonController = async (req, res) => {
    try {
        const persons = await getAllpersonservice();
        return res.status(200).json(persons);
    } catch (error) {
        return res.status(500).json({ message: `failed to get person:${error.message}` });
    }
}

const getPersonByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await getPersonByIdservice(id);
        if (!person) {
            return res.status(204).json({ message: 'no person found with this' })
        }
        return res.status(200).json(person);
    } catch (error) {
        return res.status(500).json({ message: `failed to get person${error.message}` })
    }
}

const deletePersonByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await deletePersonByIdService(id);
        if (!person) {
            return res.status(204).json({ message: 'no person found' })
        }
        return res.status(200).json({ message: 'person is deleted' });
    } catch (error) {
        return res.status(500).json({ message: `failed to delete person:${error.message}` })
    }
}

const updatePersonByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatePerson = await updatePersonByIdService(id, data);

        if (!updatePerson) {
            return res.status(204).json({ message: 'no person found with the given id to update' })
        }
        return res.status(200).json(updatePerson);
    } catch (error) {
        return res.status(500).json({ message: `failed to update person:${error.message}` });
    }
}

module.exports = {
    createPersonController,
    getAllPersonController,
    getPersonByIdController,
    deletePersonByIdController,
    updatePersonByIdController
}
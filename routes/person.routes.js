const express = require('express');
const router = express.Router();
const { createPersonController, 
        getAllPersonController,
        getPersonByIdController,
        deletePersonByIdController,
        updatePersonByIdController
    } = require('../controllers/person.controller')
const { validateCreatePerson,
        validId
 } = require('../midlewares/person.middleware');
 const {isAdmin}= require('../midlewares/authentication.middleware')

router.post('/new', validateCreatePerson,isAdmin, createPersonController);
router.get('/' ,getAllPersonController)
router.get('/:id', validId, isAdmin, getPersonByIdController)
router.delete('/:id',validId, isAdmin, deletePersonByIdController)
router.put('/:id',validId, isAdmin, updatePersonByIdController)

module.exports = router;
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

router.post('/new', validateCreatePerson, createPersonController);
router.get('/' ,getAllPersonController)
router.get('/:id', validId,getPersonByIdController)
router.delete('/:id',validId,deletePersonByIdController)
router.put('/:id',validId,updatePersonByIdController)

module.exports = router;
const express = require('express');
const router = express.Router();

const{signUpController, signInController}= require('../controllers/authentication.controller');
const {validateCreatePerson}= require ('../midlewares/person.middleware');
const { validateSignIn } = require('../midlewares/authentication.middleware');


router.post('/signup',validateCreatePerson,signUpController)
router.post('/signin',validateSignIn,signInController)




module.exports = router;
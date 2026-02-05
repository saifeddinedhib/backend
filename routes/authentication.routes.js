const express=require('express')
const router=express.Router()
const {signUpController, signInController}=require('../controllers/authentication.controller')
const {validateCreatePerson}=require('../middlewares/person.middleware')
const  {validateSignIn,isAuthenticated}= require('../middlewares/authentication.middleware')

router.post('/signup',validateCreatePerson, signUpController)
router.post('/signin',validateSignIn, signInController)

module.exports=router;
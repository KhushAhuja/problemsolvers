const express = require('express');
const { authUser, registerUser } = require('../controllers/userController');
const { send_new_user } = require('../mailers/Signup');
const router = express.Router();

 
router.post('/login',authUser)
router.post('/signup',registerUser)


module.exports = router

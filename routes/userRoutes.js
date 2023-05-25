const express = require('express');
const { authUser, registerUser, increment_subm,updateprofilepic } = require('../controllers/userController');
const { send_new_user } = require('../mailers/Signup');
const router = express.Router();

 
router.post('/login',authUser)
router.post('/submission',increment_subm)
// router.post('/updateProfilePic',updateprofilepic)
router.post('/signup',registerUser)


module.exports = router

const asyncHandler=require('express-async-handler');
const { send_new_user } = require('../mailers/Signup');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

exports.authUser = asyncHandler(async(req,res) => {

    const user = await User.findOne({email:req.body.email})
    const b = user && await user.authenticate(req.body.password)
 
    if( user && b){
        res.json({
            _id:user._id,
            name:user.name,
            email: user.email,
            country: user.country,
            token: generateToken(user._id)
        })
    }

    else{
        return res.status(400).json({error:"Invalid email or password"})
    }

})


exports.registerUser = asyncHandler(async(req,res) => {

    const {name,email,password} = req.body
    const UserExists = await User.findOne({email:email})

    if(UserExists){
        res.status(401)
        throw new Error('User Already Exists')
    }

    const user = await User.create({  name, email, password })

    if(user)
    {
        res.json({
            _id:user._id,
            name:user.name,
            email: user.email,
            token: generateToken(user._id)
        })

        send_new_user(user)
    }

    else{
        res.status(400)
        throw new Error('User Not Found')
    }
})



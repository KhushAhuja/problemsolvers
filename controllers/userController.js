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
            submissions: user.submissions,
            rating: user.rating,
            token: generateToken(user._id)
        })
    }

    else{
        return res.status(400).json({error:"Invalid email or password"})
    }

})


exports.increment_subm = asyncHandler(async(req,res) => {
    const {userID} = req.body;
    const user = await User.findById(userID);
    console.log(userID);
    if(user){
        user.submissions = user.submissions + 1;
        await user.save();
        res.json({
            _id:user._id,
            name:user.name,
            email: user.email,
            submissions: user.submissions,
            rating: user.rating,
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
            submissions: user.submissions,
            rating: user.rating,
            token: generateToken(user._id)
        })

        send_new_user(user)
    }

    else{
        res.status(400)
        throw new Error('User Not Found')
    }
})

const sendNotificationToUser = (username) => {
    
 };

exports.sendRequestController = async (req, res) => {
    try {
      const { username } = req.body;
  
      // Check if the username exists in the users database
      const userExists = await checkIfUserExists(username);
  
      if (userExists) {
        // Send a send-request-received API back to the frontend
        res.json({ message: "send-request-received" });
  
        // Send a notification to the specified username
        await sendNotificationToUser(username); // Implement this function
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error handling sendRequestController:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

//updateprofilepic in 
// exports.updateprofilepic = asyncHandler(async(req,res) => {
//     const {userID} = req.body;
//     const user = await User.findById(userID);
//     //updateprofilepic in user.profile_pic in the form of a string
//     if(user){

//         user.profile_pic = req.body.profile_pic;
//         await user.save();
//     }
// })

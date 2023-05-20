const mongoose = require('mongoose');
const bcrypt   = require('bcrypt')


const userSchema=new mongoose.Schema(
    {
        name         : { type: String, required: true, min:3},
        email        : { type: String, required: true, trim: true, unique:true, lowercase: true},
        hash_password: { type: String, required: true},
        country      : { type:String,  required: true, default:'India'},
        profile_pic  : { type: String}
    },
    { 
        timestamps: true
    }
)


userSchema.virtual('password').set(function(password){ this.hash_password=bcrypt.hashSync(password,12) })


userSchema.methods.authenticate =async function(password){ 
    return await bcrypt.compare(password,this.hash_password) 
}

module.exports = mongoose.model('User',userSchema); 
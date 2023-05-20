const mongoose = require('mongoose');


const problemSchema=new mongoose.Schema(
    {
        name        : { type: String, required: true,unique:true},
        submission  : { type: Number, required: true, default:0},
        difficulty  : { type: String},
        contest_code: { type:String},
        statment    : { type: String, required: true, default:'Sample Statement'},
        ans    : { type: String, required: true, default:'Sample Ans'},
    },
    { 
        timestamps: true
    }
)


module.exports = mongoose.model('Problem',problemSchema); 
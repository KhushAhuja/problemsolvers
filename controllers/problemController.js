const asyncHandler=require('express-async-handler');
const Problem = require('../models/problemModel');

exports.getAllProblems = asyncHandler(async(req,res) => {
    // console.log('here');
    const problems = await Problem.find()
    if(problems) return res.json(problems)
    else res.status(404).json({'message' :'Problems Not Found'})
})



exports.createProblem = asyncHandler(async(req,res)=>{
    
    const problem = new Problem({
        name:req.body.name,
        submission: 0,
        difficulty: 'Easy',
        contest_code: '-',
        statment: 'Sample Statment'
    })
    
    const createdProblem = await problem.save()
    res.status(201).json(createdProblem)
    
})



exports.getProblemById = asyncHandler(async(req,res)=>{
    
    const problem = await Problem.findById(req.params.id)
    if(problem) return res.json(problem)
    else res.status(404).json({'message' :'Problem Not Found'})
})

// router.post('/submissionproblem',increment_subm_problem)

exports.increment_subm_problem = asyncHandler(async(req,res) => {
    const {problemID} = req.body;
    
    const user = await Problem.findById(problemID);
    console.log(req.params);
    if(user){
        user.submission = user.submission + 1;
        await user.save();
    }
    else{
        return res.status(400).json({error:"Invalid email or password"})
    }
})
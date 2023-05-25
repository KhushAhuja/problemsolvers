const express = require('express');
const { getAllProblems, createProblem, getProblemById ,increment_subm_problem} = require('../controllers/problemController');
const router = express.Router();

router.get('/getProblems',getAllProblems)
router.get('/get-problem/:id',getProblemById)
router.post('/submission',increment_subm_problem)
router.post('/create-problem',createProblem)


module.exports = router

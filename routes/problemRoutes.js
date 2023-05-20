const express = require('express');
const { getAllProblems, createProblem, getProblemById } = require('../controllers/problemController');
const router = express.Router();

router.get('/getProblems',getAllProblems)
router.get('/get-problem/:id',getProblemById)
router.post('/create-problem',createProblem)


module.exports = router

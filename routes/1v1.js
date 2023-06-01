const express = require("express");
const router = express.Router();
const Problem = require("../models/problemModel");
const User = require("../models/userModel");
const EloRating = require("elo-rating");

let savedCodes = []; // Array to store the saved codes

const submittedAnswers = []; // Array to store submitted answers
const codeResMap = new Map();
router.post("/submit-answer", async (req, res) => {
  try {
    const { matchingCode, correct, userInfo } = req.body;
    const { code, problemId } = matchingCode;

    // Find the problem by problemId
    const problem = await Problem.findById(problemId);
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    // Store the submitted answer along with the user information
    submittedAnswers.push({ userrating: userInfo.rating, answer: correct });
    const checker = savedCodes.find(
      (savedCode) => savedCode.code === code
    );
    if(submittedAnswers[0].answer === true && checker){
      //delete the object containing code in savedCodes
      const index = savedCodes.indexOf(checker);
      if (index > -1) {
        savedCodes.splice(index, 1);
      }
      let result = "";
      let result1 = "";
  
      result = "You Won";
      
      
      const resPair = codeResMap.get(code);
      if (resPair) {
        const idleUserRes = Number(resPair.idleUserRes);
        const requesterRes = Number(resPair.requester);
        // console.log(idleUserRes, requesterRes);
        // console.log(submittedAnswers[0].userrrating);
        if(requesterRes == userInfo.rating){
           // Additional response to the idle user
          //  console.log("Idle user response");
           result1 = calculateNewRating(requesterRes,idleUserRes, true);
        }else{
          // console.log("Idle user response");
          result1 = calculateNewRating(requesterRes, idleUserRes, true);
        }
        await User.findByIdAndUpdate(userInfo._id, { rating: Number(result1) });
      }
      // console.log("hi");
      submittedAnswers.length = 0;
      res.json({ message: "Answer submitted successfully", result,result1 });
    }
    else if(submittedAnswers[0].answer === false){
      let result = "";
      
      result = "You Lost";
      
      let result1 = "";
      const resPair = codeResMap.get(code);
      if (resPair) {
        const idleUserRes = Number(resPair.idleUserRes);
        const requesterRes = Number(resPair.requester);

        if(requesterRes == userInfo.rating){
           // Additional response to the idle user
          //  console.log("Idle user response");
           result1 = calculateNewRating(requesterRes, idleUserRes, false);

        }else{
          // console.log("Idle user response");
          result1 = calculateNewRating(requesterRes, idleUserRes, false);

        }
        await User.findByIdAndUpdate(userInfo._id, { rating: Number(result1) });
      }
      submittedAnswers.length = 0;
      res.json({ message: "Answer submitted successfully", result ,result1});
    }
    else if(submittedAnswers[0].answer === null && checker){
      let result = "";
      result = "It's a Draw for you";
      let result1 = "";
      result1 = userInfo.rating;
      submittedAnswers.length = 0;
      res.json({ message: "Answer submitted successfully", result,result1 });
    }
    else{
      let result = "";
      result = "You Lost";
      
      let result1 = "";
      const resPair = codeResMap.get(code);
      if (resPair) {
        const idleUserRes = Number(resPair.idleUserRes);
        const requesterRes = Number(resPair.requester);

        if(requesterRes == userInfo.rating){
           // Additional response to the idle user
          //  console.log("Idle user response");
           result1 = calculateNewRating(requesterRes, idleUserRes, false);

        }else{
          // console.log("Idle user response");
          result1 = calculateNewRating(requesterRes, idleUserRes, false);

        }
        await User.findByIdAndUpdate(userInfo._id, { rating: Number(result1) });
      }
      submittedAnswers.length = 0;
      res.json({ message: "Answer submitted successfully", result ,result1});
    }
  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to save the generated code
router.post("/save-code", async (req, res) => {
  const { code } = req.body;

  // Get a random problem ID from the database
  const randomProblemId = await getRandomProblemIdFromDatabase();

  // Create an object with the code and problem ID
  const codeObject = {
    code,
    problemId: randomProblemId,
  };

  // Save the code object to the array
  savedCodes.push(codeObject);

  // console.log("Code saved:", codeObject);

  res.status(200).send();
});

// Endpoint to handle join requests
router.post("/join-request", (req, res) => {
  const { code,userInfo } = req.body;

  // Check if the provided code matches any of the saved codes
  const matchingCodeObject = savedCodes.find(
    (savedCode) => savedCode.code === code
  );
  

  if (matchingCodeObject) {
    const { code, problemId } = matchingCodeObject;
    if(codeResMap.has(code)){
      const resPair = codeResMap.get(code);
      resPair.idleUserRes = userInfo.rating;
      // console.log(resPair);
    }else {

      const resPair = {
        requester: userInfo.rating, 
        idleUserRes: null,// The res object of the requester 
      };
      codeResMap.set(code, resPair);
    }

    // Store the code-resObject pair in the global data structure
    

    res.status(200).json({ code, problemId, reset: true });
  } else {
    res.status(200).json({ code: null, problemId: null });
  }
});

const calculateNewRating = (userRating, opponentRating, isWin) => {
  // console.log("Calculating new rating...");
  // Define the rating constants
  const K = 32; // K-factor for rating adjustment

  // Calculate the expected outcome
  const expectedOutcome = 1 / (1 + 10 ** ((opponentRating - userRating) / 400));

  // Determine the actual outcome
  const actualOutcome = isWin ? 1 : 0;

  // Calculate the rating adjustment
  const ratingAdjustment = K * (actualOutcome - expectedOutcome);

  // Apply the rating adjustment
  const newUserRating = userRating + ratingAdjustment;
  // console.log("New user rating:", newUserRating);
  return newUserRating;
};

// Function to get a random problem ID from the database
async function getRandomProblemIdFromDatabase() {
  try {
    // console.log("Retrieving random problem ID from database...");
    // Replace this with your own logic to retrieve a random problem ID from the database
    const problems = await Problem.find(); // Assuming you have a "Problem" model and want to retrieve all problems

    if (problems.length === 0) {
      throw new Error("No problems found in the database.");
    }

    const randomIndex = Math.floor(Math.random() * problems.length);
    return problems[randomIndex]._id; // Assuming the problem ID is stored in the "_id" field
  } catch (error) {
    console.error("Error retrieving random problem ID:", error);
    throw error;
  }
}

module.exports = router;

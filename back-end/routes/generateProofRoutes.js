const express = require('express'); 
const proofController = require("../controllers/generateProofController")
const router = express.Router();

router.get('/generate', proofController.generateProof);
router.get('/get-voter-id', proofController.getVoter);
router.post('/has-voted', proofController.setHasVoted);
router.get('/get-voter-by-id', proofController.getVoterById)

module.exports = router;
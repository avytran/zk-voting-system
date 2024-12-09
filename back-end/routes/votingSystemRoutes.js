const express = require('express');  
const candidatesController = require('../controllers/votingSystemController'); // Nhập candidateController  

const router = express.Router();  

router.get('/candidates', candidatesController.getAllCandidates); // Kết nối route với controller  
router.get('/total-votes', candidatesController.getTotalVotes); // Kết nối route với controller  
router.post('/update-votes', candidatesController.updateVotes);

module.exports = router;
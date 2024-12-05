const express = require('express');  
const candidatesController = require('../controllers/votingSystemController'); // Nhập candidateController  

const router = express.Router();  

router.get('/candidates', candidatesController.getAllCandidates); // Kết nối route với controller  

module.exports = router;
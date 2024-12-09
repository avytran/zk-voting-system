const proofService = require("../models/generateProofModel");

const express = require('express');  
const app = express();  

app.use(express.json()); // phân tích JSON body  


const proofController = {
    generateProof: async (req, res) => {
        try {  
            const voter = req.query;
            const proof = await proofService.generateProof(voter);            
            return res.json({ proof: proof })
        } catch (error) {  
            console.error("Đã xảy ra lỗi:", error);  
        }          
    },

    getVoter: async (req, res) => {
        try {
            const { email, password } = req.query; // Lấy từ req.query  
            const voter = await proofService.getVoter(email, password);
            return res.status(200).json(voter);
        } catch (error) {
            console.error("Đã xảy ra lỗi:", error); 
            return res.status(500).json({ message: "Đã xảy ra lỗi." });
        }
    },

    getVoterById: async(req, res) => {
        try {
            const voterID = req.query; // Lấy từ req.query 
            const voter = await proofService.getVoterById(voterID);
            return res.status(200).json(voter);
        } catch (error) {
            console.error("Đã xảy ra lỗi:", error); 
            return res.status(500).json({ message: "Đã xảy ra lỗi." });
        }
    },

    setHasVoted: async(req, res) => {
        try {
            const voterID = req.body.params.VoterID;
            const updatedRows = await proofService.setHasVoted(voterID);
            
            if (updatedRows === 0) {
                return res.status(404).json({ error: 'Voter not found' });
              }
            return res.status(200).json(updatedRows);

        } catch (error) {
            console.error(error);
        return res.status(500).json({ error: 'An error occurred', details: error.message })
        }
    }

    
}

module.exports = proofController;
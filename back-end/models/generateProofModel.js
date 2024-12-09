const snarkjs = require("snarkjs");
const fs = require("fs");
const knex = require('../database');

const proofService = {
    generateProof: async (voter) => {
        const voterID = voter.HasVoted === 'false' ? voter.VoterID : 0;
        const { proof, publicSignals } = await snarkjs.groth16.fullProve({voterID: voterID, validVoterIDs: [1, 2, 3], proofValid: 1}, "../snarkjs-voting/circuit.wasm", "../snarkjs-voting/circuit_final.zkey");
        console.log("Proof: ");
        console.log(JSON.stringify(proof, null, 1));
        const vKey = JSON.parse(fs.readFileSync("../snarkjs-voting/verification_key.json"));
        const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);
        console.log('snarkjs:',res);
        
        return res;
    },

    getVoter: async (email, password) => {  
        try {  
            const voter = await knex('Voters')
            .select('VoterID', 'VoterName', 'HasVoted') // Chỉ lấy id
            .where('VoterAddress', email)
            .andWhere('VoterPassword', password) // Điều kiện lọc theo email
            .first(); // Dùng first để lấy 1 kết quả (vì email là duy nhất)
            
            return voter;

        } catch (error) {  
            
            console.error("Lỗi model:", error.message); 
            throw error; 
        }  
    },

    getVoterById: async (VoterID) => {
        try {
            const updatedRows = knex('Voters')
                .select('VoterID', 'VoterName', 'HasVoted') 
                .where('VoterID', VoterID.VoterID)
                .first()
            
            return updatedRows;
        } catch (error) {
            console.error('Error updating HasVoted: ', error);
        }
    },

    setHasVoted: async (VoterID) => {
        try {
            const updatedRows = knex('Voters')
                .where('VoterID', VoterID)
                .update({
                    HasVoted: true
                })
            
            return updatedRows;
        } catch (error) {
            console.error('Error updating HasVoted: ', error);
        }
    }

}

module.exports = proofService;
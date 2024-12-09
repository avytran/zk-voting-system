require('dotenv').config(); 
const knex = require('../database');

const candidatesService = {
    getCandidates: async () => {  
        try {  
            const items = await knex('candidates').select('*');  
            
            return items;  
        } catch (error) {  
            console.error("Lỗi khi lấy danh sách ứng viên:", error.message); 
            throw error; 
        }  
    },
    getTotalVotes: async () => {  
        try {  
            const items = await knex('candidates').sum('Votes as totalVotes')  // Tính tổng số phiếu bầu;  
            return items;  
        } catch (error) {  
            console.error("Lỗi khi lấy tổng bình chọn:", error.message); 
            throw error; 
        }  
    },
    updateVotes: async (candidateID) => {
        try {
            const updatedRows = await knex('Candidates')
                .where('CandidateID', candidateID)
                .increment('Votes', 1);  // Cộng thêm 1 vào cột 'Votes'
            
            return updatedRows;
        } catch (error) {
            console.error('Error updating votes: ', error);
        }
    }


}

module.exports = candidatesService;


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
    }  
}

module.exports = candidatesService;


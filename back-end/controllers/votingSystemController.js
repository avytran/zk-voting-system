const candidatesService = require('../models/votingSystemModel'); // Nhập candidateService  

const candidatesController = {  
    getAllCandidates: async (req, res) => {  
        try {  
            const candidates = await candidatesService.getCandidates();  
            return res.status(200).json(candidates); // Trả về danh sách ứng viên  
        } catch (error) {  
            console.error("Đã xảy ra lỗi khi lấy danh sách ứng viên:", error);  
            return res.status(500).json({ message: "Đã xảy ra lỗi trong quá trình lấy dữ liệu ứng viên." });  
        }  
    },
    getTotalVotes: async (req, res) => {  
        try {  
            const totalVotes = await candidatesService.getTotalVotes();  
            return res.status(200).json(totalVotes); // Trả về danh sách ứng viên  
        } catch (error) {  
            console.error("Đã xảy ra lỗi khi lấy tổng bình chọn:", error);  
            return res.status(500).json({ message: "Đã xảy ra lỗi trong quá trình lấy dữ liệu ứng viên." });  
        }  
    }  

};  

module.exports = candidatesController; // Xuất candidateController
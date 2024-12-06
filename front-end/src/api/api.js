import axios from 'axios';
const PORT = process.env.PORT || 3000;  

export const getCandidates = async() => {
    return axios.get(`http://localhost:${PORT}/api/candidates`);
}

export const getTotalVotes = async() => {
    return axios.get(`http://localhost:${PORT}/api/total-votes`);
}
import axios from 'axios';
const PORT = process.env.PORT || 3000;  

export const getCandidates = async() => {
    return axios.get(`http://localhost:${PORT}/api/candidates`);
}

export const getTotalVotes = async() => {
    return axios.get(`http://localhost:${PORT}/api/total-votes`);
}

export const generateProof = async(voter) => {
    return axios.get(`http://localhost:${PORT}/proof/generate`, {params: voter});
}

export const getVoterId = async({email, password}) => {
    return axios.get(`http://localhost:${PORT}/proof/get-voter-id`, {params: { email, password }});
}

export const setHasVoted = async(VoterID) => {
    return axios.post(`http://localhost:${PORT}/proof/has-voted`, {params: {VoterID}});
}

export const getVoterById = async(VoterID) => {    
    return axios.get(`http://localhost:${PORT}/proof/get-voter-by-id`, {params: {VoterID}});
}

export const updateVotes = async(CandidateID) => {
    return axios.post(`http://localhost:${PORT}/api/update-votes`, {params: {CandidateID}});

}
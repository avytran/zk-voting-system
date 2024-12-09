import './VotingSection.css';
import { useState } from 'react';
import { generateProof, setHasVoted, getVoterById, updateVotes, getTotalVotes, getCandidates } from '../../api/api';

export const VotingSection = ({candidates, isLogged, voter, setVoter, setTotalVotes, setCandidates}) => {  
  const handleProof = async (isLogged, voter, candidateID) => {
    if (isLogged){
      try {
        const generateResponse = await generateProof(voter);
        if (generateResponse.data.proof){
          const setHasVotedRes = await setHasVoted(voter.VoterID);
          if (setHasVotedRes.data){
            const getVoterByIdRes = await getVoterById(setHasVotedRes.data)
            setVoter(getVoterByIdRes.data);
            const updateVotesRes = await updateVotes(candidateID);
            
            if (updateVotesRes.data){
              const votesResponse = await getTotalVotes();
              setTotalVotes(votesResponse.data[0].totalVotes);
              const candidatesResponse = await getCandidates();
              setCandidates(candidatesResponse.data);
              if (candidatesResponse.data){
                alert("You've voted successfully!");
              }
            }  
          } 
        }
        else{
          alert('You have voted before! You cannot vote again.')
        }
      } catch (error) {
        console.error('Error generate proof:', error.message);
      }
    }
  }
    return (
        <div className="voting-section">
          <p className='voting-title'>CHOOSE YOUR PRESIDENT</p>
          <div className="candidates">
            {
              candidates.map( (candidate) => {
                return(
                  <div className="candidate">
                    <img className="candidate-img" src={candidate.Image} alt="" />
                    <div className="candidate-info">
                        <p className="candidate-name">{candidate.Name}</p>
                        <p className="candidate-party">{candidate.Party}</p>
                        <button onClick={() => handleProof(isLogged, voter, candidate.CandidateID)} className="candidate-vote">Vote</button>
                    </div>
                </div>
                )
              })
            }
          </div>
        </div>
      );
}
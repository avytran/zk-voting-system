import './VotingPage.css';
import { useState, useEffect } from 'react';
import { getCandidates, getTotalVotes, generateProof } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { VoteStatistics } from '../../components/VoteStatistics';
import { VotingSection } from '../../components/VotingSection';

export const VotingPage = ({isLogged, voter, setVoter}) => {
  const [candidates, setCandidates] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  const handleCandidates = async () => {
    try {
      const candidatesResponse = await getCandidates();
      setCandidates(candidatesResponse.data);

      const votesResponse = await getTotalVotes();
      setTotalVotes(votesResponse.data[0].totalVotes);
      
  } catch (error) {
      console.error('Error fetching candidates:', error.message);
      alert("Không thể tải danh sách ứng viên. Vui lòng thử lại sau.");
  }
  }

  useEffect( () => {
    handleCandidates();
  }, []);
    return (
      <div className="div">
        <div className="votingpage-section">
            <VoteStatistics
              candidates={candidates}
              totalVotes={totalVotes}
              setTotalVotes={setTotalVotes}
            />
            <VotingSection
              candidates={candidates}
              isLogged={isLogged}
              voter={voter}
              setVoter={setVoter}
              setTotalVotes={setTotalVotes}
              setCandidates={setCandidates}
            />
        </div>
      </div>
    )
}
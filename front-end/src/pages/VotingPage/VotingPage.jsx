import './VotingPage.css';
import { useState, useEffect } from 'react';
import { getCandidates, getTotalVotes } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { VoteStatistics } from '../../components/VoteStatistics';
import { VotingSection } from '../../components/VotingSection';

export const VotingPage = () => {
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
        <Navbar/>
        <div className="votingpage-section">
            <VoteStatistics
              candidates={candidates}
              totalVotes={totalVotes}
            />
            <VotingSection
              candidates={candidates}
            />
        </div>
      </div>
    )
}
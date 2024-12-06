import './VoteStatistics.css';

import { ElectionProgress } from '../ElectionProgress/ElectionProgress';

export const VoteStatistics = ({candidates, totalVotes}) => {

    return (
        <div className="vote-statistics-section">
          <p className='vote-statistics-title'>2024 U.S.</p>
          <p className='vote-statistics-title' style={{color:'#FC3443'}}>PRESIDENTAL ELECTION</p>
          <div className="vote-statistics-progress">
            {
              candidates.map((candidate) => {
                return (
                  <ElectionProgress
                    candidateName={candidate.Name}
                    votes={candidate.Votes}  
                    party={candidate.Party}
                    image={candidate.Image}       
                    totalVotes={totalVotes}
                  />
                )
              })
            }
          </div>
        </div>
      );
}
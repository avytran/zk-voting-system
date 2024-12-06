import './VotingSection.css';

export const VotingSection = ({candidates}) => {
  console.log(candidates);
  
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
                      <button className="candidate-vote">Vote</button>
                    </div>
                </div>
                )
              })
            }
          </div>
        </div>
      );
}
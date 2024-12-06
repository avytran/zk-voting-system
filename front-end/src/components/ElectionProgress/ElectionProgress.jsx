import './ElectionProgress.css';

export const ElectionProgress = ({ candidateName, votes, party, image, totalVotes }) => {
  const percentage = ((votes / totalVotes) * 100).toFixed(2);


  return (
    <div className="progress-container">
      <p className='progress-name'>{candidateName}</p>
      <div className="progress-bar">
        <p className='progress-votes'>{votes}</p>
        <div
          className={party === "Republican" ? "progress republic" : "progress democrat" }
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
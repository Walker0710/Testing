import React from 'react';

const ScoreBoard = ({ score, totalGroups }) => {
  return (
    <div className="scoreboard">
      <p>Score: {score}</p>
      <p>Groups Completed: {totalGroups}</p>
    </div>
  );
};

export default ScoreBoard;

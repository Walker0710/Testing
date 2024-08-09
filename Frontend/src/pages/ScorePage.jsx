import React from 'react';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const ScorePage = () => {
  const { score, totalGroups } = useContext(GameContext);

  return (
    <div className="score-page">
      <h1>Final Score</h1>
      <p>Score: {score}</p>
      <p>Groups Completed: {totalGroups}</p>
    </div>
  );
};

export default ScorePage;

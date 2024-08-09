import React from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';

const HomePage = () => {
  const { score, totalGroups } = useContext(GameContext);

  return (
    <div className="game-page">
      <h1>Connections Game</h1>
      <ScoreBoard score={score} totalGroups={totalGroups} />
      <GameBoard />
    </div>
  );
};

export default HomePage;

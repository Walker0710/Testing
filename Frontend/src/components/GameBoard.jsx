import React, { useContext, useState } from 'react';
import { GameContext } from '../context/GameContext';
import Word from './Word';
import Category from './Category';

const GameBoard = () => {
  const { words, selectedWords, handleWordClick, submitGroups } = useContext(GameContext);
  const [groups, setGroups] = useState([]);

  const handleGroupSubmit = () => {
    submitGroups(groups);
  };

  const handleGroupAdd = () => {
    setGroups([...groups, selectedWords]);
  };

  return (
    <div className="game-board">
      <div className="words-list">
        {words.map(word => (
          <Word key={word._id} word={word.word} onClick={() => handleWordClick(word.word)} />
        ))}
      </div>
      <button onClick={handleGroupAdd} disabled={selectedWords.length === 0}>
        Add Group
      </button>
      <div className="categories-list">
        {groups.map((group, index) => (
          <Category key={index} group={group} />
        ))}
      </div>
      <button onClick={handleGroupSubmit} disabled={groups.length === 0}>
        Submit Groups
      </button>
    </div>
  );
};

export default GameBoard;

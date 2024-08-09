import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [score, setScore] = useState(0);
  const [totalGroups, setTotalGroups] = useState(0);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/game/words', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setWords(res.data);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };

    fetchWords();
  }, []);

  const handleWordClick = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(w => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const submitGroups = async (groups) => {
    try {
      const res = await axios.post('http://localhost:5000/api/game/submit', { groupedWords: groups }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      if (res.data.success) {
        setScore(score + 1);
        setTotalGroups(totalGroups + 1);
        setSelectedWords([]);
      } else {
        console.error('Invalid group submission');
      }
    } catch (error) {
      console.error('Error submitting groups:', error);
    }
  };

  return (
    <GameContext.Provider value={{ words, selectedWords, handleWordClick, submitGroups, score, totalGroups }}>
      {children}
    </GameContext.Provider>
  );
};

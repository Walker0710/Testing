import React from 'react';
import { motion } from 'framer-motion';

const Word = ({ word, onClick }) => {
  return (
    <motion.div
      className="word"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {word}
    </motion.div>
  );
};

export default Word;

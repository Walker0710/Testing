import React from 'react';
import './CardRecPapers.css'

const CardRecPapers = ({ title, content }) => {
  return (
    <div className="card-rec-container">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CardRecPapers;

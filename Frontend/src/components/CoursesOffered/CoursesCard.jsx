import React from 'react';
import './CoursesCard.css';

const CoursesCard = ({ card, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`card-container ${isLeft ? 'left' : 'right'}`}>
      <div className="card">
        <h2 className='course-card-heading'>{card.title}</h2>
        <p className='course-card-code'>{card.code}</p>
        <h3 className='course-card-credits'>{card.credits}</h3>
        <button>Resourses</button>
      </div>
      <div className="description">
        <p>{card.shortDescription}</p>
      </div>
    </div>
  );
};

export default CoursesCard;

import React from 'react';
import './CardFun.css'

const CardFun = ({ src, title, content }) => {
  return (
    <div className="card-fun-container">
      <img className='card-fun-img' src={src} alt="yoo" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CardFun;

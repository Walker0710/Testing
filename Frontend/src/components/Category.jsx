import React from 'react';

const Category = ({ group }) => {
  return (
    <div className="category">
      {group.map((word, index) => (
        <span key={index} className="category-word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default Category;

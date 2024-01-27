

import React, { useState } from 'react';
import './CardGrid.css';
import right from './assets/right.png';

const Card = ({ id, title, text, imageUrl }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setCurrentImageUrl(isClicked ? imageUrl : right);
  };

  return (
    <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleButtonClick}>
      <img
        src={currentImageUrl}
        alt={`Card Image - ${title}`}
        className="card-image"
        style={{ width: '200px', height: '150px' }} 
      />
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-text">{text}</p>
        <button className="card-button">{isClicked ? 'Clicked!' : ''}</button>
      </div>
    </div>
  );
};

export default Card;

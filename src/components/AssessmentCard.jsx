import React from 'react';
import './AssessmentCard.css';

const AssessmentCard = ({ title1,title2, card }) => {
  return (
    <div className="assessment-card">
      <img src={`../${card}.png`} alt={card} />
      <p>{title1} <br /> {title2}</p>
      
    </div>
  );
};

export default AssessmentCard;

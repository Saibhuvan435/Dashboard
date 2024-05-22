import React from 'react';
import './ExCard.css';

const AssessmentCard = ({ title, card }) => {
  return (
    <div className="card">
      <img src={`../${card}.png`} alt={card} />
      <h3>{title}</h3>
    </div>
  );
};

export default AssessmentCard;

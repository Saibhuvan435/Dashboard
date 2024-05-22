// src/components/CircularProgress.jsx
import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value, text, name }) => {
  // Ensure value is capped at 25%
  const displayValue = Math.min(value, 25);

  return (
    <div style={{ width: 140, height: 120, cursor:"pointer" }}>
      <CircularProgressbarWithChildren
        value={displayValue}
        styles={buildStyles({
          textColor: '#6a1b9a',
          pathColor: '#6a1b9a',
          trailColor: '#d6d6d6'
        })}
      >
        <div style={{ fontSize: 26, marginTop: -5 }}>
          <strong>{text}</strong>
        </div>
        <div style={{ fontSize: 13, fontWeight:650}}>
          {name}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgress;

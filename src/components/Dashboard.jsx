// src/components/Dashboard.jsx
import React from 'react';
import CircularProgress from './History'; // Ensure the import path is correct
import './Dashboard.css';
import Calender from './Calender';

const Dashboard = () => {
  return (
    <div className="right">
      <div className="dashboard-container">
        <div className="circular-progress-section">
          <CircularProgress value={25} text="6" name="Assessment Taken" />
          <CircularProgress value={25} text="27" name="Questions Solved" />
        </div>
        <hr className="horizontal-line" />
        <div className="mid">
          <p>Badges</p>
          <div className="vertical-line"></div>
          <p>Focused Area</p>
        </div>
      </div>
      <div className="right-bottom">
       <img src="../calender.png" alt="" />
      </div>
    </div>
  );
};

export default Dashboard;

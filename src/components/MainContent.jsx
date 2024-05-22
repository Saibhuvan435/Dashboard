import React, { useState } from 'react';
import AssessmentCard from './AssessmentCard';
import ExCard from './ExCard';
import './MainContent.css';

const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const assessments = [
    { card: 'Mech', title1: 'Mechanical', title2: 'Engineering' },
    { card: 'comp', title1: 'Computer', title2: 'Programming' },
    { card: 'finance', title1: 'Financial', title2: 'Analysis' }
  ];

  const exAssessments = [
    { card: 'quizzes', title: 'Quizzes' },
    { card: 'coding', title: 'Coding' }
  ];

  const filteredAssessments = assessments.filter(assessment =>
    assessment.title1.toLowerCase().includes(searchQuery.toLowerCase()) ||
    assessment.title2.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredExAssessments = exAssessments.filter(exAssessment =>
    exAssessment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="Top">
      <h2>Let's Rock!</h2>

        <p>Practice regularly to achieve perfection.</p>
        <div className="search-container">
          <img src="../search.png" alt="search icon" className="search-icon" />
          <input
            type="text"
            id="searchBar"
            className="search-bar"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="section">
      <div className="head"><h3>Exclusive Assessments</h3><p>&lt; &gt;</p></div>
        <div className="assessment-cards">
          {filteredAssessments.map((assessment, index) => (
            <AssessmentCard
              key={index}
              title1={assessment.title1}
              title2={assessment.title2}
              card={assessment.card}
            />
          ))}
        </div>
      </div>
      <div className="ex-section">
        <div className="head"><h3>All Assessments</h3><h4>See All</h4></div>
        <div className="assessment-cards">
          {filteredExAssessments.map((exAssessment, index) => (
            <ExCard
              key={index}
              card={exAssessment.card}
              title={exAssessment.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;

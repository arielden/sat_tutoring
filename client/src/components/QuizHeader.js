import React from 'react';
import './QuizHeader.css';

const QuizHeader = ({ 
  sectionTitle, 
  timeRemaining, 
  questionNumber, 
  totalQuestions, 
  onMarkForReview 
}) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="quiz-header">
      <div className="header-left">
        <h1 className="section-title">{sectionTitle}</h1>
        <div className="question-info">
          Question {questionNumber} of {totalQuestions}
        </div>
      </div>
      
      <div className="header-right">
        <div className="timer-display">
          {formatTime(timeRemaining)}
        </div>
        <div className="header-controls">
          <button className="directions-btn">
            Directions ⌄
          </button>
          <button className="hide-btn">
            Hide
          </button>
          <button className="mark-review-btn" onClick={onMarkForReview}>
            📝 Mark for Review
          </button>
        </div>
        <div className="top-controls">
          <button className="calculator-btn">Calculator</button>
          <button className="reference-btn">Reference</button>
          <button className="more-btn">More</button>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
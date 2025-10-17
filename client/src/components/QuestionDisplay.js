import React from 'react';
import './QuestionDisplay.css';

const QuestionDisplay = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  showResult, 
  result 
}) => {
  return (
    <div className="question-display">
      <div className="question-header">
        <span className="question-number">{question.id}</span>
        <span className="mark-review-icon">📝 Mark for Review</span>
        <span className="bookmark-icon">🔖</span>
      </div>
      
      <div className="question-text">
        {question.question}
      </div>
      
      <div className="answer-options">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option ${selectedAnswer === option.id ? 'selected' : ''} ${
              showResult && result
                ? option.id === result.correctAnswer
                  ? 'correct'
                  : option.id === selectedAnswer && !result.isCorrect
                  ? 'incorrect'
                  : ''
                : ''
            }`}
            onClick={() => !showResult && onAnswerSelect(option.id)}
          >
            <div className="option-letter">{option.id}</div>
            <div className="option-text">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionDisplay;
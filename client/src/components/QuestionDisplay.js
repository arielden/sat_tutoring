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
        <div className="question-number">{question.id}</div>
        <div className="question-meta">
          <div className="question-info">
            <div className="question-type">Multiple Choice</div>
            <div className="difficulty-badge hard">Hard</div>
          </div>
        </div>
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
                  : option.id === selectedAnswer && !result.correct
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

      {/* Result Display */}
      {showResult && result && (
        <div className="result-section">
          <div className={`result-message ${result.correct ? 'correct' : 'incorrect'}`}>
            {result.correct ? '✅ Correct!' : '❌ Incorrect'}
          </div>
          <div className="explanation">
            <strong>Explanation:</strong> {result.explanation}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
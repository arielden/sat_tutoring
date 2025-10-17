import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionDisplay from './components/QuestionDisplay';
import Timer from './components/Timer';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(28 * 60 + 42); // 28:42 as shown in image
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('/api/questions');
      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const handleSubmit = async () => {
    if (!selectedAnswer) return;

    try {
      const response = await axios.post('/api/submit-answer', {
        questionId: questions[currentQuestionIndex].id,
        selectedAnswer: selectedAnswer
      });
      setResult(response.data);
      setShowResult(true);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const handleNext = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setResult(null);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleMarkForReview = () => {
    // Implementation for marking question for review
    console.log('Question marked for review');
  };

  if (loading) {
    return <div className="loading">Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div className="error">No questions available</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App">
      <div className="quiz-layout">
        {/* Top Navigation Bar */}
        <div className="top-navigation">
          <div className="nav-left">
            <div className="section-title">Section 2, Module 2:</div>
            <div className="section-subtitle">Math</div>
          </div>
          
          <div className="nav-center">
            <Timer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} />
          </div>
          
          <div className="nav-right">
            {/* Empty space for balanced layout */}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="quiz-content">
          {/* Question Header Section */}
          <div className="question-header-section">
            <div className="question-number-badge">{currentQuestionIndex + 1}</div>
            <button className="mark-review-button">
              <span className="bookmark-icon">🏷️</span>
              Mark for Review
            </button>
            <div className="progress-bar">
              <div className="progress-segments">
                {Array.from({length: questions.length}, (_, i) => (
                  <div 
                    key={i} 
                    className={`progress-segment ${i <= currentQuestionIndex ? 'completed' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="question-section">
            <QuestionDisplay
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
              showResult={showResult}
              result={result}
            />
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="bottom-navigation">
          <div className="question-info">
            Question {currentQuestionIndex + 1} of {questions.length} <span className="dropdown-arrow">▼</span>
          </div>
          
          <div className="nav-buttons">
            <button 
              className="nav-btn back-btn" 
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            >
              Back
            </button>
            <button 
              className="nav-btn next-btn"
              onClick={!showResult ? handleSubmit : handleNext}
              disabled={!showResult && !selectedAnswer}
            >
              {!showResult ? 'Next' : (currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
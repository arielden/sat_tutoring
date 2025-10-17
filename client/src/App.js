import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizHeader from './components/QuizHeader';
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
      <QuizHeader 
        sectionTitle="Section 2, Module 1: Math"
        timeRemaining={timeRemaining}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onMarkForReview={handleMarkForReview}
      />
      
      <div className="quiz-content">
        <div className="question-section">
          <QuestionDisplay
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showResult={showResult}
            result={result}
          />
          
          <div className="quiz-controls">
            {!showResult ? (
              <button 
                className="submit-btn"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </button>
            ) : (
              <div className="result-controls">
                <div className={`result-message ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  {result.isCorrect ? 'Correct!' : 'Incorrect'}
                </div>
                <div className="explanation">
                  <strong>Explanation:</strong> {result.explanation}
                </div>
                {currentQuestionIndex < questions.length - 1 && (
                  <button 
                    className="next-btn"
                    onClick={handleNext}
                  >
                    Next Question
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="timer-section">
          <Timer timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} />
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import './Timer.css';

const Timer = ({ timeRemaining, setTimeRemaining }) => {
  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, setTimeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTimeClass = () => {
    if (timeRemaining <= 300) return 'timer critical'; // 5 minutes
    if (timeRemaining <= 600) return 'timer warning'; // 10 minutes
    return 'timer normal';
  };

  return (
    <div className={getTimeClass()}>
      <div className="timer-label">Time Remaining</div>
      <div className="timer-value">{formatTime(timeRemaining)}</div>
      {timeRemaining <= 300 && (
        <div className="timer-alert">⚠️ Time is running out!</div>
      )}
    </div>
  );
};

export default Timer;
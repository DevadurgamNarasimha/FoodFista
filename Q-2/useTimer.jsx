import { useState, useEffect } from 'react';

function useTimer() {
  const [timer, setTimer] = useState(0);  
  const [isRunning, setIsRunning] = useState(false); 

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true); 
    }
  };

  const stopTimer = () => {
    setIsRunning(false); 
  };

  const resetTimer = () => {
    setTimer(0); 
    setIsRunning(false); 
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1); 
      }, 1000);
    } else {
      clearInterval(interval); 
    }

    return () => clearInterval(interval);
  }, [isRunning]); 

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
}

export default useTimer;

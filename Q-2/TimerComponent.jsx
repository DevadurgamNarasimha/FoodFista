import React from 'react';
import useTimer from './useTimer';

function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h1>Timer: {timer} seconds</h1>

      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerComponent;

import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const IntervalIdRef = useRef(null);
  const StartTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      IntervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - StartTimeRef.current);
      }, 10);
    }

    // cleanup
    return () => {
      clearInterval(IntervalIdRef.current);
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
    StartTimeRef.current = Date.now() - elapsedTime;
  }

  function resetTimer() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function formatTimer() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${miliseconds}`;
  }

  return (
    <div className="stopwatch-container">
      <div className="display-container">{formatTimer()}</div>
      <div className="controls">
        <button onClick={startTimer} className="btn-start">
          Start
        </button>
        <button onClick={stopTimer} className="btn-stop">
          Stop
        </button>
        <button onClick={resetTimer} className="btn-reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [duration, setDuration] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        if (countDown > 0) {
          setCountDown((prevCountdown) => prevCountdown - 1);
        } else {
          clearInterval(intervalId);
          alert("Countdown completed!");
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, countDown]);

  const handleStartChange = () => {
    setIsRunning(true);
  };

  const handleStopChange = () => {
    setIsRunning(false);
  };

  const handleResetChange = () => {
    setIsRunning(false);
    setCountDown(duration);
  };

  const handleChange = (e) => {
    setDuration(parseInt(e.target.value));
    setCountDown(parseInt(e.target.value));
  };

  return (
    <div className="main-container">
      <h1>Countdown Timer</h1>
      <div className="input-type-container">
        <input
          placeholder="enter time"
          className="input-container"
          value={duration}
          disabled={isRunning}
          onChange={handleChange}
          type="number"
        />

        <button
          className="start-btn-container"
          disabled={isRunning || duration <= 0}
          onClick={handleStartChange}
        >
          Start
        </button>
        <button
          className="stop-btn-container"
          disabled={!isRunning}
          onClick={handleStopChange}
        >
          Stop
        </button>
        <button
          className="reset-btn-container"
          disabled={isRunning}
          onClick={handleResetChange}
        >
          Reset
        </button>
      </div>
      <div>
        <h2>{countDown}</h2>
      </div>
    </div>
  );
}

export default App;

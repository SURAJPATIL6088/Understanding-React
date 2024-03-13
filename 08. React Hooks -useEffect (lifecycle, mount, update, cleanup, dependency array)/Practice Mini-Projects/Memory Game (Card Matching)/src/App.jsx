import { useEffect, useState } from "react";
import "./App.css";

// symbols for game
const symbols = [
  "🍎",
  "🍉",
  "🍒",
  "💐",
  "🚲",
  "🏍",
  "🚩",
  "❄",
  "🔥",
  "❤",
  "🕉",
  "🕐",
  "😅",
  "😂",
  "🙏",
  "🧨",
  "⚽",
  "📸",
];

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  // mounted useEffect
  // it only run once in the application
  useEffect(() => {
    handleInitializeChange();
  }, []);

  const handleInitializeChange = () => {

  }

  return (
    <div>
      <h1>Memory Game - Card Matching</h1>
      <div>Moves : {moves}</div>
      <div>

      </div>

      {/* reset the game */}
      <button className="card-btn-container" onClick={handleInitializeChange}>Reset Game</button>
    </div>
  );
}

export default App;

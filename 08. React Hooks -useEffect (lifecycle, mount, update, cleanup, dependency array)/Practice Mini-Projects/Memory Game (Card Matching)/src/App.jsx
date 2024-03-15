import { useEffect, useState } from "react";
import "./App.css";

// symbols for game
const symbols = [
  "🍎",
  "🍉",
  "🍒",
  "💐",
  "🚲",
  "🚩",
  "❄",
  "🔥",
  "❤",
  "🕐",
  "😅",
  "🎲",
  "🐞",
  "🦋",
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

  // it runs on every flipped card
  useEffect(() => {
    // when we flipp two card
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;

      // check both the card are equal or not
      if (firstCard.symbol === secondCard.symbol) {
        // then set the matched cards visible to user
        setMatchedCards([...matchedCards, firstCard, secondCard]);

        // then empty the temporiry stored cards
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCard) =>
            prevCard.map((card) =>
              card.id === firstCard.id || card.id == secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }

      setMoves(moves + 1);
    }
  }, [flippedCards]);

  const handleInitializeChange = () => {
    const initialCards = symbols.concat(symbols).map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }));

    const suffleCards = initialCards.sort(() => Math.random() - 0.5);
    setCards(suffleCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardClick = (clickedCard) => {
    if (
      flippedCards.length === 2 ||
      clickedCard.isFlipped ||
      clickedCard.isMatched
    ) {
      return;
    }

    setCards((prevCard) =>
      prevCard.map((card) =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );

    setFlippedCards((prevFlippedCard) => [...prevFlippedCard, clickedCard]);
  };

  return (
    <div>
      <h1 className="game-heading">Memory Game - Card Matching</h1>
      <div className="game-moves-counter">Moves : {moves}</div>
      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card.isFlipped || card.isMatched ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(card)}
          >
            {card.isFlipped || card.isMatched ? card.symbol : " "}
          </div>
        ))}
      </div>

      {/* reset the game */}
      <button className="card-btn-container" onClick={handleInitializeChange}>
        Reset Game
      </button>
    </div>
  );
}

export default App;

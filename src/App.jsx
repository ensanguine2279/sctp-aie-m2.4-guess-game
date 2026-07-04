// src/App.jsx
import { useState } from "react";
import GuessInput from "./components/GuessInput";
import GameStatus from "./components/GameStatus";
import GuessList from "./components/GuessList";
import "./App.css";

// Helper function to generate numbers between 1 and 20
const generateRandomNumber = () => Math.floor(Math.random() * 20) + 1;

function App() {
  // 💡 Lazy State Initialization: Only executes exactly once on initial load!
  const [secretNumber, setSecretNumber] = useState(() =>
    generateRandomNumber(),
  );
  const [pastGuesses, setPastGuesses] = useState([]);

  // Derive the last made guess from the history array (no extra state needed)
  const lastGuess = pastGuesses[0] || null;

  // Derive win status condition
  const hasWon = lastGuess?.value === secretNumber;

  const handleGuessSubmit = (guessValue) => {
    let resultLabel = "";
    if (guessValue === secretNumber) resultLabel = "Correct!";
    else if (guessValue > secretNumber) resultLabel = "Too high";
    else resultLabel = "Too low";

    const newGuessRecord = {
      id: Date.now(),
      value: guessValue,
      result: resultLabel,
    };

    // Prepend new guess record so recent entries appear at index 0
    setPastGuesses((prev) => [newGuessRecord, ...prev]);
  };

  const handleResetGame = () => {
    setSecretNumber(generateRandomNumber());
    setPastGuesses([]);
  };

  return (
    <div className="game-card">
      <header className="game-header">
        <h1>🔢 Guess My Number</h1>
        <p>I am thinking of a secret number between 1 and 20.</p>
      </header>

      <main>
        {/* Pass down core state hints */}
        <GameStatus lastGuess={lastGuess} secretNumber={secretNumber} />

        {/* Input turns off dynamically if user succeeds */}
        <GuessInput onGuessSubmit={handleGuessSubmit} isDisabled={hasWon} />

        {/* Play Again Reset CTA visible when player matches secret target number */}
        {hasWon && (
          <div className="reset-container">
            <button onClick={handleResetGame} className="reset-btn">
              🔄 Play Again
            </button>
          </div>
        )}

        {/* History Logger */}
        <GuessList guesses={pastGuesses} />
      </main>
    </div>
  );
}

export default App;

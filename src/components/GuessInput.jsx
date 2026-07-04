// src/components/GuessInput.jsx
import { useState } from "react";
import styles from "./GuessInput.module.css";

function GuessInput({ onGuessSubmit, isDisabled }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse input safely
    const parsedGuess = parseInt(inputValue, 10);

    // Prevent crashing on empty or non-numeric input
    if (isNaN(parsedGuess)) {
      alert("Please enter a valid numeric number.");
      return;
    }

    if (parsedGuess < 1 || parsedGuess > 20) {
      alert("Please enter a number between 1 and 20.");
      return;
    }

    // Fire callback prop to parent container
    onGuessSubmit(parsedGuess);
    setInputValue(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit} className={styles.guessForm}>
      <input
        type="number"
        min="1"
        max="20"
        placeholder="Enter 1 - 20..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isDisabled}
        className={styles.inputField}
        required
      />
      <button type="submit" disabled={isDisabled} className={styles.submitBtn}>
        Guess
      </button>
    </form>
  );
}

export default GuessInput;

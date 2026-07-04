// src/components/GameStatus.jsx
import styles from "./GameStatus.module.css";

function GameStatus({ lastGuess, secretNumber }) {
  // Initial state text when no guesses have been made yet
  if (!lastGuess) {
    return <p className={styles.statusText}>Start guessing to see hints!</p>;
  }

  const guessValue = lastGuess.value;

  // Derive status updates conditionally
  let message = "";
  let statusClass = "";

  if (guessValue === secretNumber) {
    message = "🎉 Correct! You guessed it!";
    statusClass = styles.correct;
  } else if (guessValue > secretNumber) {
    message = "📈 Too high!";
    statusClass = styles.tooHigh;
  } else {
    message = "📉 Too low!";
    statusClass = styles.tooLow;
  }

  return (
    <div className={`${styles.statusContainer} ${statusClass}`}>
      <p className={styles.statusText}>{message}</p>
    </div>
  );
}

export default GameStatus;

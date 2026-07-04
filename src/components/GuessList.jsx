// src/components/GuessList.jsx
import styles from "./GuessList.module.css";

function GuessList({ guesses }) {
  if (guesses.length === 0) return null;

  return (
    <div className={styles.historyContainer}>
      <h3>Past Guesses ({guesses.length})</h3>
      <ul className={styles.list}>
        {guesses.map((guess, index) => {
          // Calculate reverse index so the most recent guess shows at the top
          const displayIndex = guesses.length - index;

          let hintClass = "";
          if (guess.result === "Correct!") hintClass = styles.correctBadge;
          else if (guess.result === "Too high") hintClass = styles.highBadge;
          else hintClass = styles.lowBadge;

          return (
            <li key={guess.id} className={styles.listItem}>
              <span className={styles.guessNumber}>
                Attempt #{displayIndex}:
              </span>
              <span className={styles.guessedValue}>{guess.value}</span>
              <span className={`${styles.badge} ${hintClass}`}>
                {guess.result}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GuessList;

## Activity — [Number Guessing Game](https://github.com/su-ntu-sctp/ai-2.4-coaching/blob/main/lesson.md) (~2 hours)

### The Brief

Build a number guessing game in React. The app sets a secret number between 1 and 20, accepts guesses from the user, and tells the user whether each guess is too high, too low, or correct.

This activity only requires the concepts you have already learned:

- `useState`
- Event handling
- Props and callbacks
- Component functions
- Conditional rendering
- CSS Modules

### Core Requirements

1. A secret number is fixed between 1 and 20. You may hard-code it as a constant to start.
2. The user can type a number into an input field and submit it.
3. After each guess, the app displays one of three status messages: "Too high!", "Too low!", or "Correct! You guessed it!"

### Getting Started

Create a new Vite project for this activity. Keep it separate from the CRM project.

```bash
npm create vite@latest guess-game -- --template react
cd guess-game
npm install
npm run dev
```

> **Before writing any JSX**, spend a few minutes on paper (or in a comment block) sketching:
>
> - What components will you create?
> - What state does each component need?
> - What props will each component receive?
>
> Planning upfront saves debugging time later.

### Hints

1. Start with everything in `App.jsx`. Get the core loop working (input, submit, status message) before splitting into components.
2. The status message can be derived from the last guess; you do not need a separate `useState` for it.
3. When you are ready to split components, think about which piece of UI has one clear job: the input form, the status display, the past guesses list.
4. To prevent crashing on non-numeric input, use `parseInt(guess, 10)` and check for `NaN` before evaluating the guess.

---

### Challenge Features

Once the core requirements work, attempt as many of these as time allows. They are listed in order of difficulty.

**1. Reset the game**

Add a "Play Again" button that resets the game to its initial state. The secret number and all past guesses should clear.

**2. Generate a random secret number**

Replace the hard-coded secret number with `Math.floor(Math.random() * 20) + 1`. Call this when the component first renders and again when the player resets.

**3. Display past guesses**

Keep a list of every guess the player has made. Render the list below the input, showing each guess and whether it was too high or too low. When the player resets, clear the list.

---

### Suggested Component Structure

You are free to structure your components however you like. Here is one approach to consider:

```
App
├── GameStatus       — displays the current status message
├── GuessInput       — controlled input + submit button
└── GuessList        — list of all past guesses
    └── GuessItem    — a single guess entry
```

Think about which component needs to own each piece of state, and what props each child needs to do its job.

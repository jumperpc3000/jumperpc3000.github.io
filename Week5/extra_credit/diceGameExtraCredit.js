// USER enters their name
// JavaScript rolls a random dice value from 1 to 6
// USER gets 6 chances to guess the value
// After each wrong guess, JavaScript says too high or too low
// If the guess is correct, the user wins
// If all 6 guesses are used, the user loses
// At the end, JavaScript asks if the user wants to play again
// All interaction is done with prompt() and alert()

const userName = prompt("Hi there! What is your name?");

startGame();

function startGame() {
  alert(
    `Welcome ${userName || "player"}! In this dice game, JavaScript rolls a number from 1 to 6. You have 6 chances to guess it.`,
  );

  diceRollGame();
}

function diceRollGame() {
  const diceRoll = Math.ceil(Math.random() * 6);
  let guess;
  let winner = false;
  const maxGuesses = 6;

  for (let x = 1; x <= maxGuesses; x++) {
    guess = Number(
      prompt(
        `${userName || "Player"}, guess a number from 1 to 6.\nAttempt ${x} of ${maxGuesses}.`,
      ),
    );

    if (Number.isNaN(guess) || guess < 1 || guess > 6) {
      alert(
        "That is not a valid guess. Please enter a whole number from 1 to 6.",
      );
    } else if (guess === diceRoll) {
      alert(
        `Congrats ${userName || "player"}! You won! The dice value was ${diceRoll}.`,
      );
      winner = true;
      break;
    } else if (guess > diceRoll) {
      alert("Too high! Try a smaller number.");
    } else {
      alert("Too low! Try a bigger number.");
    }
  }

  if (winner === false) {
    alert(
      `Sorry ${userName || "player"}, you did not win this round. The dice value was ${diceRoll}.`,
    );
  }

  playAgain();
}

function playAgain() {
  let tryAgain = Number(
    prompt("Would you like to play again?\nEnter 1 for yes or 2 for no."),
  );

  while (tryAgain !== 1 && tryAgain !== 2) {
    tryAgain = Number(prompt("Please enter only 1 for yes or 2 for no."));
  }

  if (tryAgain === 1) {
    diceRollGame();
  } else {
    alert(`Thanks for playing, ${userName || "player"}!`);
  }
}

// USER: provide name
// JAVASCRIPT: is to generate a random number between 1-10
// USER: has 6 chances to get the number
// IF USER WINS: Success
// IF NOT: failure

const userName = prompt("Hi there! What's your name?"); // these are global variables

// this will save it as a string

// have Javascript generate a CONSTANT value for us to compare

const diceRoll = Math.ceil(Math.random() * 6); // these are global variables
console.log(`JavaScript has rolled ${diceRoll}`);

diceRollGame();

function diceRollGame() {
  alert(`JavaScript has rolled ${diceRoll}`);
  let guess;
  let winner = false;
  for (let x = 0; x < 7; x++) {
    guess = Number(prompt("Guess what number I'm thinking of between 1-6"));
    if (guess == diceRoll) {
      alert("Congrats! You won!");
      winner = true;
      break;
    }
  }

  if (winner == false) {
    let tryAgain = Number(
      prompt(
        ":( Not a winner, sorry. The Javascript value was " +
          diceRoll +
          "Play again? 1 for yes, 2 for no.",
      ),
    );

    if (tryAgain == 1) {
      diceRollGame();
    } else {
      alert("Thanks for playing!");
    }
  }
}

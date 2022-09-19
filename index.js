"use strict";

let secretNum = Number(Math.ceil(Math.random() * 10));
console.log(secretNum);

(function userGuess() {
  let count = 1;
  let max = 3;
  let guess = Number(prompt("Guess a number between 1 - 10:"));

  while (guess !== secretNum && count < max) {
    guess = Number(prompt("Nope, sorry... please try again."));
    count++;
  }

  if (guess == secretNum && count <= max) {
    alert(`Success, the number was ${secretNum}! Attempts: ${count}`);
  } else {
    alert(
      `Sorry, you failed to guess the number in three attempts. The number was ${secretNum}`
    );
  }
})();

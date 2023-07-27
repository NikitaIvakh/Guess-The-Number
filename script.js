"use strict";

let secret_Number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high_Score = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessing_Number = +document.querySelector(".number-input").value;
  console.log(guessing_Number, typeof guessing_Number);

  if (!guessing_Number) {
    document.querySelector(".guess-message").textContent =
      "Enter a number!";
  }

  else if (guessing_Number === secret_Number) {
    document.querySelector(".guess-message").textContent = "You have won!";
    document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)";
    document.querySelector(".question").style.width = "50rem";
    document.querySelector(".question").textContent = secret_Number;

    if (score > high_Score) {
      high_Score = score;
      document.querySelector(".highscore").textContent = high_Score;
    }
  }

  else if (guessing_Number !== secret_Number) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent =
        guessing_Number > secret_Number
          ? "The number is less!"
          : "The number is bigger!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "You've lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret_Number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".question").textContent = "???";
  document.querySelector(".question").style.width = "25rem";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".number-input").value = "";
  document.querySelector(".guess-message").textContent = "Start guessing!";
  document.querySelector(".score").textContent = score;
});
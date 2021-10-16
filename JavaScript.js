"use strict";

let score = 10;
let highscore = 0;

let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");

document.querySelector(".restart-btn").addEventListener("click", () => {
  score = 10;
  randomNumber = Math.round(Math.random() * 10);
  secretNumber = document.querySelector(".generated").value = randomNumber;
  document.querySelector(".slide").style.display = "block";
  document.querySelector(".message").innerHTML = "Start guessing...";
  document.querySelector(".score-number").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").style.backgroundColor = "black";
});

let randomNumber = Math.round(Math.random() * 10);
let secretNumber = (document.querySelector(".generated").value = randomNumber);
console.log(randomNumber);

checkBtn.addEventListener("click", () => {
  let guessed = Number(guess.value);
  console.log(guessed, typeof Number(guess.value));

  if (!guessed) {
    document.querySelector(".message").innerHTML = "No Number!";

    // when wins
  } else if (guessed === secretNumber) {
    document.querySelector(".message").innerHTML = "Correct Number 😊";
    document.querySelector(".generated").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";

    document.querySelector(".slide").style.display = "none";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore-number").textContent = highscore;
    }
  } else if (guessed > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").innerHTML = "it's too high ";
      score--;
      document.querySelector(".score-number").textContent = score;
      score;
    } else {
      document.querySelector(".message").innerHTML = "You lost the game 😖";
      document.querySelector(".score-number").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#E40010";
      document.querySelector(".guess").style.backgroundColor = "#E40010";
      document.querySelector(".slide").style.display = "none";
    }
  } else if (guessed < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").innerHTML = "it's too low :(";
      score--;
      document.querySelector(".score-number").textContent = score;
      score;
    } else {
      document.querySelector(".message").innerHTML = "You lost the game 😖";
      document.querySelector(".score-number").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#E40010";
      document.querySelector(".guess").style.backgroundColor = "#E40010";
      document.querySelector(".slide").style.display = "none";
    }
  }
});

var userInput = document.getElementById('userInput');
var userOutput = document.getElementById('userOutput');
var compOutput = document.getElementById('compOutput');
var userImg = document.getElementById('userImg');
var compImg = document.getElementById('compImg');
var result = document.getElementById('rpsResult');
var error = document.getElementById('error');

function toHTML(id, output) {
  id.innerHTML = output;
}

function isValid() {
  userMove = userInput.value.toLowerCase();
  if (userMove === "rock" || userMove === "paper" || userMove === "scissors") {
    game();
    error.style.display = "none";
    userInput.value = "";
  } else if (userMove == "") {
    error.style.display = "none";
    toHTML(userOutput, "");
    toHTML(compOutput, "");
    toHTML(result, "");
  } else {
    userImg.style.display = "none";
    compImg.style.display = "none";
    error.style.display = "block";
    toHTML(userOutput, "");
    toHTML(compOutput, "");
    toHTML(result, "");
  }
}

function game() {
  toHTML(userOutput, "You chose to play " + userMove.bold() + '.');
  computerMove();
  rpsImg();
  decision(userMove, compMove);
}

function computerMove() {
  compMove = Math.random();
  if (compMove < 0.34) {
    compMove = "rock";
  } else if (compMove < .67) {
    compMove = "paper";
  } else {
    compMove = "scissors";
  }
  toHTML(compOutput, "The computer played " + compMove.bold() + '.');
}

function rpsImg() {
  userImg.style.display = "inline";
  compImg.style.display = "inline";
  userImg.src = "img/" + userMove + ".png";
  compImg.src = "img/" + compMove + ".png";
  console.log(userImg.src);
}

function decision(move1, move2) {
  if (move1 === move2) {
    toHTML(result, "You Tied!");
  } else if (move1 === "rock" && move2 === "scissors") {
    toHTML(result, "You won!");
  } else if (move1 === "paper" && move2 === "rock") {
    toHTML(result, "You won!");
  } else if (move1 === "scissors" && move2 === "paper") {
    toHTML(result, "You won!");
  } else {
    toHTML(result, "You lost!");
  }
}

function rpsReset() {
  error.style.display = "none";
  userImg.style.display = "none";
  compImg.style.display = "none";
  userInput.value = "";
  toHTML(userOutput, "");
  toHTML(compOutput, "");
  toHTML(result, "");
}

userInput.addEventListener('change', function() {
  isValid();
});
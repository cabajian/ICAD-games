var rpsChoices = document.querySelectorAll('input[name="rpsChoice"]');
var runRPS = document.getElementById('runRPS');
var userMove;
var userOutput = document.getElementById('userOutput');
var compOutput = document.getElementById('compOutput');
var userImg = document.getElementById('userImg');
var compImg = document.getElementById('compImg');
var result = document.getElementById('rpsResult');

function toHTML(id, output) {
  id.innerHTML = output;
}

function Radio(){
  for (var i = 0; i < rpsChoices.length; i++)   {
    if (rpsChoices[i].checked) {
      userMove = rpsChoices[i];
    }
  }
}

runRPS.addEventListener("click", game);

function game() {
	Radio();
  toHTML(userOutput, "You chose to play " + userMove.value.bold() + '.');
  computerMove();
  rpsImg();
  decision(userMove.value, compMove);
}

function computerMove() {
  compMove = Math.random();
  if (compMove < 0.34) {
    compMove = "Rock";
  } else if (compMove < .67) {
    compMove = "Paper";
  } else {
    compMove = "Scissors";
  }
  toHTML(compOutput, "The computer played " + compMove.bold() + '.');
}

function rpsImg() {
  userImg.style.display = "inline";
  compImg.style.display = "inline";
  userImg.src = "img/" + userMove.value.toLowerCase() + ".png";
  compImg.src = "img/" + compMove + ".png";
}

function decision(move1, move2) {
  if (move1 === move2) {
    toHTML(result, "You Tied!");
  } else if (move1 === "Rock" && move2 === "Scissors") {
    toHTML(result, "You won!");
  } else if (move1 === "Paper" && move2 === "Rock") {
    toHTML(result, "You won!");
  } else if (move1 === "Scissors" && move2 === "Paper") {
    toHTML(result, "You won!");
  } else {
    toHTML(result, "You lost!");
  }
}

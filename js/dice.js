var roll = document.getElementById("roll");
var diceOutput = document.getElementById("diceOutput");
var diceResult = document.getElementById("diceResult");
var firstDice = document.getElementById("firstDice");
var secondDice = document.getElementById("secondDice");
var dicePic = new Array("img/dice-one.png", "img/dice-two.png", "img/dice-three.png", "img/dice-four.png", "img/dice-five.png", "img/dice-six.png");

function toHTML(id, output) {
  id.innerHTML = output;
}

function diceGen() {
  dice1 = Math.floor(Math.random() * 6);
  dice2 = Math.floor(Math.random() * 6);
  dice = dice1 + dice2 + 2;
  toHTML(diceOutput, "You rolled " + dice.toString().bold() );
}

function diceImg() {
  firstDice.style.display = "inline";
  secondDice.style.display = "inline";
  firstDice.src = dicePic[dice1];
  secondDice.src = dicePic[dice2];
}

function diceOutcome() {
  if (dice === 2 || dice === 3 || dice === 12) {
    toHTML(diceResult, "Sorry, you lost.");
  } else if (dice === 7 || dice === 11 ) {
    toHTML(diceResult, "Congratulations, you won!");
  } else {
    toHTML(diceResult, "You get to re-roll.");
  }
}

function diceReset() {
  toHTML(diceResult, "");
  toHTML(diceOutput, "");
  firstDice.src = "img/dice-blank.png";
  secondDice.src = "img/dice-blank.png";
}

roll.addEventListener('click', function() {
  diceGen();
  diceImg();
  diceOutcome();
});
let score = JSON.parse(localStorage.getItem(`storage`)) || {
  win: 0,
  loose: 0,
  draw: 0,
};
let userInput = "";
let userImg = "";
let compImg = "";
let computerMove = "";
let result = "";
function gameSetUp() {
  let rand = Math.floor(Math.random() * 9);
  if (rand < 3){
    computerMove = "scissors";
    
  }
  else if (rand < 6) computerMove = "paper";
  else computerMove = "rock";
}
document.querySelector(".scissor").onclick = () => {
  gameSetUp();
  userInput = "scissors";
  gameRule(computerMove, userInput);
  scoreUpdate();
  document.querySelector(".score-board").innerHTML = `<h2> ${result}</h2><br>
  you chosise <img src="pic/${userInput}-emoji.png" class="choice">and computer choose <img src="pic/${computerMove}-emoji.png" class="choice"><br> <br> <br>win:${score.win}  loose:${score.loose} draw:${score.draw}`;
};
document.querySelector(".paper").onclick = () => {
  gameSetUp();
  userInput = "paper";
  gameRule(computerMove, userInput);
  scoreUpdate();
  document.querySelector(".score-board").innerHTML = `<h2> ${result}</h2><br>
  you chosise <img src="pic/${userInput}-emoji.png" class="choice">and computer choose <img src="pic/${computerMove}-emoji.png" class="choice"><br> <br> <br>win:${score.win}  loose:${score.loose} draw:${score.draw}`;
};
document.querySelector(".rock").onclick = () => {
  gameSetUp();
  userInput = "rock";
  gameRule(computerMove, userInput);
  scoreUpdate();
  document.querySelector(".score-board").innerHTML = `<h2> ${result}</h2><br>
  you chosise <img src="pic/${userInput}-emoji.png" class="choice">and computer choose <img src="pic/${computerMove}-emoji.png" class="choice"><br> <br> <br>win:${score.win}  loose:${score.loose} draw:${score.draw}`;
};

document.querySelector(".reset").onclick = () => {
  score.win = 0;
  score.loose = 0;
  score.draw = 0;
  localStorage.removeItem(score);
  document.querySelector(".score-board").innerHTML = `<h2> ${result}</h2><br>
      you chosise <img src="pic/${userInput}-emoji.png" class="choice">and computer choose <img src="pic/${userInput}-emoji.png" class="choice"><br> <br> <br>win:${score.win}  loose:${score.loose} draw:${score.draw}`;
};

function gameRule(computerMove, userInput) {
  if (userInput === "scissors") {
    if (computerMove === "scissors") result = "TIE.";
    else if (computerMove === "rock") result = "YOU LOOSE.";
    else result = "YOU WIN.";
  } else if (userInput === "paper") {
    if (computerMove === "paper") result = "TIE.";
    else if (computerMove === "scissors") result = "YOU LOOSE";
    else result = "YOU WIN.";
  } else {
    if (computerMove === "rock") result = "TIE.";
    else if (computerMove === "paper") result = "YOU LOOSE.";
    else result = "YOU WIN.";
  }
}

function scoreUpdate() {
  if (result === `TIE.`) score.draw += 1;
  else if (result === `YOU WIN.`) score.win += 1;
  else score.loose += 1;
  localStorage.setItem(`storage`, JSON.stringify(score));
}

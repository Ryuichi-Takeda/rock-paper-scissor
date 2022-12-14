const player_point = document.getElementById("player_point");
const computer_point = document.getElementById("computer_point");
const intro_start = document.getElementById("intro_start");
const game = document.getElementById("game");
const intro = document.getElementById("intro");
const order = document.getElementById("order");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const paper = document.getElementById("paper");
var choices = document.querySelectorAll(".optionContainer>div");

intro_start.addEventListener("click", function () {
  intro.classList.add("none");
  game.classList.remove("none");
});

var playerPoints = 0;
var computerPoints = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    if (computerNumber == 1) {
      computerChoice.src = "./assets/rock.png";
    } else if (computerNumber == 2) {
      computerChoice.src = "./assets/paper.png";
    } else {
      computerChoice.src = "./assets/scissors.png";
    }

    playerChoice.src = this.getAttribute("data-choice");
    var computerNumber = Math.ceil(Math.random() * 3);
    var playerNumber = this.getAttribute("data-number");
    playerNumber = Number(playerNumber); //数字にする

    if ((playerNumber - 1) % 3 == computerNumber % 3) {
      //playerの勝ち
      playerPoints += 1;
      order.textContent = "Player wins";
    } else if ((playerNumber + 1) % 3 == computerNumber % 3) {
      //computerの勝ち
      computerPoints += 1;
      order.textContent = "Computer wins";
    } else {
      order.textContent = "It's a tie";
    }
    //表示
    player_point.textContent = playerPoints;
    computer_point.textContent = computerPoints;
  });
});

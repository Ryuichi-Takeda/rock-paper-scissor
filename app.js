const player_point = document.getElementById("player_point");
const computer_point = document.getElementById("computer_point");
const intro_start = document.getElementById("intro_start");
const game = document.getElementById("game");
const intro = document.getElementById("intro");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const paper = document.getElementById("paper");
var choices = document.querySelectorAll(".optionContainer>div");

var playerPoints = 0;
var computerPoints = 0;

choices.forEach(choice =>{
  choice.addEventListener('click',function(){
    playerChoice.src=this.getAttribute("data-choice");
    var computerNumber =  Math.ceil(Math.random() * 3);
    
    // console.log(number);
    if(computerNumber==1){
      // console.log('ok');
      computerChoice.src="./assets/rock.png";
    } else if(computerNumber==2) {
      computerChoice.src="./assets/paper.png";
    } else {
      computerChoice.src="./assets/scissors.png";
    }
    var playerNumber = this.getAttribute("data-number");
    // playerNumber = playerNumber + 0;
    playerNumber = Number(playerNumber);//数字にする
    // console.log(playerNumber);
    if((playerNumber-1)%3 == computerNumber%3){//playerの勝ち
      playerPoints = playerPoints+1;
    }else if((playerNumber+1)%3 == computerNumber%3){
      computerPoints = computerPoints+1;
    }
    var array1 = [playerPoints,computerPoints];
    var array2 = [playerNumber,computerNumber];
    player_point.textContent = playerPoints;
    computer_point.textContent = computerPoints;
    console.log(array2);
    // console.log((playerNumber-1)%3);
  })
});


// paper.addEventListener('click',function(){
//   playerChoice.src=this.getAttribute("data-choice");
//   // console.log('OK');
// });


intro_start.addEventListener('click',function(){
  intro.classList.add('none');
  game.classList.remove('none');
});


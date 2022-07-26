let Player1Health = 100;
let Player2Health = 100;
let player1score = 0;
let player2score = 0;
let rounds = 0;

// Initial Set Player health to 100%
document.getElementById("OneScore").innerText = Player1Health + "%";
document.getElementById("TwoScore").innerText = Player2Health + "%";

// Dom Targeting

let gameview = document.getElementById("gameview");


//  Starting of the game
function startGame() {
  gameview.style.display = "flex";
  document.getElementById("gameStartButton").style.display = "none";
  document.getElementById("gameBtn").style.display = "none";
}

//  Shooting which Ultimately decreases the player health and give the score to the players

function shoot() {
 
  // Getting some random values to use it for decresing health

  var player1fire = Math.floor(Math.random() * 5); //It will print the number between 0-5
  var player2fire = Math.floor(Math.random() * 5);

  Player1Health = Player1Health - player2fire;  
  Player2Health = Player2Health - player1fire;

  document.getElementById("OneScore").innerText = Player1Health + "%";
  document.getElementById("TwoScore").innerText = Player2Health + "%";



  // If Player-1 Health decreses to 0 before player-2

  if (Player1Health <= 0) {
    player2score = player2score + 1;
    document.getElementById("btn").disabled = "true";
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").innerHTML = "Player 2 Won";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("player2").innerText = player2score;
  }



  //  If Player-2 Health decreses to 0 before player-1

  if (Player2Health <= 0) {
    player1score = player1score + 1;
    document.getElementById("btn").disabled = "true";
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").innerHTML = "Player 1 Won";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("player1").innerText = player1score;
  }

  //If both player Simultaneously reaches health (0 or < 0)so that the score will be non added

  if (Player1Health <= 0 && Player2Health <= 0) {
    document.getElementById("playBtn").style.display = "block";
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("btn").style.backgroundColor = "grey";
    player1score = player1score;
    player2score = player2score;
  }

  //If player-1 had a wins 3 times from 5 matches. Player-1 win the game

  if (player1score === 3) {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("whoWon").innerText =
      "🎉 Congratulations Player 1 Won the Tournament";
    document.getElementById("whoWon").style.display = "flex";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("playBtn").style.display = "none";
  }

  //If player-2 had a wins 3 times from 5 matches. Player-2 win the game

  if (player2score === 3) {
    document.getElementById("btn").disabled = "true";
    document.getElementById("btn").innerHTML = "Game Over";
    document.getElementById("whoWon").innerText =
      " 🎉 Congratulations Player 2 Won the Tournament";
    document.getElementById("whoWon").style.display = "flex";
    document.getElementById("btn").style.backgroundColor = "grey";
    document.getElementById("playBtn").style.display = "none";
  }

  // If Five Rounds Get Completed and score of both player is less than 3

  if (rounds == 5) {
    if (player1score < 3 && player2score < 3) {
      document.getElementById("whoWon").innerText = "Match Draw";
      document.getElementById("btn").disabled = "true";
      document.getElementById("btn").style.backgroundColor = "grey";
    }
  }
}

// The game will continue until the required score is reached .
function playAgain() {
  document.getElementById("btn").disabled = false;
  document.getElementById("btn").innerHTML = "Shoot";
  document.getElementById("playBtn").style.display = "none";
  Player1Health = 100;
  Player2Health = 100;
  document.getElementById("OneScore").innerText = Player1Health;
  document.getElementById("TwoScore").innerText = Player2Health;
  document.getElementById("btn").style.backgroundColor = "crimson";
}





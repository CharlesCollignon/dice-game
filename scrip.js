// Variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

const playerOne = document.getElementsByClassName('player1')
const playerTwo = document.getElementsByClassName('player2')
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function displayReset() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "inline-block"
}

function displayNewGame() {
    rollBtn.style.display = "inline-block"
    resetBtn.style.display = "none"
}

function loser(loser) {
    loser.classList.add("loser")
    loser.classList.remove("active")
}

function winner(winner) {
    winner.classList.add("winner")
    winner.classList.remove("active")
}


function handleClick() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
     
    if (player1Turn) {
        message.innerText = "Player two turn !"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        player1Dice.innerText = randomNumber
        player1Score += randomNumber
        player1Scoreboard.innerText = player1Score
        player1Turn = false
    } else {
        message.innerText = "Player one turn !"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        player2Dice.innerText = randomNumber
        player2Score += randomNumber
        player2Scoreboard.innerText = player2Score
        player1Turn = true
    }

    if (player1Score >= 20) {
        loser(player2Dice)
        winner(player1Dice)
        message.innerText = "Player one has won !! 🎉"
        displayReset()
    } else if (player2Score >= 20 ) {
        loser(player1Dice)
        winner(player2Dice)
        message.innerText = "Player two has won !! 🎉"
        displayReset()
    }
}

function resetGame() {
    displayNewGame()
    message.innerText = "New game !"
    player1Dice.classList.remove("loser")
    player2Dice.classList.remove("loser")
    player1Dice.classList.remove("winner")
    player2Dice.classList.remove("winner")
    player1Scoreboard.innerText = 0
    player2Scoreboard.innerText = 0
    player1Dice.innerText = 0
    player2Dice.innerText = 0
    player1Score = 0
    player2Score = 0
}

rollBtn.addEventListener("click", handleClick)
resetBtn.addEventListener("click", resetGame)
 
 
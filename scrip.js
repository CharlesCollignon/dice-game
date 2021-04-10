// Variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

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
        message.innerText = "Player one has won !! 🎉"
        displayReset()
    } else if (player2Score >= 20 ) {
        message.innerText = "Player two has won !! 🎉"
        displayReset()
    }
}

function resetGame() {
    displayNewGame()
    message.innerText = "New game !"
    player1Scoreboard.innerText = 0
    player2Scoreboard.innerText = 0
    player1Dice.innerText = 0
    player2Dice.innerText = 0
    player1Score = 0
    player2Score = 0
}

rollBtn.addEventListener("click", handleClick)
resetBtn.addEventListener("click", resetGame)
 
 
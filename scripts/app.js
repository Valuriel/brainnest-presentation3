// Constants to save the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function that determines the computer's play behaviour
const computerPlay = () => {  
    const choices=["rock","paper","scissors"]; 
    return choices[Math.floor(Math.random() * choices.length)]
};

// Main game logic
const playRound = (playerSelection,computerSelection) => {
    if (playerSelection === computerSelection) {
        return console.log(`It's a tie! Both oppenents picked ${playerSelection}!`)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return console.log(`You lost! Rock crushes Scissors!`)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return console.log(`Player wins! Scissors cuts Paper!`)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return console.log(`You lost! Paper covers Rock!`)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return console.log(`Player wins! Rock crushes Scissors!`)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return console.log(`You lost! Scissors cuts Paper!`)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return console.log(`Player wins! Paper covers Rock!`)
    }
};

// Game loop for 5 rounds
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Take your pick!', 'Rock, Paper, Scissors').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore) {
        return 'You finished off the computer! Great play!'
    } else if (playerScore < computerScore) {
        return 'You got beaten by the computer! Shame on you!'
    } else {
        return 'Draw game! Maybe next round shows a winner!'
    }
}
//displaying the games' scores to the console
console.log(game());
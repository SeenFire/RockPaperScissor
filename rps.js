
// will be attepmting to make a rock paper scissor game,
//which will be played entirely in the console.//
function getComputerChoice() {
    let choices = Math.random()
    if (choices <= 0.33) {
        return "Rock"
    } else if (choices <= 0.66) {
        return "Paper"
    } else if (choices > 0.66) {
        return "Scissor"
    }
}

//step 2//

function getHumanChoice() {
    const HumChoice = prompt("Please choose, Rock, Paper or Scissor: ");
    return HumChoice;
}

// step 4 //
// here i will write variables to keep track of the players score//
let humanScore = 0;
let computerScore = 0;

// step 5//

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log("human: ", humanChoice); 
    console.log( "computer: ", computerChoice);
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! Rock Beats Scissor!");
        humanScore++;
    } else if (humanChoice === "scissor" && computerChoice === "paper" ) {
        console.log("you win! scissor beats paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose, Rock beats Scissor!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose, Paper beats Rock! ");
        computerScore++;
    } else if (computerChoice === "scissor" && humanChoice === "paper") {
        console.log("You lose!, Scissor beats Paper");
        computerScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);



/*function getComputerChoice(){
    let randomNum = Math.random();

    if (randomNum < 0.34) {
        return "rock";

    }else if (randomNum < 0.67){
        return "paper";
    }else {
        return "scissors";
    }

}
for (let i = 0; i < 10; i++){
    console.log(getComputerChoice());
}

function getHumanChoice(){
    let userInput = prompt("Enter your choice: rock, paper or scissors");
    return userInput;
}
console.log("You chose:", getHumanChoice());

let humanScore = 0;
let computerScore =0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
} */
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
       let randomNum = Math.random();

    if (randomNum < 0.34) {
        return "rock";

    }else if (randomNum < 0.67){
        return "paper";
    }else {
        return "scissors";
    }  
    }

    function getHumanChoice() {
        let userInput = prompt("Enter your choice: rock, paper orscissors");
        return userInput;
    }
    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;

    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

console.log("Final Score:");
console.log("You:", humanScore, "Computer:", computerScore);

if (humanScore > computerScore) {
    console.log("Congratulations, you  win the game!");
}else if( computerScore > humanScore) {
    console.log("Sorry! you lost the game");
}else {
    console.log("it's a draw!")
}
}

playGame();
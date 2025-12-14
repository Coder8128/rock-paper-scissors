// Button creation and assigning event listeners
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", playRound);
btnPaper.addEventListener("click", playRound);
btnScissors.addEventListener("click", playRound);

function check(e) {
    console.log(e.target.value);
}

//Create tag elements
const sect = document.querySelector(".resultArea");
const compTxt = document.createElement("h2");
const humnTxt = document.createElement("h2");
const verdict = document.createElement("h2");

verdict.textContent = "See if you can beat the computer";
sect.appendChild(verdict);


//Generate random computer choice
function getComputerChoice() {
    let x = "rock";
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            x = "rock";
            break;
        case 1:
            x = "paper";
            break;
        case 2:
            x = "scissors";
            break;
    }
    return x;
}

function getHumanChoice() {
    return prompt("Input ur choice: ");
}

let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;

function playRound(e) {

    let humn = e.target.value.toUpperCase();
    let comp = getComputerChoice().toUpperCase();
    // let comp = "ROCK";

    if ((comp == humn)) {
        humanScore++;

        compTxt.textContent = "Computer: " + comp;
        humnTxt.textContent = "You draw: " + humn;
        verdict.textContent = `It's a draw!`;

        sect.appendChild(compTxt);
        sect.appendChild(humnTxt);

        sect.appendChild(verdict);
    }
    else if (comp == "ROCK" && humn == "PAPER") {
        humanScore++;

        compTxt.textContent = "Computer: " + comp;
        humnTxt.textContent = "You draw: " + humn;
        verdict.textContent = `You win ${humn} beats ${comp}`;

        sect.appendChild(compTxt);
        sect.appendChild(humnTxt);

        sect.appendChild(verdict);

    }
    else if (comp == "PAPER" && humn == "SCISSORS") {
        humanScore++;

        compTxt.textContent = "Computer: " + comp;
        humnTxt.textContent = "You draw: " + humn;
        verdict.textContent = `You win ${humn} beats ${comp}`;

        sect.appendChild(compTxt);
        sect.appendChild(humnTxt);

        sect.appendChild(verdict);
    }
    else if (comp == "SCISSORS" && humn == "ROCK") {
        humanScore++;

        compTxt.textContent = "Computer: " + comp;
        humnTxt.textContent = "You draw: " + humn;
        verdict.textContent = `You win ${humn} beats ${comp}`;

        sect.appendChild(compTxt);
        sect.appendChild(humnTxt);

        sect.appendChild(verdict);
    }
    else {
        computerScore++;

        compTxt.textContent = "Computer: " + comp;
        humnTxt.textContent = "You draw: " + humn;
        verdict.textContent = `You lose! ${comp} beats ${humn}`;

        sect.appendChild(compTxt);
        sect.appendChild(humnTxt);

        sect.appendChild(verdict);
    }
    gameRounds++;

    //Final score comparator to determine the winner
    if (gameRounds >= 5) {

        sect.removeChild(compTxt);
        sect.removeChild(humnTxt);

        if (humanScore == computerScore) {
            verdict.textContent = `Game over! Computer: ${computerScore} You: ${humanScore}`;
        } else if (humanScore > computerScore) {
            verdict.textContent = `You win! Computer: ${computerScore} You: ${humanScore}`;
        } else {
            verdict.textContent = `Game over! You lose! Computer: ${computerScore} You: ${humanScore}`;
        }
    }
}




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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let humn = humanChoice.toUpperCase();
        let comp = computerChoice.toUpperCase();

        if (comp == "ROCK" && humn == "PAPER") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You win! Paper beats rock!")
            humanScore++;
        }
        else if (comp == "PAPER" && humn == "SCISSORS") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You win! Scissors beat paper!")
            humanScore++;
        }
        else if (comp == "SCISSORS" && humn == "ROCK") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You win! Rock beats scissors!")
            humanScore++;
        } //now losing
        else if (comp == "SCISSORS" && humn == "PAPER") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You lose! Scissors beats paper!")
            computerScore++;
        }
        else if (comp == "ROCK" && humn == "SCISSORS") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You lose! Rock beats scissors!")
            computerScore++;
        }
        else if (comp == "PAPER" && humn == "ROCK") {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("You lose! Paper beats rock!")
            computerScore++;
        } else {
            console.log("The computer draws " + comp);
            console.log("And you draw " + humn);
            console.log("It's a draw!")
        }
    }



    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    humanScore == computerScore ? console.log("It's a draw all the way! IMPOSSIBLE") : humanScore > computerScore ? console.log("You won the game!") : console.log("WOMP WOMP");

}
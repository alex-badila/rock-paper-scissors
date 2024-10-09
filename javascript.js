

const getComputerChoice = () => {
    // Choose a random number between 1 and 3
    let choiceNum = Math.round(Math.random() * 2) + 1;
    // Translate that number into rock, paper, or scissors and return it
    if(choiceNum == 1) {
        return "rock";
    }
    else if(choiceNum == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const playGame = () => {
    // Declare the variables for the score and initialize them to 0
    let humanScore = 0;
    let computerScore = 0;

    
    let button = document.querySelectorAll(".btn");
    let container = document.getElementById("container");

    // Add an event listener for all three buttons
    // If one of them is clicked, play a round with the computer
    button.forEach(item => {
        item.addEventListener('click', event => {
            let result = playRound(item.textContent, getComputerChoice());
            let para = document.createElement("p");
            para.textContent = result;
            container.appendChild(para);

            // Announce the winner once someone reaches the score of 5
            if(humanScore == 5) {
                let win_para = document.createElement("p");
                win_para.textContent = "Congratulations! You win!";
                container.appendChild(win_para);
            }
            else if(computerScore == 5) {
                let lose_para = document.createElement("p");
                lose_para.textContent = "Sorry! You lose!";
                container.appendChild(lose_para);
            }
        })
    })

    

    // Declare playRound as a function inside playGame
    const playRound = (humanChoice, computerChoice) => {
        // Lowercase the values so case doesn't matter
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        // Play the game rock-paper-scissors between the human and the computer
        // Go through each possibility one by one until one matches
        // Then increment the corresponding score and return the appropriate string
        if(humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return `You lose! Paper beats rock! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return `You win! Rock beats scissors! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "rock" && computerChoice == "rock") {
            return `Tie game! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return `You lose! Scissors beats paper! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return `You win! Paper beats rock! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "paper" && computerChoice == "paper") {
            return `Tie game! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return `You lose! Rock beats scissors! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return `You win! Scissors beats paper! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else if(humanChoice == "scissors" && computerChoice == "scissors") {
            return `Tie game! Human: ${humanScore} Computer: ${computerScore}`;
        }
        else {
            return "Invalid input";
        }
    }

    
}

playGame();



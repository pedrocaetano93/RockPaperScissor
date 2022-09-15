var el = document.getElementById('test');

game()

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'Rock';
        case 1: return 'Scissors';
        case 2: return 'Paper';
    };
}

function playRound(playerSelection, computerSelection) {
    let log = '';
 
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      log = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      log = 'You Win! Rock beats Scissors';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      log = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      log = 'You Win! Paper beats Rock';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      log = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      log = 'You Win! Scissors beats Paper';
    } else {
      log = "It's a tie";
    }
  }

  return log;
}

function game(params) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('Select Rock Paper scissor Option');
        const computerSelection = getComputerChoice();
        console.log(playRound(capitalize(playerSelection), capitalize(computerSelection)) );
    }

    function capitalize(string) {
        return (
          string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
        );
      }
}
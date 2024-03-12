// script.js

const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = calculateWinner(playerChoice, computerChoice);
    displayResult(result, computerChoice);
  });
});

function calculateWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if ((player === 'rock' && computer === 'scissors') ||
             (player === 'paper' && computer === 'rock') ||
             (player === 'scissors' && computer === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(result, computerChoice) {
  document.getElementById('result').textContent = `${result} Computer chose ${computerChoice}.`;
}

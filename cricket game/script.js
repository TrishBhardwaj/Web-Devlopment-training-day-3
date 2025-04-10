let score = 0;
let wickets = 0;

const hitButton = document.getElementById('hitButton');
const scoreDisplay = document.getElementById('score');
const wicketsDisplay = document.getElementById('wickets');
const messageDisplay = document.getElementById('message');

hitButton.addEventListener('click', () => {
    if (wickets < 10) {
        const result = Math.floor(Math.random() * 11); // Random number between 0 and 10
        if (result === 0) {
            wickets++;
            messageDisplay.textContent = "You're out! You lost a wicket.";
        } else {
            score += result;
            messageDisplay.textContent = `You scored ${result} runs!`;
        }
        updateScoreboard();
    } else {
        messageDisplay.textContent = "Game Over! You have lost all your wickets.";
        hitButton.disabled = true; // Disable the button when game is over
    }
});

function updateScoreboard() {
    scoreDisplay.textContent = score;
    wicketsDisplay.textContent = wickets;
}
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;


document.getElementById('guess-btn').addEventListener('click', function() {
    var userGuess = parseInt(document.getElementById('guessInput').value);
    var resultMessage = '';

    if (userGuess === randomNumber) {
        resultMessage = 'Congratulations! You guessed the correct number!';
    } else if (userGuess > randomNumber) {
        resultMessage = 'Too high! Try again.';
    } else if (userGuess < randomNumber) {
        resultMessage = 'Too low! Try again.';
    } else {
        resultMessage = 'Please enter a valid number.';
    }

    document.getElementById('result').textContent = resultMessage;
});

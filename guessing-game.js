function guessingGame() {
    let winningNum = Math.floor(Math.random() * 100);
    let count = 1;
    let won = false;
    return function (guess) {
        if (won) return "The game is over, you already won!"
        if (guess === winningNum) {
            won = true;
            return `You win! You found ${winningNum} in ${count} guesses.`
        }
        else if (guess > winningNum) {
            count++;
            return `${guess} is too high!`
        }
        else {
            count++;
            return `${guess} is too low!`
        }
    }

}

module.exports = { guessingGame };


let number = document.getElementById("number");
let noOfGuess = document.getElementById("guess");
let result = document.getElementById("result");
let playAgainBtn = document.getElementById("playAgain");

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);


let guessCount = 0;

function guessNumber() {
    const userGuess = number.value;

    if(userGuess === "") {
        result.innerHTML = "Please enter a number.";
        return;
    }

    guessCount++;
    noOfGuess.innerHTML = `No of Guesses: ${guessCount}`;

    if(userGuess.toLowerCase() === "quit") {
        result.innerHTML = " \u{1F6D1} You quit the game.";
        number.value = "";
    }
    else if(Number(userGuess) === randomNum){
        result.innerHTML = `You guessed it right! \u{1F389} It was ${randomNum}`;
        playAgainBtn.style.display = "inline-block";
        number.value = "";
    } 
    else if(Number(userGuess) > randomNum) {
        result.innerHTML = " \u{1F4C8} Too high! Try something smaller.";
        number.value = "";
    } 
    else if(Number(userGuess) < randomNum) {
        result.innerHTML = " \u{1F4C9} Too low! Try something bigger.";
        number.value = "";
    } 
    else {
        result.innerHTML = "Invalid input.";
        number.value = "";
    }
}

function resetGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    console.log(randomNum);
    guessCount = 0;
    number.value = "";
    result.innerHTML = "";
    noOfGuess.innerHTML = "";
    playAgainBtn.style.display = "none";
}
//alert("running external JS code!")
let myLuckyNumber = 7;

//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);
    attempts = 0;

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";

    //showing the Guess Button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    document.querySelector("#playerGuess").focus();//adding focus to textbox
    playerGuess.value = ""; //clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; //clearing the feedback

    //updating wins + losses
    document.querySelector("#wins").textContent = "Wins:" + wins;
    document.querySelector("#losses").textContent = "Losses:" + losses;

    //clearing previous guesses + attempts
    document.querySelector("#guesses").textContent = "";
    document.querySelector("#attemptCounter").textContent = "";
}

function checkGuess(){
    let attemptCounter = document.querySelector("#attemptCounter");
    attemptCounter.textContent = "";
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if(guess < 1||guess > 99){
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    attemptCounter.textContent = "Attempts:" + attempts;
    console.log("Attempts:" + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber){
        feedback.textContent = "You guessed it! You Won!";
        feedback.style.color = "darkgreen";
        wins++;
        gameOver();
    }else{
        document.querySelector("#guesses").textContent += guess + " ";
        if(attempts == 7){
            feedback.textContent = "Sorry, you lost!";
            feedback.style.color = "red";
            losses++;
            gameOver();
        }else if(guess > randomNumber){
            feedback.textContent = "Guess was high";
        }else{
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none"; //hides Guess Button
    resetBtn.style.display = "inLine"; //displays Reset Button
}

document.querySelector("h1").style.color = "red";
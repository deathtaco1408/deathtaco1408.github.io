//Event Listeners
document.querySelector("#submitBet").addEventListener("click", submitBet);
document.querySelector("#playButton").addEventListener("click", initializeGame);

//Global variables
let funds = 10000;
let bet = 0;
let attempts = 0;
let wins = 0;
let losses = 0;
const slotIcons = ["bars", "seven", "cherry"];

initializeGame();

function initializeGame(){
    let slotResults = [];
    for(let i = 0; i < 3; i++){
        let randomNumber = Math.floor(Math.random() * 2);
        slotResults.push(slotIcons[randomNumber])
    }
    
    attempts = 0;

    let playerBet = document.querySelector("#playerBet");
    document.querySelector("#playerBet").focus();//adding focus to textbox
    playerBet.value = ""; //clearing the textbox

    let currentBet = document.querySelector("#currentBet");
    currentBet.textContent = ""; //clearing the currentBet at the start of game

    //updating wins + losses
    document.querySelector("#wins").textContent = "Wins:" + wins;
    document.querySelector("#losses").textContent = "Losses:" + losses;
}

function submitBet(){
    let currentBet = document.querySelector("#currentBet");
    let playerBet = document.querySelector("#playerBet");
    currentBet.textContent = `${playerBet}`;
}


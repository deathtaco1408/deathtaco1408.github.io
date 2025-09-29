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
    document.getElementById("slotIconSpace").innerHTML = ""
    for(let i = 0; i < 3; i++){
        let randomNumber = Math.floor(Math.random() * 3);
        slotResults.push(slotIcons[randomNumber])
    }
    
    if(slotResults == (slotResults[1]===slotResults[2]&& slotResults[2]===slotResults[3])){
        wins++;
    }else{
        losses++;
    }

    console.log(slotResults);
    console.log(wins);

    
    attempts = 0;

    let playerBet = document.querySelector("#playerBet");
    document.querySelector("#playerBet").focus();//adding focus to textbox
    playerBet.value = ""; //clearing the textbox

    let currentBet = document.querySelector("#currentBet");
    currentBet.textContent = ""; //clearing the currentBet at the start of game

    for (let i = 0; i < slotResults.length; i++) {
        // let radioInput = document.createElement("input");
        let img = slotIconCheck(slotResults[i]);
        addImage(img, slotResults[i]);
    }


    //updating wins + losses
    document.querySelector("#wins").textContent = "Wins:" + wins;
    document.querySelector("#losses").textContent = "Losses:" + losses;
}

function submitBet(){
    let currentBet = document.querySelector("#currentBet");
    let playerBet = document.querySelector("#playerBet");
    currentBet.textContent = playerBet.value;
}

function slotIconCheck(input) {
  const str = input.toLowerCase().trim();

  if (str.includes("seven")) {
    return "img\\pngtree-number-seven-red-diamond-for-slots-casino-games-icon-isolated-png-image_3798386.jpg";
  } else if (str.includes("cherry") ) {
    return "img\\Cherry.png"; 
  } else {
    return "img\\176462640-bar-symbol-in-slot-machine-line-icon-gambling-concept-one-armed-bandit-vector-sign-on-white.jpg";
  }
}


function addImage(url, altText = "Image") {
    let img = document.createElement("img");

    img.src = url;
    img.alt = altText;
    img.width = 150; 

    let targetDiv = document.getElementById("slotIconSpace");
    targetDiv.appendChild(img);
  }

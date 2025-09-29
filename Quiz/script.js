


console.log("hello");

let submitButton = document.querySelector("#submit");
let a1Message = document.querySelector("#a1-result");
let a2Message = document.querySelector("#a2-result");
let dropdownMessage = document.querySelector("#dropdown-result");
let a3Message = document.querySelector("#a3-result");

let score = 0;

//random order of answers
let question3Options = [1, 2, 3, 4];

//shuffle
let shuffledOptions = _.shuffle(question3Options);

let question3Space = document.querySelector("#q3-space");

//create option 1
//repeat using a loop for other options

for (let i = 0; i < shuffledOptions.length; i++) {
    // let radioInput = document.createElement("input");
    let radioInput = document.createElement("input");
    let radioLabel = document.createElement("label");
    radioInput.id = shuffledOptions[i];
    
    radioInput.id = shuffledOptions[i];
    radioInput.type = "radio";
    radioInput.name = "q3-answers";
    radioInput.value = shuffledOptions[i];
    question3Space.appendChild(radioInput);

    
    radioLabel.for = shuffledOptions[i];
    radioLabel.textContent = shuffledOptions[i];
    question3Space.appendChild(radioLabel);
    question3Space.appendChild(document.createElement("br"));
}



submitButton.addEventListener("click", function(event) {
    let answer1 = document.querySelector("#a1").value;
    let answer2 = document.querySelectorAll("input[name = colors]:checked");
    let answer2Values = Array.from(answer2).map((checkbox) => checkbox.value);
    let dropdown = document.querySelector("#myDropdown").value;
    let answer3 = document.querySelector("input[name = q3-answers]:checked").value;
    if (answer1 === "gohan") {
        a1Message.textContent = "Correct!";
        score++;
    }
    else {
        a1Message.textContent = "Incorrect, the answer is Gohan";
    }
    if (answer2Values.includes("red") && answer2Values.includes("blue") && answer2Values.includes("green") && answer2Values.length === 3) {
        a2Message.textContent = "Correct!";
        score++;
    }
    else {
        a2Message.textContent="Incorrect, the answers are red, blue, and green";
    }
    if (dropdown === "dbz") {
        dropdownMessage.textContent = "Correct";
        score++;
    }
    else {
        dropdownMessage.textContent = "Incorrect, the answer is dbz";
    }
    if (answer3 === "4") {
        a3Message.textContent = "Correct";
        score++;
    }
    else {
        a3Message.textContent = "Incorrect, the answer is 4";
    }

    result.textContent = "Final Score: " + score + "/4";


    console.log(answer1);
    console.log(answer2Values);
    console.log(dropdown);
    console.log(answer3);

    // let answer2 = document.querySelector("input[name = colors]:checked").value;
    // console.log(answer2);

    


});
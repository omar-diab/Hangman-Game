// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {
    // Create Span
    let span = document.createElement("span");
    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);
    // Append The Letter To Span
    span.appendChild(theLetter);
    // Add Class On Span 
    span.className = 'letter-box';
    // Append Span To The Letters Container
    lettersContainer.appendChild(span); 
});

// Select Letter By Letter
let letterBoxs = document.querySelectorAll(".letter-box");

// [5] Now We Will Create The That Has The Words & Gategories
const words = {
    ide: ["php" , "javaScript" , "go" , "scala" , "fortran" , "r" , "my sql" , "python" , "html" , "css" , "java"],
    movies: ["prestige" , "inception" , "parasite" , "interstelar" , "whiplash" , "Memento" , "coco" , "Up"],
    people: ["alberteinstein" , "hitchcock" , "alexander" , "cleopatra" , "mahatmaghandi" , "omardiab"],
    countries: ["syria" , "palestine" , "yeman" , "egypt" , "qatar" , "saudiarabia" , "jordan" , "lebanon"],
    footballer: ["messi" , "cristiano" , "neymar" , "iniesta" , "xavi" , "modric" , "kroos"]
} 

// [6] Get Random Value From The Object
// ######################

// [A] Get Random Property Key From The Forth Keys
let allKeys = Object.keys(words);
// [B] Get Random Property Number To The Forth Keys 
let randomPropertyNumbur = Math.floor(Math.random() * allKeys.length);
// [C] Get Random Property Name To The Forth Keys 
let randomPropertyName = allKeys[randomPropertyNumbur];
// [D] Get Random Property Value From The Arrays 
let randomPropertyValue = words[randomPropertyName];
// [E] Get Random Property Value Number From The Arrays
let randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length);
// [F] Get Random Property Value Name From The Arrays 
let randomValueValue = randomPropertyValue[randomValueNumber];

// [7] Set Gategory Info
let wordchosen = document.querySelector(".game-info .category span").innerHTML = randomPropertyName;

// [8] Select Letters Guess Element 
let lettersGuessContainer = document.querySelector(".letters-guess");

// [9] Convert Chosen Word To Array
let letter = Array.from(randomValueValue);

// [10] Create Span Depened To Letters
letter.forEach(letter => {
    // [A] Create The Span
    let emptySpan = document.createElement("span");
    // [B] Append The Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
})

// [12] Selcect All Guess Span
let allGuessSpan = document.querySelectorAll(".letters-guess span");

// [14] Set The Wrong Attempts
let theWrongAttempts = 0;

// [15] Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");


// [B] Get The Chosen Word
let theChosenWord = Array.from(randomValueValue.toLowerCase());
console.log(theChosenWord);

// Ge
let wordLength = theChosenWord.length;

// 
let count = 0;

// [11] Handle Clicking On Letters 
letterBoxs.forEach(letterBox => {
    letterBox.addEventListener("click", (e) => {
        // [13] Set The Chose Status
        let theStatus = false;
        // [A] Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        if(theChosenWord.includes(theClickedLetter)) {
            allGuessSpan.forEach((span , spanIndex) =>{
                if(theClickedLetter === theChosenWord[spanIndex]){
                    count++;
                    span.innerHTML = theClickedLetter;
                    success();
                }
            })
        }else {
            draw();
        }
        letterBox.style.pointerEvents = "none";
        letterBox.style.backgroundColor = "#ccc";
    })
})

let draw = function() {
    theWrongAttempts++
    // Add Class Wrong On The Elements
    theDraw.classList.add(`wrong-${theWrongAttempts}`);
    // Play Fail Sound
    document.getElementById("fail").play();
    // Check About Number Of The Wrong Attempts
    if(theWrongAttempts === 8){
        gameOver();
        lettersContainer.classList.add("finished");
    }
}
let success = function() {
    // Play Success Sound
    document.getElementById("success").play();
    // Check if the game is successfully completed
    if(count === wordLength) {
        goodGame();
    }
}

// Game Over Function

function gameOver(){
    // Create Game Over Popup Div
    let div = document.createElement("div");
    // Create Text
    let divText = document.createTextNode(`Game Over, Try Again`);
    // Append Text To The Div
    div.appendChild(divText);
    // Add Class To The Div
    div.className = "game-over";

    // Create The Next Button
    let p = document.createElement("p");
    // Create Text
    let pText = document.createTextNode(`Again`);
    // Append Text To The Div
    p.appendChild(pText);
    // Add Class To The Div
    p.className = "again";

    // Append The Div To The Body
    document.body.appendChild(div);
    document.body.appendChild(p);
}

// Good Game Function

function goodGame(){
    // Create Good Game Popup Div
    let div = document.createElement("div");
    // Create Text
    let divText = document.createTextNode(`Good Game`);
    // Append Text To The Div
    div.appendChild(divText);
    // Add Class To The Div
    div.className = "good-game";
    // Create The Next Button
    let p = document.createElement("p");
    // Create Text
    let pText = document.createTextNode(`Next`);
    // Append Text To The Div
    p.appendChild(pText);
    // Add Class To The Div
    p.className = "next";
    // Append The Div & P To The Body
    document.body.appendChild(div);
    document.body.appendChild(p);
}

//  Next Level Step

document.addEventListener("click", (n) => {
    if (n.target.className.includes("again")) {
        location.reload();
    }
});
document.addEventListener("click", (n) => {
    if (n.target.className.includes("next")) {
        location.reload();
    }
});

// How many person Used The Game

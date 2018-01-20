/*  global variables declaration */
var wins = 0;
var losses=0;
var guessesRemaining = 10;
var lettersGuessed = [];



/* function  to start game ,displays the hidden letter to find , and allows user to strt entering letters*/

function displayLetter() {
    document.getElementById("computerLetter").innerHTML = "";
    document.getElementById("userLetter").innerHTML = "";
    document.getElementById("lettersGuessed").innerHTML = "";
    document.getElementById("guessesRemaining").innerHTML = "10";
    guessesRemaining = 10;
    lettersGuessed = [];
    var letterToFind =getComputerLetter();
    
    document.getElementById("computerLetter").innerHTML = "-";
    document.getElementById("computerLetterHidden").innerHTML = letterToFind;

    console.log("letter to find   " + letterToFind);
}

/*function to handle keypress event on start button click*/
document.getElementById("btnGamestart").onclick= function(){

    displayLetter();

    document.onkeyup = function(event) {
        var x = event.keyCode || event.which;
        var y = String.fromCharCode(x);
        if (x >= 65 && x <= 90 || x >= 97 && x <= 122) {
            document.getElementById("errorMsg").style.display = "none";
            document.getElementById("userLetter").innerHTML = y.toLowerCase();
            matchingLetters(y.toLowerCase());
        } else {
            document.getElementById("errorMsg").style.display = "block";
            document.getElementById("errorMsg").innerHTML = "Please enter letters from a-z";
        }
    }
}

/* function to find user entered letters match with the displayed letter  ,if it matches letters win count increases
otherwise loss count increases*/
function matchingLetters(letterEntered) {
    
    var computerLetterHidden = (document.getElementById("computerLetterHidden").innerHTML).toLowerCase();
    if (letterEntered===computerLetterHidden && guessesRemaining!=0) {
        document.getElementById("computerLetter").innerHTML = letterEntered;
         wins++;
        document.getElementById("wins").innerHTML = wins;
         displayLetter();
     }
     else if (letterEntered!=computerLetterHidden && guessesRemaining!=0)
     {
        lettersGuessed.push(letterEntered);
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
     }
     else if(guessesRemaining === 0){
        losses++;
        document.getElementById("losses").innerHTML = losses;
        displayLetter();

     }
    
}

/*function to randomly pick a letter for the user to guess*/
function getComputerLetter(){
    var emptyString = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    while (emptyString.length < 1) {
      emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
    } 
    return emptyString;
}


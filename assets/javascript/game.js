// wordlist of 50 capitals for 50 states to choose from
var wordList = ['montgomery', 'juneau', 'phoenix', 'little rock',
  'sacramento', 'denver', 'hartford', 'dover', 'tallahassee', 'atlanta', 'honolulu', 'boise', 'springfield', 'indianapolis', 'des moines', 'topeka', 'frankfort', 'baton rouge', 'augusta', 'annapolis', 'boston', 'lansing',
  'st.paul', 'jackson', 'jefferson city', 'helena', 'lincoln', 'carson city', 'concord', 'trenton', 'santa fe', 'albany', 'raleigh', 'bismarck', 'columbus', 'oklahoma city', 'salem', 'harrisburg', 'providence', 'columbia',
  'pierre', 'nashville', 'austin', 'salt lake city', 'montpelier', 'richmond', 'olympia', 'charleston', 'madison', 'cheyenne'
]

//variables
var chosenWord = "";
var letterInChosenWord = [];
var blanksAndSuccesses = [];
var wrongGuesses = [];
var numBlanks = 0;
var winCounter = 0;
var lossCounter = 1;
var numGuesses = 10;

// This function starts the game
function startGame() {

  //logs the wrong guesses
  wrongGuesses = [];
  console.log("this is the wrong guesses in startGame", wrongGuesses);
  numGuesses = 10;
  blanksAndSuccesses = [];

  //to choose the random word we use this formula inside of the wordlist array and we break it down to letters.
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  console.log(chosenWord);
  console.log(numBlanks)

  //for loop that replaces the lettersinchosenword with an underscore
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  //logs blanksAndSuccesses in an innerHTML to display to the user.
  console.log(blanksAndSuccesses);
  document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById('guesses-left').innerHTML = numGuesses;



}

//Starts the function letterChecks
function letterChecks(letter) {


  var letterInWord = false;
  //for loop nesting an if and else statements to show if the user picked or matched the letter is in the word or  if not then on the else statement.
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;

    }
  }

  if (letterInWord) {
    for (i = 0; i < numBlanks; i++) {
      if (chosenWord[i] === letter) {
        blanksAndSuccesses[i] = letter;

      }

    }
  } else {
    numGuesses--;
    wrongGuesses.push(letter);
  }




}
//Updates the HTML with letters thats in the word and determines the number of guesses and also the wrong guesses.
function roundComplete() {


  document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById('guesses-left').innerHTML = numGuesses;
  document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


  console.log(lettersInChosenWord);
  console.log(blanksAndSuccesses);
  if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
    winCounter++;
    alert("You win!!");
    document.getElementById('win-counter').innerHTML = winCounter;
    startGame();
  } else if (numGuesses === 0) {
    document.getElementById('loss-counter').innerHTML = lossCounter++;
    document.getElementById('wrong-guesses').innerHTML = "";
    alert("You Lost. Try again.");
    startGame();
  }




}
//to check whether the player typed is in the function.
startGame();
document.onkeyup = function(event) {

  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("this is the letter the player typed", letterGuessed);
  letterChecks(letterGuessed);
  roundComplete();


}

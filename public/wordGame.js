//global variables
var wordContainer = document.querySelector('.hiddenWord');
var userInput = document.querySelector('.guessEntry');
var chosenWord = wordSelector();
var guessCounter = document.querySelector('#guess-counter');
var guessButton = document.querySelector('#guess-button');
var messaging = document.querySelector('#messaging');
var correctLetters = [];

/************************************************************
Random word generation logic
************************************************************/

  //word selection function
  function wordSelector() {
    var selectedWord = '';
    selectedWord += commonWords[Math.floor(Math.random() * commonWords.length)];
    if (selectedWord.length < 3) {
      return wordSelector();
    }else {
      return selectedWord;
    }
  };

  //word hiding function
  function wordMask(str, arr) {
    console.log("Word Mask", str, arr);
    var maskedWord = '';
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (arr.indexOf(char) !== -1) {
        maskedWord += char + " ";
      }else {
        maskedWord += "_ "
      }
    }
//    console.log(arr.char);
    return maskedWord;
  };

/*******************************************************************************
Guess counter logic
*******************************************************************************/

var numGuesses = 8;
var guessTotal = numGuesses;
guessCounter.textContent = numGuesses;


/*******************************************************************************
Guess validation logic
*******************************************************************************/
guessButton.addEventListener('click', _collectInput);

function _collectInput() {
  console.log("Collect Input");
  var guess = userInput.value;
  console.log(guess);
  userInput.value = '';

  validateGuess(guess, chosenWord);
};

function validateGuess(letter, str) {
  var hasLetter = str.includes(letter);
  if (hasLetter) {
    correctLetters.push(letter);
    var newValue = wordMask(str, correctLetters);
    wordContainer.innerText = newValue;
    messaging.innerText = "You guessed the right letter!";
  } else {
    guessTotal -= 1;
    guessCounter.textContent = guessTotal;
    messaging.textContent = "Sorry that is a wrong letter.  Try again!";
  }

  if (guessTotal === 0) {
    messaging.textContent = "You lost!  Better luck next time."
  }
};


//Typechecking console logs
console.log(chosenWord);

/*******************************************************************************
Page display functionality
*******************************************************************************/

//Output the randomly selected word here
var pickedWord = wordMask(chosenWord, correctLetters);

//display the words as underscores for each letter
wordContainer.innerText += pickedWord.split('').join(' ');

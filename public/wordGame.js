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
  }

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
  }

/*******************************************************************************
Guess counter logic
*******************************************************************************/


  var guessTotal = document.createElement('span');
  guessTotal.textContent = 8;
  guessCounter.appendChild(guessTotal);


/*******************************************************************************
Guess validation logic
*******************************************************************************/
  guessButton.addEventListener('click', _collectInput);

  function _collectInput() {
    console.log("Collect Input");
    var guess = userInput.value;
    //console.log(guess);
    userInput.value = '';

    validateGuess(guess, chosenWord);
  };

  function validateGuess(letter, str) {
    console.log("Validate Guess", letter, str);
    for (var i = 0; i < str.length; i++) {
      //console.log(str[i]);
      if (str[i] === letter) {
        //console.log('you guessed a letter');
        correctLetters.push(letter);
        var newValue = wordMask(str, correctLetters);
        wordContainer.innerText = newValue;
      }else {
        //console.log('sorry that is a wrong letter');
        messaging.textContent = "Sorry that is a wrong letter.  Try again!";
        guessTotal--;
      }
    }

    //console.log(correctLetters);
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

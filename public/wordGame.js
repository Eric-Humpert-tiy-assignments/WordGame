//global variables
var wordContainer = document.querySelector('.hiddenWord');
var userInput = document.querySelector('.guessEntry');
var chosenWord = wordSelector();
var guessCounter = document.querySelector('#guess-counter');
var guessButton = document.querySelector('#guess-button');
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
  function wordMask(str, letter) {
    var maskedWord = str;
    for (var i = 0; i < str.length; i++) {
      maskedWord = maskedWord.replaceAt(i, '_');
      if (str[i] === letter) {
        maskedWord = maskedWord.replaceAt('_', i);
      }
    }
    return maskedWord;
  }

  //I don't know what this does but will need to read up on it fyi DO IT!!!
  String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
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
    var guess = userInput.value;
    console.log(guess);
    userInput.value = '';

    validateGuess(guess, chosenWord);
  };

  function validateGuess(letter, str) {
    console.log(letter, str);
    for (var i = 0; i < str.length; i++) {
      console.log(str[i]);
      if (str[i] === letter) {
        console.log('you guessed a letter');
        correctLetters.push(letter);
        break;
      }else {
        console.log('sorry that is a wrong letter');
      }
    }

    console.log(correctLetters);
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

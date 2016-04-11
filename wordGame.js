//global variables
var wordContainer = document.querySelector('.hiddenWord');
var userGuess = document.querySelector('.guessEntry').value;
var chosenWord = wordSelector();


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
  function wordMask(str) {
    var maskedWord = str;
    for (var i = 0; i < str.length; i++) {
      maskedWord = maskedWord.replaceAt(i, '_');

    }
    return maskedWord;
  }

  //String letter replacement function
  String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
  }

//Typechecking console logs
console.log(chosenWord);
console.log(typeof chosenWord);
console.log(typeof wordContainer);
console.log(typeof wordMask);
//Output the randomly selected word here
var pickedWord = wordMask(chosenWord);
                          //display the words as underscores for each letter  
wordContainer.innerText += pickedWord.split('').join(' ');

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
    var placeholder = '';
    for (var i = 0; i < str.length; i++) {
      placeholder += str.replace('_');

    }
    return placeholder;
  }



//Typechecking console logs
console.log(chosenWord);
console.log(typeof chosenWord);
console.log(typeof wordContainer);
console.log(typeof wordMask);
console.log(wordMask(chosenWord));
//Output the randomly selected word here
wordContainer.innerText += wordMask(chosenWord);

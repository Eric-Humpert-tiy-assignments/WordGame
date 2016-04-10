//global scope variables
var wordContainer = document.querySelector('.hiddenWord');
var selectedWord = '';
var chosenWord = wordSelector();
var display = [];
  //word selection function
  function wordSelector() {

    return selectedWord += commonWords[Math.floor(Math.random() * commonWords.length)];

  }
  //word hiding function


  //Word length test function
  function wordLength(str) {
    for (var i = 0; i < str.length; i++) {
      str = chosenWord;
      if (str.length >= 3) {
        return str;
      }
    }
  }



//Typechecking console logs
console.log(chosenWord);
console.log(typeof chosenWord);
console.log(typeof wordContainer);

//Output the randomly selected word here
wordContainer.innerText += wordLength(chosenWord);

//global scope variables
var wordContainer = document.querySelector('.hiddenWord');
var selectedWord = '';
var chosenWord = wordSelector();
  //word selection function
  function wordSelector() {

    return selectedWord += commonWords[Math.floor(Math.random() * commonWords.length)];

  }



console.log(typeof wordContainer);



  function wordLength(str) {
    for (var i = 0; i < str.length; i++) {
      str = chosenWord;
      if (chosenWord.length < 3) {
        return selectedWord;
      }
    }
  }




console.log(chosenWord);
console.log(typeof chosenWord);
wordContainer.innerText += wordLength(chosenWord);

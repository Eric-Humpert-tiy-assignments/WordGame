var wordContainer = document.querySelector('.hiddenWord');

  function wordSelector() {
    var selectedWord = '';

    return selectedWord += commonWords[Math.floor(Math.random() * commonWords.length)];

  }



console.log(typeof wordContainer);

var chosenWord = wordSelector();

  function wordLength(str) {

  }




console.log(chosenWord);
console.log(typeof chosenWord);
wordContainer.innerText += chosenWord;

let wordToGuess = "dictionnaire";

function compareWords(suggestedWord) {
  let wellPlaced = [];
  let notInWord = [];
  let missPlaced = [];

  let arrayOfWordToGuess = wordToGuess.split("");
  let arrayOfSuggestedWord = suggestedWord.split("");

  for (let i = 0; i < arrayOfSuggestedWord.length; i++) {
    const suggestedChar = arrayOfSuggestedWord[i];
    if (arrayOfWordToGuess[i] === suggestedChar) {
      wellPlaced.push(suggestedChar);
    } else if (arrayOfWordToGuess.includes(suggestedChar)) {
      missPlaced.push(suggestedChar);
    } else {
      notInWord.push(suggestedChar);
    }
  }
  return {
    wellPlaced,
    missPlaced,
    notInWord,
  };
}

function displayResults(suggestedWord) {
  suggestedWord = document.getElementById("word-input").value.toLowerCase();
  let result = compareWords(suggestedWord);
  document.getElementById("well").textContent = result.wellPlaced.join(", ");
  document.getElementById("miss").textContent = result.missPlaced.join(", ");
  document.getElementById("not").textContent = result.notInWord.join(", ");
}

function motus(suggestedWord) {
  suggestedWord = document.getElementById("word-input").value.toLowerCase();
  if (wordToGuess === suggestedWord) {
    document.getElementById("win").innerHTML = "Vous avez gagné!";
    
  } else {
    displayResults(suggestedWord);
  }
}
motus();

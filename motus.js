const WELL = document.getElementById("well");
const MISS = document.getElementById("miss");
const NOT = document.getElementById("not");
const WIN = document.getElementById("win");
const TRY = document.getElementById("try");

let wordToGuess = "dictionnaire";

function handleErrors(suggestedWord) {
  suggestedWord = suggestedWord.trim();
  if (suggestedWord === "") {
    TRY.textContent = "🚨Veuillez saisir un mot valide🚨";
    document.querySelector('.paragraphes-container').style.display ='none';
    return false;
  } else if (!isNaN(suggestedWord) && suggestedWord !== "") {
    TRY.textContent = "🚨Veuillez saisir un mot, pas un nombre🚨";
    document.querySelector('.paragraphes-container').style.display ='none';
    return false;
  } else if (suggestedWord.length > wordToGuess.length) {
    TRY.textContent = "🚨Votre mot est trop long🚨";
    document.querySelector('.paragraphes-container').style.display ='none';
    return false;
  } else {
    TRY.textContent = "";
    document.querySelector('.paragraphes-container').style.display ='block'
    //WIN.style.display='none'
    return true;
  }
}
function compareWords(suggestedWord) {
  let wellPlaced = [];
  let notInWord = [];
  let missPlaced = [];
  if (handleErrors(suggestedWord) === false) {
    return {
      wellPlaced,
      missPlaced,
      notInWord,
    };
  }
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
  if (wordToGuess === suggestedWord) {
    WIN.innerHTML = "🎊Vous avez gagné 🎊";
    WELL.textContent = "";
    MISS.textContent = "";
    NOT.textContent = "";
    document.querySelector('.paragraphes-container').style.display ='none',
    TRY.style.display ='none';
  } else {
    let result = compareWords(suggestedWord);
    WELL.textContent = result.wellPlaced.join(", ");
    MISS.textContent = result.missPlaced.join(", ");
    NOT.textContent = result.notInWord.join(", ");
  }
}

//export{handleErrors};

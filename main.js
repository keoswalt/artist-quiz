// Import data from data.js

import { artistArray, artArray } from "./data.js";

// DOM Elements

const artWrapper = document.querySelector(".artWrapper");
const artistSlots = document.getElementsByClassName("artistSlot"); // returns array of three empty divs
const finalScore = document.getElementById("finalScore");

const resultMsg = document.querySelector(".resultMsg");
const successMsg = document.querySelector(".successMsg");
const successText = document.getElementById("successText");
const failMsg = document.querySelector(".failureMsg");

const checkAnsButton = document.getElementById("checkAnswer");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const seeScoreButton = document.getElementById("scoreButton");

// Global Variables

let counter = 0;
let score = 0;
const numQuestions = 10;
let currentArt;
let currentArtist;
let selectedCard;
let selectedCardId;
let currentArtistId;

// Helpers *************************************************************************************

const randomizer = function(max) {
    return Math.floor(Math.random() * max);
};

const shuffleArray = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const addClass = function(element, newClass) {
    element.classList.add(newClass);
}

const removeClass = function(element, oldClass) {
    element.classList.remove(oldClass);
}

const removeIds = function (array) {
    for (let i = 0; i < array.length; i++) {
        array[i].removeAttribute('id');
    }
}

// Quiz Functions ***********************************************************************************

// Select artwork for array

const createArray = function() {
    const currentArray = [];
    const addArt = function() {
        let n = randomizer(artArray.length);
        let newArt = artArray[n];
        if (!currentArray.includes(newArt)) {
            currentArray.push(newArt);
        }
    };
    while (currentArray.length < numQuestions) {
        addArt();
    };
    return currentArray;
}

// Create array to use for quiz

const artForRound = createArray(); // This creates a random array of 10 art objects from the main artArray

// Fill art wrapper with image

const fillArtWrapper = function(art) {
    artWrapper.style.backgroundImage = "url(" + art.src + ")"
}

// Fill artist wrappers with images

const fillArtistWrappers = function(artist) {
    let artists = [];
    artists.push(artist);
    while (artists.length < 3) {
        let j = randomizer(artistArray.length);
        if (!artists.includes(artistArray[j])) {
            artists.push(artistArray[j]);
        }
    };
    let randomOrder = [0,1,2];
    shuffleArray(randomOrder);
    let slot1 = artistSlots[randomOrder[0]];
    let slot2 = artistSlots[randomOrder[1]];
    let slot3 = artistSlots[randomOrder[2]];
    let artist1 = artists[0];
    let artist2 = artists[1];
    let artist3 = artists[2];
    slot1.style.backgroundImage = "url(" + artist1.img + ")";
    slot1.setAttribute('id', artist1.id);
    slot2.style.backgroundImage = "url(" + artist2.img + ")";
    slot2.setAttribute('id', artist2.id);
    slot3.style.backgroundImage = "url(" + artist3.img + ")";
    slot3.setAttribute('id', artist3.id);
}

// Write success and fail messages

const writeSuccessMsg = function(artist, art) {
    successText.innerText = "That's right! " + artist.name + ' painted "' + art.title + '" in ' + art.year + "."
}

const writeFailMsg = function(artist, art) {
    failMsg.innerText = "Not quite... " + artist.name + ' painted "' + art.title + '" in ' + art.year + "."
}

// Guess a card

const makeGuess = function(event) {
    for (let i = 0; i < artistSlots.length; i++) {
        removeClass(artistSlots[i], "cardGuess");
    }
    selectedCard = event.target;
    selectedCardId = selectedCard.getAttribute('id');
    addClass(selectedCard, "cardGuess");
    checkAnsButton.style.display = "flex";
}

// Check answer

const checkAnswer = function(guessId, correctId) {
    resultMsg.style.display = "flex";
    removeClass(selectedCard, "cardGuess");
    if (guessId === correctId) {
        successMsg.style.display = "flex";
        score = score + 1;
    } else {
        failMsg.style.display = "flex";
        addClass(selectedCard, "cardWrong");
    };
    checkAnsButton.style.display = "none";
}

// Show score

const showScore = function() {
    seeScoreButton.style.display = "flex";
    seeScoreButton.addEventListener("click", function turnOnScore() {
        window.open("/end.html");
        finalScore.innerText = score + "/10";
    });
}

// Show next question

const showNextQuestion = function(art) {
    nextQuestionButton.style.display = "flex";
    nextQuestionButton.addEventListener("click", function () {
        nextQuestionButton.style.display = "none";
        resultMsg.style.display = "none";
        successMsg.style.display = "none";
        failMsg.style.display = "none";
        removeIds(artistSlots);
        for (let i = 0; i < artistSlots.length; i++) {
            removeClass(artistSlots[i], "cardGuess");
            removeClass(artistSlots[i], "cardRight");
            removeClass(artistSlots[i], "cardWrong");
        };
        quizRound(art);
}, { once: true });
}

// Quiz Round

const quizRound = function (art) {
    currentArt = art[counter];
    console.log(art);
    currentArtist = currentArt.artist;
    currentArtistId = currentArtist.id;
    //Load images on page
    fillArtWrapper(currentArt);
    fillArtistWrappers(currentArtist);
    // Write success and fail messages
    writeSuccessMsg(currentArtist, currentArt);
    writeFailMsg(currentArtist, currentArt);

    for (let i = 0; i < artistSlots.length; i++) {
      artistSlots[i].addEventListener("click", makeGuess);
    } // Adds event listener to record which card the user guesses
  
    checkAnsButton.onclick = function () {
      checkAnswer(selectedCardId, currentArtistId);
      console.log(selectedCardId, currentArtistId); // checking values
      for (let i = 0; i < artistSlots.length; i++) {
        if (artistSlots[i].getAttribute("id") === currentArtistId) {
          addClass(artistSlots[i], "cardRight");
        }
      }
      counter = counter + 1;
      console.log(counter);
      if (counter === numQuestions -1) {
        showScore();
      } else {
        showNextQuestion(art);
      }
    };
  };

  // Master quiz function

  const quiz = function(art) {
    quizRound(art);
  }

// Run quiz

quiz(artForRound);
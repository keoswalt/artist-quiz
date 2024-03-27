// Import data from data.js

import { artistArray, artArray } from "./data.js";

// DOM Elements

const artWrapper = document.querySelector(".artWrapper");
const artistSlots = document.getElementsByClassName("artistSlot"); // returns array of three empty divs
const finalScore = document.getElementById("finalScore");

// Helpers

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
    element.classList.add("class");
}

const removeClass = function(element, oldClass) {
    element.classList.remove("class");
}

const removeIds = function(array) {
    array.forEach(element => {
        element.removeAttribute('id');
    });
}

// Global Variables

let counter = 0;
let score = 0;
const numQuestions = 10;
let currentArt;
let currentArtist;

// Quiz Functions

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

const fillArtWrapper = function(art) {
    artWrapper.style.backgroundImage = "url(" + art.src + ")"
}

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


const quiz = function() {
    const art = createArray(); // This creates a random array of 10 art objects from the main artArray

    // Round function: check if counter < numQuestions
    currentArt = art[counter]; // This selects each piece of art in the new array in order every turn
    currentArtist = currentArt.artist; // This identifies the artwork's matching artist object from the artistArray
    fillArtWrapper(currentArt); // Loads the current art on the page
    fillArtistWrappers(currentArtist); // Loads correct artist + 2 random artists from artistAray on page

    let selectedCard;

    // Add event listener to all cards
        // On click add the selected class to the clicked card
        // selectedCard = event target

    // Add event listener to check answer button that checks to see if selectedCard's id = currentArtist.id
        // If yes, show success message, enable “next question” button, score = score +1, update classes on cards
        // If no, show oops message and enable next question button, update classes on cards

    // Add event listener for next question button
        // counter = counter + 1;
        // runs "round" function again
        // runs removeIds(artistSlots)

    // else if counter is = numQuestions, return score, show see score button
}

// Add event listener for see score button
    // window.open("/end.html")// Redirects to score page
    // finalScore.innerText = score + "/10" // Writes score to innertext of element on page

quiz();
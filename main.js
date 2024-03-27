// Import data from data.js

import { artistArray, artArray } from "./data.js";

// DOM Wrappers

const artWrapper = document.querySelector(".artWrapper");
const artistSlots = document.getElementsByClassName("artistSlot"); // returns array of three empty divs

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

// Global Variables

let counter = 0;
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
    slot2.style.backgroundImage = "url(" + artist2.img + ")";
    slot3.style.backgroundImage = "url(" + artist3.img + ")";
}

const quiz = function() {
    const art = createArray(); // This creates a random array of 10 art objects from the main artArray
    // if counter < numQuestions
    currentArt = art[counter]; // This selects each piece of art in the new array in order every turn
    currentArtist = currentArt.artist; // This identifies the artwork's matching artist object from the artistArray
    fillArtWrapper(currentArt); // Loads the current art on the page
    fillArtistWrappers(currentArtist); // Loads correct artist + 2 random artists from artistAray on page

    // counter = counter + 1;

    // else (show see score button)
}

quiz();
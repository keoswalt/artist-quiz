// Import data from data.js

import { artistArray, artArray } from "./data.js";

// DOM Wrappers

const artWrapper = document.querySelector(".artWrapper");
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

// Helpers

const randomizer = function(max) {
    return Math.floor(Math.random() * max);
};

// Global Variables

let counter = 0;
const numQuestions = 10;

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

const quiz = function() {
    // if counter < numQuestions
    const art = createArray();
    fillArtWrapper(art[counter]);
}

quiz();
    
    // counter = counter + 1;

    // else (show see score button)
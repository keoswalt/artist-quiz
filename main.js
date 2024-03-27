// import data from data.js

// Helpers

const randomizer = function(max) {
    return Math.floor(Math.random() * max);
}

// Global Variables

let counter = 0;
const numQuestions = 10;

// Quiz Wrapper

const quiz = function() {
    // if counter < numQuestions
    // function to select artwork
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

    quiz();
    console.log(currentArray);
    // counter = counter + 1;

    // else (show see score button)
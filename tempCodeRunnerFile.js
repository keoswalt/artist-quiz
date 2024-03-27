const quiz = function() {
    // if counter < numQuestions
    // function to select artwork
    const currentArray = [];
    const addArt = function() {
        n = randomizer(artArray.length);
        newArt = artArray[n];
        if (!currentArray.includes(newArt)) {
            currentArray.push(newArt);
        }
    };
    while (currentArray.length < numQuestions) {
        addArt();
    };
    return currentArray;

    }
    // 
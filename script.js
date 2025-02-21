let subjects = ["The turkey", "Mom", "The cat"];
let verbs = ["sat on", "danced with", "saw"];
let adjectives = ["a funny", "a scary", "a slimy"];
let nouns = ["goat", "monkey", "frog"];
let places = ["on the moon", "in my soup", "on the grass"];

function randomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate story from dropdown selections
document.getElementById("generate-my-story").addEventListener("click", function() {
    let subject = document.getElementById("subject").value;
    let verb = document.getElementById("verb").value;
    let adjective = document.getElementById("adjective").value;
    let noun = document.getElementById("noun").value;
    let place = document.getElementById("place").value;
    
    let story = `${subject} ${verb} ${adjective} ${noun} ${place}.`;
    document.getElementById("story-output").textContent = story;
});

// Generate random story
document.getElementById("generate-random-story").addEventListener("click", function() {
    let story = `${randomWord(subjects)} ${randomWord(verbs)} ${randomWord(adjectives)} ${randomWord(nouns)} ${randomWord(places)}.`;
    document.getElementById("story-output").textContent = story;
});

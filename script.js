// VARIABLES & ARRAYS: Store possible words for each category
const subjects = ["The turkey", "Mom", "The cat", "My teacher", "The elephant"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a slimy", "a goofy", "a barking"];
const nouns = ["goat", "monkey", "cow", "frog", "bug"];
const places = ["on the moon", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// FUNCTION: Generate a random word from an array
function randomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// FUNCTION: Generate a random story using concatenation (OPERATORS + STRINGS)
function generateStory() {
    let story = randomWord(subjects) + " " + randomWord(verbs) + " " + randomWord(adjectives) + " " + randomWord(nouns) + " " + randomWord(places) + ".";

    let storyBox = document.getElementById("story-output");
    storyBox.textContent = story;

    // CONDITIONAL: Add an animation effect
    if (storyBox.textContent.length > 0) {
        storyBox.style.transform = "scale(1.1)";
        storyBox.style.opacity = "0.8";
        
        setTimeout(() => {
            storyBox.style.transform = "scale(1)";
            storyBox.style.opacity = "1";
        }, 300);
    }
}

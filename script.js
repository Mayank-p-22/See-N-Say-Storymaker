
const subjects = ["The turkey", "Mom", "The cat", "My teacher", "The elephant"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a slimy", "a goofy", "a barking"];
const nouns = ["goat", "monkey", "cow", "frog", "bug"];
const places = ["on the moon", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Function to pick a random word from an array
function randomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random story
function generateStory() {
    let story = `${randomWord(subjects)} ${randomWord(verbs)} ${randomWord(adjectives)} ${randomWord(nouns)} ${randomWord(places)}.`;
    
    let storyBox = document.getElementById("story-output");
    storyBox.textContent = story;

    // Animation effect
    storyBox.style.transform = "scale(1.1)";
    storyBox.style.opacity = "0.8";

    setTimeout(() => {
        storyBox.style.transform = "scale(1)";
        storyBox.style.opacity = "1";
    }, 300);
}



function speakStory() {
    let story = document.getElementById("story-output").textContent;
    
    if (story === "Click below to generate a fun story! 👇") {
        alert("Generate a story first!");
        return;
    }

    let speech = new SpeechSynthesisUtterance(story);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speechSynthesis.speak(speech);
}

// Event Listeners
document.getElementById("generate-btn").addEventListener("click", generateStory);
document.getElementById("speak-btn").addEventListener("click", speakStory);

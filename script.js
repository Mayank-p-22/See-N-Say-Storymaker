document.getElementById("generate-story").addEventListener("click", function() {
    // Get selected values
    let subject = document.getElementById("subject").value;
    let verb = document.getElementById("verb").value;
    let adjective = document.getElementById("adjective").value;
    let noun = document.getElementById("noun").value;
    let place = document.getElementById("place").value;

    // Generate story
    let story = `${subject} ${verb} ${adjective} ${noun} ${place}.`;

    // Display story
    document.getElementById("story-output").textContent = story;
});

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "How does a penguin build its house? Igloos it together."
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').innerText = jokes[randomIndex];
}

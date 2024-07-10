const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta.",
    "How does a penguin build its house? Igloos it together."
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "What did one wall say to the other wall? 'I'll meet you at the corner!'"
];

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').innerText = jokes[randomIndex];
}

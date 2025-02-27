// Play Background Music on Page Load
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bg-music").play();
});

// Make Clutches & Poppers Bounce Randomly
const bouncingItems = document.querySelectorAll(".clutch, .popper");
bouncingItems.forEach(item => {
    item.style.top = Math.random() * window.innerHeight + "px";
    item.style.left = Math.random() * window.innerWidth + "px";
});

// Popper Click Event
function popPoppers(element) {
    element.src = "popped.png";
}

// Play Cheesy Birthday Message
function playCheesyMessage() {
    new Audio("cheesy-message.mp3").play();
}

// Random Love Notes
const loveNotes = [
    "You're the best thing in my life! ❤️",
    "I love you more than words can say! 😘",
    "You're my sunshine on a rainy day! ☀️",
    "You make my world magical! ✨",
    "My heart beats for you! 💓"
];

function showLoveNote() {
    const note = document.createElement("div");
    note.className = "love-note";
    note.innerText = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    note.style.top = Math.random() * 80 + "vh";
    note.style.left = Math.random() * 80 + "vw";
    
    document.getElementById("love-notes-container").appendChild(note);
    
    setTimeout(() => note.remove(), 3000);
}

// Show Random Love Notes Every Few Seconds
setInterval(showLoveNote, 2000);

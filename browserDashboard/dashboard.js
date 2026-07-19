// Assignment 6 Zach Willis, July 19, 2026 //

// Part 1: Browser Information

Display the URL directly on the web page (inside your output section)
document.addEventListener("DOMContentLoaded", () => {
    const outputDisplay = document.getElementById("outputDisplay");
    if (outputDisplay) {
        outputDisplay.innerHTML = `<strong>Page URL:</strong> ${window.location.href}`;
    }
});

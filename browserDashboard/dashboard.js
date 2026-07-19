// Assignment 6 Zach Willis, July 19, 2026 //

// Part 1: Browser Information

Display the URL directly on the web page (inside your output section)
document.addEventListener("DOMContentLoaded", () => {
    const outputContent = document.getElementById("outputContent");
    if (outputContent) {
        outputContent.innerHTML = `<strong>Page URL:</strong> ${window.location.href}`;
    }
});

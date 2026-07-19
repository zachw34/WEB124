// Assignment 6 Zach Willis, July 19, 2026 //

// Part 1: Browser Information

// 2. Render properties targeting specific element IDs on the page
document.addEventListener("DOMContentLoaded", () => {
    const windowLocationEl = document.getElementById("windowLocation");
    const navLanguageEl = document.getElementById("navLanguage");
    const widthHeightEl = document.getElementById("widthHeight");

    if (windowLocationEl) {
        windowLocationEl.innerHTML = `<strong>Page URL:</strong> ${window.location.href}`;
    }

    if (navLanguageEl) {
        navLanguageEl.innerHTML = `<strong>Language:</strong> ${navigator.language} | <strong>Status:</strong> ${navigator.onLine ? "Online" : "Offline"}`;
    }

    if (widthHeightEl) {
        const widthHeightEl = document.getElementById("widthHeight");
        widthHeightEl.innerHTML = `<strong>Screen Resolution:</strong> ${screen.width}px width × ${screen.height}px height`;
    }
});

// Part 2 Window information

// 1. The width of the browser window
console.log("Browser Window Width:", window.innerWidth);
// 2. The height of the browser window
console.log("Browser Window Height:", window.innerHeight);

// Part 3 

document.addEventListener("DOMContentLoaded", () => {
    // 1. Access the form using document.forms (first form, so index 0)
    const dashForm = document.forms[0];
    console.log("Accessed Form:", dashForm);

    if (dashForm) {
        // 2. Approach A: Access fields using form.elements collection
        const nameFieldViaElements = dashForm.elements["name"];
        const emailFieldViaElements = dashForm.elements["email"];
        
        console.log("Via form.elements:", nameFieldViaElements, emailFieldViaElements);

        // 3. Approach B: Access fields using the shorter form.fieldName notation
        const nameFieldDirect = dashForm.name;
        const emailFieldDirect = dashForm.email;

        console.log("Via form.fieldName:", nameFieldDirect, emailFieldDirect);
    }
});

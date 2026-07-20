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
    // 1. Access the form using document.forms (first form on the page at index 0)
    const bookForm = document.forms[0];
    console.log("Accessed Form Node:", bookForm);

    if (bookForm) {
        // 2. Approach A: Access fields using the form.elements collection
        const nameFieldElements = bookForm.elements["name"];
        const emailFieldElements = bookForm.elements["email"];
        
        console.log("Using form.elements:", nameFieldElements, emailFieldElements);

        // 3. Approach B: Access fields using the shorter form.fieldName notation
        const nameFieldShort = bookForm.name;
        const emailFieldShort = bookForm.email;

        console.log("Using form.fieldName shortcut:", nameFieldShort, emailFieldShort);
    }
});

    // 4. Handle form submission event
        bookForm.addEventListener("submit", (event) => {
            // Prevent the page from reloading
            event.preventDefault();

            // Use .value to retrieve the information entered by the user
            const userName = nameFieldShort.value;
            const userEmail = emailFieldShort.value;

            // Target the output section container
            const outputContentDiv = document.getElementById("outputContent");

        // Create a container element to present the form outputs visually
                const userSummary = document.createElement("div");
                userSummary.id = "userSummary";

    // Populate with clean markup containing the user's name and email details
                userSummary.innerHTML = `
                    <p style="margin: 0 0 5px 0;"><strong>Submitted Name:</strong> ${userName}</p>
                    <p style="margin: 0;"><strong>Submitted Email:</strong> ${userEmail}</p>`;

                // Display the data cleanly on the page by appending the node
                outputContentDiv.appendChild(userSummary);
            }

    // Log values to console to verify successful processing
            console.log("Form successfully captured:", { name: userName, email: userEmail });
        });

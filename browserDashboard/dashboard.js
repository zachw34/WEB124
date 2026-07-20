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
    const dashForm = document.forms[0];
    console.log("Accessed Form Node:", dashForm);

    if (dashForm) {
        // 2. Approach A: Access fields using the form.elements collection
        const nameFieldElements = dashForm.elements["name"];
        const emailFieldElements = dashForm.elements["email"];
        
        console.log("Using form.elements:", nameFieldElements, emailFieldElements);

        // 3. Approach B: Access fields using the shorter form.fieldName notation
        const nameFieldShort = dashForm.name;
        const emailFieldShort = dashForm.email;

        console.log("Using form.fieldName shortcut:", nameFieldShort, emailFieldShort);
    

    // 4. Handle form submission event
        dashForm.addEventListener("submit", (event) => {
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
                    <p style="margin: 10px 0 5px 0;"><strong>Submitted Name:</strong> ${userName}</p>
                    <p style="margin: 0;"><strong>Submitted Email:</strong> ${userEmail}</p>
                `;

                // Display the data cleanly on the page by appending the node
                outputContentDiv.appendChild(userSummary);

            // Log values to console to verify successful processing (Moved inside event)
            console.log("Form successfully captured:", { name: userName, email: userEmail });
        });
    }
});

// Part 4 Focus & Blur

    document.addEventListener("DOMContentLoaded", () => {
        // Access the form using document.forms collection
        const dashForm = document.forms[0];
    
        if (dashForm) {
            // Select the name field using form shortcut notation
            const nameField = dashForm.name;
    
            if (nameField) {
                // 1. Create a focus event listener for the name field
                nameField.addEventListener("focus", () => {
                    console.log("The name field was selected (focused).");
                });
    
                // 2. Create a blur event listener for the name field
                nameField.addEventListener("blur", () => {
                    console.log("The name field was left (blurred).");
                });
            }
        }
    });

// Part 5 URL Objects

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", (event) => {
    // 1. Prevent the page from refreshing on form submission
    event.preventDefault();

    // 2. Grab the value from the website input field
    const websiteInput = document.getElementById("website").value;

    try {
      // 3. Create a new native JavaScript URL Object
      const userUrl = new URL(websiteInput);

      // 4. Extract target data components from the URL object
      const hostname = userUrl.hostname;
      const protocol = userUrl.protocol;
      const pathname = userUrl.pathname;

     // 5. Display the information on the webpage
      document.getElementById("urlHostname").textContent = `Hostname: ${hostname}`;
      document.getElementById("urlProtocol").textContent = `Protocol: ${protocol}`;
      document.getElementById("urlPathname").textContent = `Pathname: ${pathname}`;

    } catch (error) {
      // 6. Handle invalid URL format inputs safely
      document.getElementById("errorMessage").textContent = "Please enter a valid URL (including http:// or https://).";
      
      // Clear previous successful outputs on error
      document.getElementById("urlHostname").textContent = "";
      document.getElementById("urlProtocol").textContent = "";
      document.getElementById("urlPathname").textContent = "";
       }
      });
    });

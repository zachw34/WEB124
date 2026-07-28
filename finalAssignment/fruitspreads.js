// Final Assignment Zach Willis, July 19, 2026 //

// Part 2: JavaScript Objects and Arrays

const fruitSpreads = [
  { category: "Jams", items: ["Bacon Jam", "Blackberry Jam", "Raspberry Jam", "Strawberry Jam"] },
  { category: "Jellies", items: ["Apple Jelly", "Grape Jelly", "Peach Jelly", "Prickly Pear Jelly"] }
];

console.log(fruitSpreads);

// Part 3: DOM Selection and Modification
const headingTwo = document.getElementById("heading-two");
const headingThree = document.querySelector("#heading-three");

// Part 4: Events
// First Event: Click Event that scrolls into view when clicked
headingTwo.addEventListener('click', function () {
  console.log('I am heading two!');
  headingTwo.scrollIntoView({ behavior: 'smooth' });
});

headingThree.addEventListener('click', function () {
  console.log('I am heading three!');
  headingThree.scrollIntoView({ behavior: 'smooth' });
});

// Part 5: Event Delagation or Event Bubbling
// When you click the image the figcaption appears and if you click it again it will disappear 

document.addEventListener("DOMContentLoaded", () => {
  // Single listener to the document body or container
  document.body.addEventListener("click", (event) => {
    // Check if the clicked element is one of our toggle images
    if (event.target.classList.contains("toggle-img")) {
      // Find the parent <figure> container
      const figure = event.target.closest("figure");
      if (figure) {
        // Find the <figcaption> inside this figure
        const figcaption = figure.querySelector("figcaption");
        if (figcaption) {
          // Toggle the display style and the image's active class
          if (figcaption.style.display === "none" || figcaption.style.display === "") {
            figcaption.style.display = "block";
            event.target.classList.add("active");
          } else {
            figcaption.style.display = "none";
            event.target.classList.remove("active");
          }
        }
      }
    }
  });
});

// Part 6: Forms
document.addEventListener('DOMContentLoaded', () => {
  // 1. Access the form using document.forms (first form on the page at index 0)
  const dashForm = document.forms[0];
  console.log('Accessed Form Node:', dashForm);
  
  if (dashForm) {
    // 2. Approach A: Access fields using the form.elements collection
    const nameFieldElements = dashForm.elements['name'];
    const emailFieldElements = dashForm.elements['email'];
    console.log('Using form.elements:', nameFieldElements, emailFieldElements);
    
    // 3. Approach B: Access fields using the shorter form.fieldName notation
    const nameFieldShort = dashForm.name;
    const emailFieldShort = dashForm.email;
    console.log('Using form.fieldName shortcut:', nameFieldShort, emailFieldShort);
    
    // 4. Handle form submission event
    dashForm.addEventListener('submit', (event) => {
      // Prevent the page from reloading
      event.preventDefault();
      
      // Use .value to retrieve the information entered by the user
      const userName = nameFieldShort.value;
      const userEmail = emailFieldShort.value;
      
      // Target the output section container
      const outputContentDiv = document.getElementById('outputContent');
      
      // Create a container element to present the form outputs visually
      const userSummary = document.createElement('div');
      userSummary.id = 'userSummary';
      
      // Populate with clean markup containing the user's name and email details
      userSummary.innerHTML = `
        <p style="margin: 10px 0 5px 0;"><strong>Submitted Name:</strong> ${userName}</p>
        <p style="margin: 0;"><strong>Submitted Email:</strong> ${userEmail}</p>
      `;
      
      // Display the data cleanly on the page by appending the node
      if (outputContentDiv) {
        outputContentDiv.appendChild(userSummary);
      }
      
      // Log values to console to verify successful processing
      console.log('Submitted values:', userName, userEmail);
    });
  }
});

// Part 7: Browser Information

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

// Part 9: Reflection
// At the bottom of your JavaScript file, answer the following questions as comments:

//     - Which JavaScript feature was easiest for you to use? Probably using objects and array
//     - Which JavaScript feature was most challenging? The challenge to not use for each and do event delegation for my images
//     - How did you use events in your project? The coolest part is when you click on the images and you see the toggle 
//     - How did you use storage in your project?

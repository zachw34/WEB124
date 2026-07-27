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
  // Single listener to the document body or a specific container element
  document.body.addEventListener("click", (event) => {
    // Check if the clicked element has the 'toggle-img' class
    if (event.target.matches(".toggle-img")) {
      const img = event.target;
      
      // Get the parent figure and the connected figcaption
      const figure = img.closest("figure");
      if (!figure) return; // Safety check
      
      const figcaption = figure.querySelector("figcaption");
      if (!figcaption) return; // Safety check

      // Toggle the display property
      if (figcaption.style.display === "none" || getComputedStyle(figcaption).display === "none") {
        figcaption.style.display = "block";
      } else {
        figcaption.style.display = "none";
      }
    }
  });
});

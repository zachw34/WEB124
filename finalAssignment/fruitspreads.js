// Final Assignment Zach Willis, July 19, 2026 //

// Part 2: JavaScript Objects and Arrays

const fruitSpreads = [
  { category: "Jams", items: ["Bacon Jam", "Blackberry Jam", "Raspberry Jam", "Strawberry Jam"] },
  { category: "Jellies", items: ["Apple Jelly", "Grape Jelly", "Peach Jelly", "Prickly Pear Jelly"] }
];

console.log(fruitSpreads);

// Part 3: DOM Selection and Modification
const headingTwo = document.getElementById("heading-two");
const headingThree = document.querySelector("heading-three");

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



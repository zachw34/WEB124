// Final Assignment Zach Willis, July 19, 2026 //

// Part 2: JavaScript Objects and Arrays

const fruitSpreads = [
  { category: "Jams", items: ["Bacon Jam", "Blackberry Jam", "Raspberry Jam", "Strawberry Jam"] },
  { category: "Jellies", items: ["Apple Jelly", "Grape Jelly", "Peach Jelly", "Prickly Pear Jelly"] }
];

console.log(fruitSpreads);

// Part 3: DOM Selection and Modification
const headingTwo = document.getElementById("heading-two");
const headingThree = document.getElementById("heading-three");

// Jump to the Jams heading (ensure element with id 'heading-two' exists in your HTML) when clicked
document.getElementById("heading-two").scrollIntoView({ behavior: "smooth" });

// Jump to the Jellies heading (fixed selector string, using getElementById or querySelector with #) when clicked
document.getElementById("heading-three").scrollIntoView({ behavior: "smooth" });

// Part 4: Events
// First Event: Click Event
headingTwo.addEventListener('click', function () {
  console.log('I am heading two!');
  headingTwo.scrollIntoView({ behavior: 'smooth' });
});

headingThree.addEventListener('click', function () {
  console.log('I am heading three!');
  headingThree.scrollIntoView({ behavior: 'smooth' });
});



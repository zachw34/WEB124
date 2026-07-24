// Final Assignment Zach Willis, July 19, 2026 //

// Part 2: JavaScript Objects and Arrays

const fruitSpreads = [
  {
    category: "Jams",
    items: ["Bacon Jam", "Blackberry Jam", "Raspberry Jam", "Strawberry Jam"]
  },
  {
    category: "Jellies",
    items: ["Apple Jelly", "Grape Jelly", "Peach Jelly", "Prickly Pear Jelly"]
  }
  ];
console.log(fruitSpreads);

// Part 3 DOM Selection and Modification

// Target the Jams heading
const jamHeading = document.getElementById('heading-two');

jamHeading.addEventListener('click', () => {
    jamHeading.style.backgroundColor = '#ff4d4d';
    jamHeading.style.color = 'white';
    jamHeading.textContent = '🔥 Mega Jam Selection!';
});

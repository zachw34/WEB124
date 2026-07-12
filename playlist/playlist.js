// Assignment 5 Zach Willis, July 12, 2026 //

// Part 1 Selecting Elements

// 1. Accessing update playlist button
const playlistButton = document.getElementById("update-btn");

// 2. querySelector for p tag
const myParagraph = document.querySelector("p");
  console.log(myParagraph);

// 3. Console log both 
console.log(playlistButton, myParagraph);

// Part 2 Browser Events

// 1. To confirm it works
playlistButton.addEventListener(`click`, () => {
  console.log("Button works good!");
});

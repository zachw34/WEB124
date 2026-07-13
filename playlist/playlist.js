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

// 1. To create click event for button
playlistButton.addEventListener(`click`, () => {
  const heading = document.querySelector('h1');
  // Change text
  heading.textContent = 'The 2000s Hits Playlist';
});

// 1. To create click event for p tag
const introText = document.querySelector("p");
introText.textContent = "A lot of my favorite oldies but goodies come from the 2000s. Some of the greatest party hits came from this decade and they still get played today!";
});

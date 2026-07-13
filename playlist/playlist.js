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

  // 1. To create click event for p tag
  const introText = document.querySelector("p");
  introText.textContent = "A lot of my favorite oldies but goodies come from the 2000s. Some of the greatest party hits came from this decade and they still get played today!";
  console.log("Button was successfully selected and clicked!");
});

// Part 3 Event Bubbling

// 1. Click Event for div (parent) and button (child)

const updateBtn = document.getElementById('update-btn');
const container = document.getElementById('playlist-container');

// Button click to call on child
updateBtn.addEventListener('click', (event) => {
  console.log('Button clicked for child');

  // Stops the event from bubbling up to the div
  event.stopPropagation(); 
});

 // Div click to call on parent
container.addEventListener('click', (event) => {
  console.log('Div clicked for parent'); 
});

// Part 4 Event Delegation

// 1. Add one click event listener to the <ul> element
const playlist = document.querySelector('ul');
  playlist.addEventListener('click', (event) => {
    // checks to see if clicked element is an li element so we only click on songs
  if (event.target.tagName === 'li') {
    console.log(event.target.textContent);
  }
  });

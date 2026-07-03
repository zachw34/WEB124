// Assignment 4 Zach Willis, July 2, 2026 //

// Part 1 Book Data

const bookData = [
  { title: "Dune", author: "Frank Herbert", pages: 412 },
  { title: "Project Hail Mary", author: "Andy Weir", pages: 476 },
  { title: "The Odyssey", author: "Homer", pages: 384 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
  { title: "The Score", author: "Ellie Kennedy", pages: 394 }
];

// Part 2 Console Output everything 

bookData.forEach((book) => {
  console.log(`Title: ${book.title} | Author: ${book.author} | Pages: ${book.pages}`);
});

// Part 3: DOM Tree Exploration

//Access entire HTML document
console.log(document);
// Access document body
console.log(document.body);
// Accessing the first child of the body
console.log(document.body.firstElementChild);
// Accessing all children of the body
console.log(document.body.children);

// Part 4 Walking the DOM

// Getting the ul element
console.log(document.body.children)[2];
// Getting the parent of that li
console.log(document.querySelector('li').parentElement);
// Getting sibling of the initially selected li
console.log(document.querySelectorAll('li')[0].nextElementSibling);

// Part 5 Node Properties

// Getting text from inside first li
console.log(document.getElementsByTagName('li')[0]);
// Display type of node - confirmation of element: 1
console.log(document.querySelectorAll('li')[0].nodeType);

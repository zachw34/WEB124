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

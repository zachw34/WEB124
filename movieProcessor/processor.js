// Assignment 3 Zach Willis, June 28, 2026 //

// Part 1 Raw Data
const rawMovieData = [
  "Ready Player One,sci-fi,7.4,oasisRP1@email.com",
  "Obsession,horror,8.1,obsessed@email.com",
  "The Godfather,drama,9.2,corleone@mob.com",
  "Toy Story,animation,8.3,woody@pixar.com",
  "Interstellar,sci-fi,8.6"
];

// Part 2 Create Movie Objects
const movieObjects = [];

function Movie(title, genre, rating, reviewEmail) {
  this.title = title;
  this.genre = genre;
  this.rating = parseFloat(rating); // Converts the string rating to a number
  this.reviewEmail = reviewEmail || "N/A"; // Handles missing email
  this.id = Symbol('uniqueMovieId'); // Unique identifier
}

for (const movieString of rawMovieData) {
  // Split the string into individual pieces by the coma
  const [title, genre, rating, reviewEmail] = movieString.split(',');
  
// Create a new Movie object and add it to array
const newMovie = new Movie(title, genre, rating, reviewEmail);
  movieObjects.push(newMovie);
}
console.log(movieObjects);

// Part 3 Add Methods
// 1. Add methods
Movie.prototype.getSummary = function() {
  return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}`;
};

Movie.prototype.isHighlyRated = function() {
  return this.rating >= 8;
};

Movie.prototype.getReviewEmail = function() {
  // 2. Returns the email using optional chaining (safely evaluates to undefined if missing), or defaults to 'none'
  return this.reviewEmail?.toLowerCase() || 'none'; 
};

Movie.prototype.getID = function() {
  return this.id;
};

// Part 4 Array and String Processing

// Testing the output
console.log(movieObjects);
console.log(movieObjects[0].getSummary());
console.log(movieObjects[0].getReviewEmail());

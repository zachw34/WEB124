// Assignment 3 Zach Willis, June 28, 2026 //

const rawMovieData = [
  "Ready Player One,sci-fi,7.4,oasisRP1@email.com",
  "Obsession,horror,8.1,obsessed@email.com",
  "The Godfather,drama,9.2,corleone@mob.com",
  "Toy Story,animation,8.3,woody@pixar.com",
  "Interstellar,sci-fi,8.6",
];

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

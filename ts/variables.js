// BASICS OF TYPESCRIPT VARIABLE ANNOTATION
var movieTitle = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();
var numCatLives = 9;
numCatLives += 1;
// numCatLives = "0";
var gameOver = false;
gameOver = true;
gameOver = "true";
null;
undefined;
var nothing = null;
var foo = undefined;
// TYPE INFERENCE
var tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;
var isFunny = false;
isFunny = true;
isFunny = "abcd";
// ANY: all checks are gone :(
var thing = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
var movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// let foundMovie;             // Defaults to any
var foundMovie; // Defaults to any

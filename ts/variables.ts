// BASICS OF TYPESCRIPT VARIABLE ANNOTATION

let movieTitle : string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives : number = 9;
numCatLives += 1;
// numCatLives = "0";

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";

null
undefined

let nothing: null = null;
let foo: undefined = undefined;



// TYPE INFERENCE

let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "abcd";



// ANY: all checks are gone :(

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
// let foundMovie;             // Defaults to any
let foundMovie: string;     // Defaults to any


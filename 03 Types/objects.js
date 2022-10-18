///////// OBJECT /////////
var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};
///////// OBJECT TYPES /////////
// VARIABLE is type object
var coordinate = { x: 34, y: 2 };
// PARAMETER is type object
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Jenkins" });
// RETURN is type object
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
///////// EXCESS PROPERTIES /////////
// ERROR: inline with an object literal - because of an extra check
// printName({ first: "Mick", last: "Jagger", age: 473 })
// variables only check for outlined properties, excess properties are ignored!
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
// Use the type alias in the annotation
var sayHappyBirthday = function (person) { return "Hey ".concat(person.name, ", congrats on turning ").concat(person.age, "!"); };
sayHappyBirthday({ name: "Jerry", age: 42 });
// Use the type alias in variable
var height = { feet: 5, inches: 11 };
// Use the type alias in function parameters
function randomHeight_v1() {
    return { feet: Math.random(), inches: Math.random() };
}
var randomHeight_v2 = function () {
    return { feet: Math.random(), inches: Math.random() };
};
// Use the type alias in function parameters
function doubleHeight(height) {
    return { feet: (height.feet * 2), inches: (height.inches * 2) };
}
var myAge = 25;
///////// TYPE ALIAS - NESTED OBJECTS /////////
// EXAMPLE 1: A function with a nested object type parameter
var describePerson = function (person) {
    return "Person: ".concat(person.name, ",\n        Age: ").concat(person.age, ",\n        Parents: ").concat(person.parentsName.mom, " and ").concat(person.parentsName.dad);
};
describePerson({ name: "Arri", age: 26, parentsName: { mom: "Felicia", dad: "Tony" } });
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log("$" + calculatePayout(mySong));
printSong(mySong);

///////// UNION TYPES /////////
var age = 21;
age = 23;
age = "24";
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
///////// TYPE NARROWING /////////
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    // return price * tax;
    // price.replace("$", "");
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(45, .07));
console.log(calculateTax("$45", .07));
///////// UNION TYPES with ARRAYS /////////
// const nums: number[] = [ 1, 2, 3, 4 ]
// const stuff: any[] = [ 1, "laugh", true ]
var stuff1 = [45, "$45"]; // Array of numbers and/or strings
var stuff2 = ["string", "$45"]; // Number or Array of strings
var stuff3 = [45, 12]; // Array of only strings or Array of only numbers
var cords = [];
cords.push({ lat: 321.213, long: 23.334 });
cords.push({ x: 32, y: 26 });
///////// LITERAL TYPES /////////
var zero = 0;
// zero = 2;
// let hi: "hi" = "Hi";
var giveAnswer = function (answer) {
    return "The answer is ".concat(answer, ".");
};
giveAnswer("no"); //good
//giveAnswer("oh boy I'm not sure"); //bad
var mood;
mood = "Happy";
mood = "Sad";
var today = "Wednesday";
today = "Friday";
//today = "Sun";

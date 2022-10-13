// ANNOTATING FUNCTION PARAMETERS
function square(num) {
    return num * num;
}
var doSomething = function (person, age, isFunny) { };
square(3);
doSomething("Chicken", 78, true);
// ANNOTATING FUNCTION RETURN VALUES
var addNums = function (x, y) {
    return x + y;
};
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
addNums(5, 5);
greet("Tonya Harding");
greet();
// ANONYMOUS FUNCTIONS
var numbers = [1, 2, 3];
numbers.forEach(function (num) {
    // return num.toUpperCase();  // Error!
});
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    // return color.toFixed();      //Error!
    return color.toUpperCase();
});
// VOID: A function that shouldn't return anything
var annoyUser = function (num) {
    for (var i = 0; i < num; i++) {
        alert('HIIIIIIII!!');
    }
};
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// NEVER: A function that should never return (throws an exception OR is continuously runs)
// doesn't finish running
var neverStop = function () {
    while (true) {
        console.log("I'm still going!");
    }
};
// throws an exception
var giveError = function (msg) {
    throw new Error(msg);
};

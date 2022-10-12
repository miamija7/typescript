// An object...
const dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
}

///////// OBJECT TYPES /////////


// VARIABLE is type object
let coordinate : { x: number, y: number } = { x: 34, y: 2 };


// PARAMETER is type object
function printName(person : { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });


// RETURN is type object
function randomCoordinates(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}



///////// EXCESS PROPERTIES /////////

// ERROR: inline with an object literal - because of an extra check
// printName({ first: "Mick", last: "Jagger", age: 473 })

// variables only check for outlined properties, excess properties are ignored!
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);



///////// TYPE ALIAS FOR OBJECT TYPES /////////

// A type alias
type Person = {
    name: string;
    age: number;
};

// Use the type alias in the annotation
const sayHappyBirthday = (person: Person) => `Hey ${person.name}, congrats on turning ${person.age}!`
sayHappyBirthday({name: "Jerry", age: 42});


// Another type alias
type Height = {
    feet: number;
    inches: number;
};

// Use the type alias in variable
let height: Height = {feet: 5, inches: 11};

// Use the type alias in function parameters
function randomHeight_v1() : Height {
    return { feet: Math.random(), inches: Math.random()};
}
let randomHeight_v2 = () : Height => {
    return {feet: Math.random(), inches: Math.random()};
}

// Use the type alias in function parameters
function doubleHeight(height: Height) : Height {
    return { feet: (height.feet * 2), inches: (height.inches * 2)};
}



///////// TYPE ALIAS FOR PRIMITIVE TYPES /////////

type MyNum = number;
let myAge: MyNum = 25;
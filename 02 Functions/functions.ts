// ANNOTATING FUNCTION PARAMETERS

function square(num: number){
    return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean)=>{};

square(3);
doSomething("Chicken", 78, true);



// ANNOTATING FUNCTION RETURN VALUES

const addNums = (x: number, y:number): number => {
    return x + y;
}

function greet(person: string = "stranger"): string {
    return `Hi there, ${person}!`
}

addNums(5,5);
greet("Tonya Harding");
greet();



// ANONYMOUS FUNCTIONS

const numbers = [1, 2, 3];
numbers.forEach(num => {
    // return num.toUpperCase();  // Error!
})

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    // return color.toFixed();      //Error!
    return color.toUpperCase();
})



// VOID: A function that shouldn't return anything

const annoyUser = (num: number) : void => {
    for (let i = 0; i < num; i++){
        alert('HIIIIIIII!!');
    }
}

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}



// NEVER: A function that should never return (throws an exception OR is continuously runs)

// doesn't finish running
const neverStop = (): never => {
    while(true){
        console.log("I'm still going!");
    }
}

// throws an exception
const giveError = (msg: string): never => {
    throw new Error(msg);
}

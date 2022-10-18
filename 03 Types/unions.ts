
///////// UNION TYPES /////////
    let age: number | string = 21;
    age = 23;
    age = "24";


///////// UNION TYPES with CUSTOM TYPES /////////

    type Point = {
        x: number;
        y: number;
    }

    type Loc = {
        lat: number;
        long: number;
    }

    let coordinates: Point | Loc = { x: 1, y: 34 };
    coordinates = { lat: 321.213, long: 23.334 };



///////// TYPE NARROWING /////////

    function printAge(age: number | string) {
        console.log(`You are ${age} years old`)
    }

    function calculateTax(price: number | string, tax: number): number{
        // return price * tax;
        // price.replace("$", "");
        if (typeof price === "string"){
            price = parseFloat(price.replace("$",""));
        }
        return price * tax;
    }

    console.log(calculateTax(45, .07))
    console.log(calculateTax("$45", .07))



///////// UNION TYPES with ARRAYS /////////

    // const nums: number[] = [ 1, 2, 3, 4 ]
    // const stuff: any[] = [ 1, "laugh", true ]
    const stuff1: (number|string)[] = [ 45, "$45" ]         // Array of numbers and/or strings
    const stuff2: number | string[] = [ "string", "$45" ]   // Number or Array of strings
    const stuff3: number[] | string[] = [ 45, 12 ]          // Array of only strings or Array of only numbers

    const cords : (Point|Loc)[] = [];
    cords.push({ lat: 321.213, long: 23.334 });
    cords.push({ x: 32, y: 26 });



///////// LITERAL TYPES /////////

    const zero: 0 = 0;
    // zero = 2;
    // let hi: "hi" = "Hi";

    const giveAnswer = (answer: "yes" | "no" | "maybe") => {
        return `The answer is ${answer}.`;
    }
    giveAnswer("no") //good
    //giveAnswer("oh boy I'm not sure"); //bad

    let mood: "Happy" | "Sad";
    mood = "Happy";
    mood = "Sad";
    // mood = "Tired";

    type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    let today: DayOfWeek = "Wednesday";
    today = "Friday";
    //today = "Sun";
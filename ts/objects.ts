///////// OBJECT /////////
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



///////// TYPE ALIAS - OBJECTS /////////

    // EXAMPLE 1: A type alias
    type Person = {
        name: string;
        age: number;
    };

    // Use the type alias in the annotation
    const sayHappyBirthday = (person: Person) => `Hey ${person.name}, congrats on turning ${person.age}!`
    sayHappyBirthday({name: "Jerry", age: 42});


    // EXAMPLE 2: Another type alias
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



///////// TYPE ALIAS - PRIMITIVE TYPES (not really useful) /////////

    type MyNum = number;
    let myAge: MyNum = 25;



///////// TYPE ALIAS - NESTED OBJECTS /////////

    // EXAMPLE 1: A function with a nested object type parameter
    const describePerson = (person: {
        name: string;
        age: number;
        parentsName: {
            mom: string;
            dad: string;
        }
    }) => {
        return `Person: ${person.name},
        Age: ${person.age},
        Parents: ${person.parentsName.mom} and ${person.parentsName.dad}`;
    }

    describePerson({name: "Arri", age: 26, parentsName: {mom: "Felicia", dad: "Tony"}})

    // EXAMPLE 2: Spotify
    type Song = {
        title: string;
        artist: string;
        numStreams: number;
        credits: {
            producer: string;
            writer: string;
        };
    }

    function calculatePayout(song: Song): number{
        return song.numStreams * 0.0033;
    }

    function printSong(song: Song): void {
        console.log(`${song.title} - ${song.artist}`)
    }

    const mySong: Song = {
        title: "Unchained Melody",
        artist: "Righteous Brothers",
        numStreams: 12873321,
        credits: {
            producer: "Phil Spector",
            writer: "Alex North"
        }
    }

    console.log("$" + calculatePayout(mySong));
    printSong(mySong);


///////// INTERFACES /////////

// POINT
interface Point {
    x: number;
    y: number;
}
const pt: Point = { x: 123, y: 1234 };


// PERSON
interface Person{
    readonly age: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi(): string;
    // sayHi: () => string;
}
const thomas: Person = {
    age: 25,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: () => { return "Hello!" }
};


// PRODUCT
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(discount) {
        let newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};

console.log(shoes.applyDiscount(0.4));



///////// REOPENING INTERFACES /////////

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const franky: Dog = {
    name: "Franky",
    age: 8,
    breed: "Schnauzer",
    bark() { return "WOOF WOOF!"; }
}



///////// EXTENDING INTERFACES /////////

interface ServiceDog extends Dog {  //You can extent multiple: comma, separated
    job: "Drug Sniffer" | "Bomb" | "Guide Dog";
}

const knox: ServiceDog = {
    name: "Knox",
    age: 6,
    breed: "Chihuahua/Wiener",
    bark(): string { return "RUFF RUFF RUFF RUFF!"; },
    job: "Guide Dog",
}
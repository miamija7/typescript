
///////// TUPLES - (STRICT ARRAYS) /////////

let myTuple: [number, string];
myTuple = [10, "TypeScript is fun!"];
// myTuple = ["TypeScript is fun!", 10];

const color1: number[] = [23,34,45,56];
const color2: [number, number, number] = [255,255,255];

type HTTPResponse = [number,string];
const goodResponse: HTTPResponse = [ 200, "OK" ]
const badResponse: HTTPResponse = [ 404, "Not Found" ]

// LIMITATION: tuples don't care if you add to an existing good tuple
// goodResponse.push(201);
// goodResponse.pop();
// goodResponse.pop();
// goodResponse.pop();

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];




///////// ENUMS (pollutes JS) /////////

// Numeric enums
enum numResponses {
    no = 2,
    yes = 10,
    maybe = 24,
}

// String enums
enum strResponses {
    no = 'No',
    yes = 'Yes',
    maybe = 'Maybe',
}

// Heterogeneous enums
enum mixResponses {
    no = 0,
    yes = 1,
    maybe = 'Maybe',
}


// Example #1
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}
const deliveryStatus = OrderStatus.DELIVERED;

function isDelivered(status:OrderStatus) {
    return  status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);


// Example #2
enum ArrowKeys{
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
}


///////// CONST ENUMS (clean JS) /////////
const enum Status {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const order1 = {
    orderNumber: 7654345678,
    status: Status.PENDING,    // status: 0 /* Status.PENDING */
}

const order2 = {
    orderNumber: 9876543,
    status: Status.DELIVERED,  // status: 2 /* Status.DELIVERED */
}






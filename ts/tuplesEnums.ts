
///////// TUPLES - (STRICT ARRAYS)/////////

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






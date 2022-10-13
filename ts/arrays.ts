
// Issue: assigning type of empty array
const activeUsr: [] = [];


///////// STRINGS /////////
const stringList1: Array<string> = ["what", "wow"];
const stringList2: string[] = [];
stringList2.push("Tony");


///////// NUMBERS /////////
const numList1: Array<number> = [1,2,3];
const numList2: number[] = [45, 56, 13];
numList2[0] = 99;
// numList2[0] = "a";


///////// BOOLEANS /////////
const booleans1: Array<boolean> = [true];
const booleans2: boolean[] = [true, false, true, true];


///////// CUSTOM TYPES /////////
type Point = {
    x: number;
    y: number;
}
const coordinates1: Point[] = [];
const coordinates2: Array<Point> = [];
coordinates2.push({x:5,y:7});


///////// MULTIDIMENSIONAL ARRAYS /////////
const board: string[][] = [["X", "O", "X"],["X", "O", "X"],["X", "O", "X"]]
const demo: number[][][] = [[[1]]];
/*
    Author: Andrii Zharko
    Desc: Working with Arrays
*/

let cars = ["Wrangler", "Forester", "Tacoma", "4-Runner", "Defender"];

console.log(cars);

cars[5] = "Tundra";
let length = cars.push("Corolla"); // push always adds to the end no gaps

console.log(length);
cars[0] = "Bronco";
cars.unshift("Wrangler"); // add to the front. Does not replace.

console.log(cars);

let makes = new Array("Jeep", "Subaru", "Totoya", "Ford", "Land Rover");

makes.push("Lada");
makes.unshift("Kia");

console.log(makes);

let firstArray = [];

firstArray.push("Trudy");
firstArray.push("Miguel", "Stephen");
firstArray.unshift("Chris");

console.log(firstArray);

let secondArray = ["Sibia", "Harold", "Peter"];

firstArray.push(...secondArray);

console.log(firstArray);

for (let i = 0; i < firstArray.length; i++) {
    console.log(`Name: ${firstArray[i]}`);
}
/* Destructuring */

// Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
};

let {firstName, lastName: Name, country = "US"} = person;

console.log(firstName + " " + Name);  // Output: John Doe
console.log("From: " + country); // Output: From: US

// String
let name = "YinCheng";
let [a1, a2, a3, a4, a5] = name;
console.log(a1) // Output: Y

// Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruit1, fruit2] = fruits;
console.log(fruit1 + " " + fruit2); // Output: Bananas Oranges

let [fruit3,,,fruit4] = fruits; // skip array values
console.log(fruit3 + " " + fruit4); // Output: Bananas Mangos

let {[0]: fruit5, [1]: fruit6} = fruits;
console.log(fruit5 + " " + fruit6); // Output: Bananas Oranges

// Rest
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers;
console.log(rest); //Output: [ 30, 40, 50, 60, 70 ]

// Maps
const fruit = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    ]);

    let text = "";
    for (const [key, value] of fruit) {
    text += key + " is " + value;
    }
    console.log(text); // Output: apples is 500bananas is 300oranges is 200

//Swapping
let first = "Eason";
let last = "Wang";

console.log("Before: " + first + " " + last); // Output: Before: Eason Wang
[first, last] = [last, first];
console.log("After: " + first + " " + last); // Output: After: Wang Eason
/* Object Methods */

// .assign(target, source) : 將 source的屬性 複製到 target
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}; // target object

const person2 = {
    firstName: "Anne",
    lastName: "Smith"
}; // source object

Object.assign(person1, person2);
console.log(person1);
// Output: { firstName: 'Anne', lastName: 'Smith', age: 50, eyeColor: 'blue' }

// .entries(object) : 以陣列的方式回傳物件的屬性與值
let e = Object.entries(person1);
console.log(e);
/* Output:
[
    [ 'firstName', 'Anne' ],
    [ 'lastName', 'Smith' ],
    [ 'age', 50 ],
    [ 'eyeColor', 'blue' ]
]
*/
const fruits = {
    Banana: 300,
    Orange: 200,
    Apples: 500
};

let text = "";
for(let [fruit, value] of Object.entries(fruits)){
    text += fruit + ": " + value + "\n";
}
console.log(text);
/* Output:
Banana: 300
Orange: 200
Apples: 500
*/
const myMap = new Map(Object.entries(fruits));
console.log(myMap); // Output: Map(3) { 'Banana' => 300, 'Orange' => 200, 'Apples' => 500

// .fromEntries() : 對 list 建立物件

const f = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];
const myObj = Object.fromEntries(f);
console.log(myObj); // Output: { apples: 300, pears: 900, bananas: 500 }

// .values(object) : 回傳值
console.log(Object.values(fruits)); // Output: [ 300, 200, 500 ]

// .groupBy(object) : 可以將物件中所有屬性的值 通過 function後回傳，不改變原始的值
const fru = [
    {name: "apples", quantity: 300},
    {name: "bananas", quantity: 500},
    {name: "oranges", quantity: 200},
    {name: "kiwi", quantity: 150}
];

function myCallback({ quantity }){
    return quantity > 200 ? "ok" : "low";
}

//const result = Object.groupBy(fruits, myCallback); ES2024

// .keys(object) : 利用陣列的方式，回傳object的值
console.log(Object.keys(fruits)); // Output: [ 'Banana', 'Orange', 'Apples' ]

// for(let variable in object){ code }
let t = "";
for(let x in fruits){
    t += fruits[x];
}
console.log(t); // Output: 300200500
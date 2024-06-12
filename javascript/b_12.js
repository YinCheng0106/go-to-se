/* typeof */
console.log(typeof "John"); // Output: string
console.log(typeof("John" + "Doe")); // Output: string
console.log(typeof(3.14)); // Output: number
console.log(typeof(33)); // Output: number
console.log(typeof(33 + 66)); // Output: number
console.log(typeof(true)); // Output: boolean
console.log(typeof(false)); // Output: boolean
console.log(typeof(1234n)); // Output: bigint
console.log(typeof(Symbol())); // Output: symbol
console.log(typeof(x)); // Output: undefined

console.log(typeof(null)); //Output: object

console.log(typeof({name: 'John'})); //Output: object
console.log(typeof([1, 2, 3, 4])); // Output: object
console.log(typeof(new Map())); // Output: object
console.log(typeof(new Set())); //Output: object

console.log(typeof(function(){})); // Output: function

// isArray() 是否為陣列
const fruits = ["apples", "bananas", "oranges"];
console.log(Array.isArray(fruits)); // Output: true

// instanceof 是否為指定物件類型
const time = new Date();
console.log((time instanceof Date)); // Output: true

/* undefined vs null */
console.log(typeof undefined); // Output: undefined
console.log(typeof null); // Output: object

console.log(null === undefined); // Output: false
console.log(null == undefined); // Output: true

/* constructor 建構子 */
console.log({name:'John',age:34}.constructor); // Output: [Function: Object]
console.log([1,2,3,4].constructor); // Output: [Function: Array]
console.log(new Date().constructor) // Output: [Function: Date]
console.log(new Set().constructor) // Output: [Function: Set]
console.log(new Map().constructor) // Output: [Function: Map]
console.log(function () {}.constructor) // Output: [Function: Function]
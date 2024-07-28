/* Casting */

// Casting with as
let x : unknown = 'hello';
console.log((x as string).length); // Output: 5

// Casting with <>
let y : unknown = 'hello';
console.log((<string>y).length); // Output: 5

// Force casting 強制轉換
let z = 'hello';
console.log(((z as unknown) as number).length); // Error
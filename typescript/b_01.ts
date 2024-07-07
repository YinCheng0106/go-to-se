/* Simple Type */

// Explicit 顯性類別
let firstName : string = "Dylan";

// Implicit 隱性類別
let lastName = "Wang";

// Unable to Infer 無法推斷
const json = JSON.parse("55");
console.log(typeof json); // Output: number
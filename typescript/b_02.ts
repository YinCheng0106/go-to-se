/* Special Types */

// Type : any
/* Error: without 'any'
    let u = true;
    u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
    Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
*/

let v : any = true;
v = "string";
Math.round(v);
// 因為將 v 這個變數的Type設為any，所以往後賦予的值將不會被檢查。

// Type : unknown
let w : unknown = 1;
w = "string"; // no Error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
} as { runANonExistentMethod : () => void }
if(typeof w === 'object' && w !== null){
    (w as { runANonExistentMethod : Function }).runANonExistentMethod();
}

// Type : never
/* Error :
let x : never = true; // Error: Type 'boolean' is not assignable to type 'never'.
*/

// Type : undefined & null
let y : undefined = undefined;
let z : null = null;
/* Function */

/*
function functionName(parameters){
    code
}
*/

function myFunction(a, b){
    return a * b;
}

// 利用 const 定義
const x = function(a, b){
    return a * b;
};

let z = x(4, 3); // 12

// The Function() Constructor
const myFunc = new Function("a", "b", "return a * b"); // 避免使用 new
let y = myFunc(4, 3); // 12

// Self-Invoking Functions : 自動呼叫 function
(function(){
    let a = "Hello";
})();


// Functions are Objects
function myfun(a, b){
    return arguments.length;
}
let b = myfun(4, 3); // 2
let text = myFunction.toString();

// Arrow Function : 箭頭函數
// ES5
var A = function(x, y){
    return x * y;
}

// ES6
const B = (x, y) => x * y;
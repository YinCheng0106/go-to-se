/* Error */

/*
try{
    code
}catch(err){
    code to handle errors
}finally{
    code to be executed regardless of the try / catch result
}
*/

// RangeError
let num = 1;
try{
    num.toPrecision(500); // 一個數字不能擁有500位有效數字
} catch(err) {
    console.log(err.name); // Output: RangeError
}

//Reference Error
let x = 5;
try{
    x = y + 1;
} catch(err) {
    console.log(err.name); // Output: ReferenceError
}

// Syntax Error
try{
    eval("alert('Hello)");
} catch(err) {
    console.log(err.name); //Output: SyntaxError
}

// Type Error
let n = 1;
try{
    n.toUpperCase();
} catch(err) {
    console.log(err.name); //Output: TypeError
}

// URI(Uniform Resource Identifier) Error
try{
    decodeURI("%%%");
} catch(err) {
    console.log(err.name); //Output: URIError
}
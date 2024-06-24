/* Function Parameter */

/*
function functionName(parameter1, parameter2, parameter3){
    code
}
*/

// Default Parameters
function myFunction(x, y){
    if(y === undefined){
        y = 2;
    }
}

// Default Parameter Values
function myFunc(x, y = 10){
    return x + y;
}
myFunc(5); // 15

// Function Rest Parameter
function sum(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// The Arguments Object
y = findMax(1, 123, 500, 115, 44, 88); // 500

function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}
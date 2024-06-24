/* Function Invocation */

function myFunction(a, b){
    return a * b;
}
myFunction(10, 2); // 20
window.myFunction(10, 2); // 20

let x = myFunc();
function myFunc(){
    return this;
}


const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName(); // "John Doe"

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

const myObj = new myFunction("John", "Doe");
myObj.firstName; // "John"
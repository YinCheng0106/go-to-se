/* Static Methods  */

class Car {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
    static hel(x){
        return "Hello " + x.name;
    }
}

const myCar = new Car("Ford");

console.log(Car.hello()); // Output: Hello!!
console.log(Car.hel(myCar)); // Output: Hello Ford

//myCar.hello(); // Error


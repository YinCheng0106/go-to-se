/* Classes */

/*
    class ClassName {
        constructor(){
            ...
        }
        method_1(){
            ...
        }
    }
*/

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

// Create Objects
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log("My car is " + myCar1.age() + "year old.");
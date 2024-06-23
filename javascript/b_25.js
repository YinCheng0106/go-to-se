/* Object Constructors */

function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English"; // Default Values
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

// Adding a Property to a Constructor

Person.prototype.nationality = "English";

// Adding Method to an Object
myMother.changeName = function(name){
    this.lastName = name;
}

// Adding a Method to a Constructor
Person.prototype.changeName = function(name){
    this.lastName = name;
}

myMother.changeName("Doe");
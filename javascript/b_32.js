/* Function bind() */

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

person.fullName; // undefined
let fullName = person.fullName.bind(member); // "Hege Nilsen"
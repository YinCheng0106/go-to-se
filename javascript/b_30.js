/* Function call() */

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
};

person.fullName.call(person1); // "John Doe"

person.fullName.call(person2); // "Mary Doe"
console.log(person.fullName(person1)); // Output: undefined undefined

person.fullName.call(person1, "Oslo", "Norway"); // 可接受餐參數
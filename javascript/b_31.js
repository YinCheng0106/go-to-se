/* Function apply() */

const person = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

person.fullName.apply(person1, ["Oslo", "Norway"]); // 將參數作為陣列

// Max
Math.max(1, 2, 3); // 3

Math.max.apply(null, [1, 2, 3]); // 3

Math.max.apply(" ", [1, 2, 3]); // 3

Math.max.apply(0, [1, 2, 3]); // 3
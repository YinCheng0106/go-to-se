/* Object Accessors */

// Getter
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang(){
        return this.language;
    }
};

// using a getter
console.log(person.lang); // Output: en

// Setter
const person_1 = {
    firstName: "Anna",
    lastName: "Wang",
    language: "",
    set lang(lang){
        this.language = lang;
    }
};

person_1.lang = "en";

console.log(person_1.language); // Output: en
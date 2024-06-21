/* Object */

// 建立一個物件(Object)
const person_1 = {};

// 新增屬性
person_1.firstName = "John";
person_1.lastName = "Doe";
person_1.age = 50;
person_1.eyeColor = "blue";

// 使用 new 來建立一個物件(Object)
const person_2 = new Object(); // 盡量不要使用 new Object() 來建立物件，會使程式的可讀性、簡單性和執行速度效率

// 利用 function 來建構物件
function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English"; // 屬性預設值
}

// 利用 function 來建立 Person物件
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

// Object.defineProperty(object, property, descriptor)

const person = {
    firstName : "John",
    lastName : "Doe",
    language : "EN",
};

Object.defineProperty(person, "year", {value : "2008"}); // 新增year屬性並附值
console.log(person.year); // Output: 2008
Object.defineProperty(person, "language", {value : "NO"}); // 更改language的值
console.log(person.language); // Output: NO

/* Property Attributes 屬性的屬性 */
// writeable : 可寫入
// enumerable : 可列舉
// configurable : 可設定

Object.defineProperty(person, "language", {writeable: false}); // 使 language 變為唯讀
Object.defineProperty(person, "language", {enumerable: false}); // 使 language 變為不可列舉

// Object.getOwnProperyNames(object) 回傳 object 的屬性

console.log(Object.getOwnPropertyNames(person));
// Output: [ 'firstName', 'lastName', 'language', 'year' ]

// Object.keys(object) 回傳 object 可列舉的物件屬性

console.log(Object.keys(person));
// Output: [ 'firstName', 'lastName' ]

/* Getter & Setter */

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + " " + this.lastName;
    }
})
console.log(person.fullName);
// Output: John Doe

// Object.values(object)
const myArray = Object.values(person);
console.log(myArray); // Output: [ 'John', 'Doe' ]

// Object.entries(object)

const fruits = {
    Banana: 300,
    Oranges: 200,
    Apples: 500,
};
let text = "";
for(let [fruit, value] of Object.entries(fruits)){
    text += fruit + ": " + value + "\n";
}
console.log(text); 
/* 
Output: 
Banana: 300
Oranges: 200
Apples: 500
*/

// JSON.stringify(object)
let myString = JSON.stringify(person);
console.log(myString); // Output: {"firstName":"John","lastName":"Doe"}
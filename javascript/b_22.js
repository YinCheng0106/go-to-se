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
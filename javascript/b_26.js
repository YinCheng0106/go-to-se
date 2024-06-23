/* Object Protection */

// .preventExtensions(object) : 防止物件添加屬性

const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.preventExtensions(person);
person.nationality = "English"; // Error

// .isExtensible(object) : 檢查是否可以添加屬性
Object.isExtensible(person); // false

// .seal(object) : 防止物件被添加或刪除屬性

Object.seal(person);
delete person.lastName; // Error

// .isSealed(object) : 檢查是否被密封
Object.isSealed(person); // 

// .freeze(object) : 凍結物件(不得更改、新增、刪除屬性)
Object.freeze(person);
person.firstName = "Eason"; // Error

// .isFrozen(object) : 檢查是否被凍結
Object.isFrozen(person); // true
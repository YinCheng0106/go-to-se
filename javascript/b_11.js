/* Map() */

const fruits = new Map([
    ["apples", 500],
    ["banana", 300],
    ["oranges", 200],
]);

// set()可用來變更現有的 Map值
fruits.set("a", 5);
fruits.set("b", 3);
fruits.set("c", 2);

// get() 可以取得Map中key的值
console.log(fruits.get("apples"));// Output: 500

// map 是一個 Objects
console.log(typeof fruits); // Output: object
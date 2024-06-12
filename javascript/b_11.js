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

// forEach() 
let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value;
});
console.log(text); // Output: apples = 500banana = 300oranges = 200a = 5b = 3c = 2

// entries()
let txt = "";
for(const x of fruits.entries()){
    txt += x;
}
console.log(txt); //Output: apples,500banana,300oranges,200a,5b,3c,2

// keys()
let t = "";
for(const x of fruits.keys()){
    t += x;
}
console.log(t); //Output: applesbananaorangesabc

// values()
let tx = "";
for(const x of fruits.values()){
    tx += x;
}
console.log(tx); //Output: 500300200532

// get() 可以取得Map中key的值
console.log(fruits.get("apples"));// Output: 500

// map 是一個 Objects
console.log(typeof fruits); // Output: object

// .size 取得Map的大小
console.log("fruits size of " + fruits.size); // Output: fruits size of 6

// delete() 刪除元素
fruits.delete("apples");
console.log(fruits);
/* Output:
Map(5) {
    'banana' => 300,
    'oranges' => 200,
    'a' => 5,
    'b' => 3,
    'c' => 2
}
*/

// clear() 清除Map所有的元素
fruits.clear();
console.log(fruits); // Output: Map(0) {}

// has() 是否有此元素
console.log(fruits.has("banana")); //Output: flase

// groupBy() ES2024
const car = [
    {name: "BMW", quantity: "50"},
    {name: "Ford", quantity: "40"},
    {name: "Toyota", quantity: "20"},
    {name: "Nissan", quantity: "100"},
];

function myCallback({quantity}){
    return quantity > 30 ? "ok" : "low";
}
const result = Map.groupBy(car, myCallback);
console.log(result)
/* Set() */

const letters = new Set(["a", "b", "c"]);

// .add() 添加在set後面
letters.add("d"); // ["a", "b", "c", "d"]
letters.add("e"); // ["a", "b", "c", "d", "e"]

let text = "";
for(const x of letters){
    text += x;
}
console.log(text);

// .has() 是否有
let answer = letters.has("s");
console.log("The answer is " + answer);

// forEach()
let txt = "";
letters.forEach(function(value){
    txt += value
})
console.log(txt);

// values()
const myIterator = letters.values();

let t = "";
for(const entry of myIterator){
    t += entry;
}
console.log(t);

// keys()
const myIteratorKeys = letters.keys();

let tx = "";
for(const entry of myIteratorKeys){
    tx += entry;
}
console.log(tx);

// entires()
const myIteratorEntires = letters.entries();

let x = "";
for(const entry of myIteratorEntires){
    x += entry;
}
console.log(x);
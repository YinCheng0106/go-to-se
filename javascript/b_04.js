/* for of String*/
const lang = "javascript";

let text = "";
for(let x of lang){
    //這邊的 x 是值(value)
    text += x;
    console.log(`text add => ${x}: ${text}`)
    /*
    Output:
    text add => j: j
    text add => a: ja
    text add => v: jav
    text add => a: java
    text add => s: javas
    text add => c: javasc
    text add => r: javascr
    text add => i: javascri
    text add => p: javascrip
    text add => t: javascript
    */
}

console.log(`finally: ${text}`); //Output: finally: javascript
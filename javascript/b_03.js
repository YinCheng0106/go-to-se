/* for of */
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for(let x of cars){
    //這邊的 x 是值(value)
    text += x;
    console.log(`text add => ${x}: ${text}`)
    /*
    text add => BMW: BMW
    text add => Volvo: BMWVolvo
    text add => Mini: BMWVolvoMini
    */
}

console.log(`finally: ${text}`); //Output: finally: BMWVolvoMini
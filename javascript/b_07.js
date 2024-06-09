/* break & continue */

// break : "jumps out" of a loop.
// continue : "jumps over" one iteration in the loop.

/* break */
let text = "";

for(let i = 0; i < 10; i++){
    if(i == 3){
        console.log("已跳出迴圈")
        break; // 跳出迴圈
    }
    text += "The number is " + i + "\n";
}
console.log(text);
console.log("結束第一個迴圈");
/*
Output:
    已跳出迴圈
    The number is 0
    The number is 1
    The number is 2

    結束第一個迴圈
*/

/* continue */

let txt = "";

for(let i = 0; i < 10; i++){
    if(i == 3){
        console.log("已跳過第" + i + "個的迴圈")
        continue;
    }
    txt += "The number is " + i + "\n"
}

console.log(txt);
console.log("結束第二個迴圈");
/*
Output:
    已跳過第3個的迴圈
    The number is 0
    The number is 1
    The number is 2
    The number is 4
    The number is 5
    The number is 6
    The number is 7
    The number is 8
    The number is 9

    結束第二個迴圈
*/
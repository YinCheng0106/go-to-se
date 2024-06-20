/* Best Practices */

/*
1. 避免全域的變數
2. 使用 var, let, const 來宣告變數，避免全域變數的產生
3. 在程式最上面宣告變數
4. 定義宣告變數的初始值
5. 使用 const 宣告 可以防止讓任何類型的意外變更
6. 不要使用 new Object()
7. 注意自動類型轉換
8. 使用 === 比較類型
9. 如果呼叫函數缺少參數，就使用參數預設值
10. switch 結尾務必使用 default，即使沒有必要
11. 避免使用 eval()
*/

//在程式最上面宣告變數
//定義宣告變數的初始值
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};

firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;


const car = {
    type: "Fiat",
    model: "500",
    color: "white",
}

car = "Fiat";

// 注意自動類型轉換
let x = "Hello"; // x is string
x = 5; // x is number

// 如果呼叫函數缺少參數，就使用參數預設值
function myFunction(x, y){
    if(y === undefined){
        y = 0;
    }
}
function myFun(x = 1, y = 1){ // 直接定義預設值
    /* code */
}

// switch 結尾務必使用 default，即使沒有必要
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown";
}
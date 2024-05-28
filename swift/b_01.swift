/* 變數＆常數 */

var a = 0; //var 宣告變數：賦值後可變更，但不能改變變數類別
a = 1;
print(a);

let b = 0; //let 宣告常數：賦值後不可再變更
//b = 1 -> error : cannot assign to value: 'b' is a 'let' constant
print(b);

//一行宣告多變數
var x = 1, y = 2, z = 3;
let pi = 3.14159, e = 2.71828;

//支援Unicode字元
let π = 3.14159;
let 💰 = "money";
let 愛 = "love";
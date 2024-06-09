/* do while */

/*
    do{
        code
    } while(condition)
*/

let i = 0;
let text = "";
do{
    //此區域必定執行一次
    text += "The number is " + i + "\n";
    i++;
} while(i < 10); //判斷條件
console.log(text);
/*
Output:
    The number is 0
    The number is 1
    The number is 2
    The number is 3
    The number is 4
    The number is 5
    The number is 6
    The number is 7
    The number is 8
    The number is 9

*/
/* Callback */

// Function

function myDisplayer(some){
    console.log(some);
}

function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("Goodbye");
}

// 函數會依照呼叫的順序執行，不會按照它們定義的順序

myFirst();
mySecond();
/* Output:
    Hello
    Goodbye
*/

function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer); //myDisplayer 不需 ()
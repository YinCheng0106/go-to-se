/* Function Closures */

// Nested Functions 巢狀函數
function add(){
    let counter = 0;
    function plus(){
        counter += 1;
    }
    plus();
    return counter; // 1
}

// Closures
const add = (function (){
    let counter = 0;
    return function (){
        counter += 1;
        return counter;
    }
})();

add();
add();
add(); // counter => 3
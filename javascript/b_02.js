/* forEach() */
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFuction);

function myFuction(value, index, array){
    txt += value;
}

console.log(txt); //Output:45491625
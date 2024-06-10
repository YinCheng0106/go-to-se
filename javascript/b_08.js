/* label */

/*
    label:
        statements
*/

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
list: {
    text += cars[0] + "\n";
    text += cars[1] + "\n";
    break list;
    text += cars[2] + "\n";
    text += cars[3] + "\n";
}

console.log(text);
/*
Output:
    BMW
    Volvo

*/

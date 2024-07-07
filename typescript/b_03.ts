/* Union Types */

// Union | (OR)
function printStatusCode(code: string | number){
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');

// Union Type Error
/*
function statusCode(code: string | number){
    console.log(`My status code is ${code.toUpperCase()}`)
}
    Error: Property 'toUpperCase' does not exist on type 'string | number'.
    因為 toUpperCase() 是用來讓 string 變成大寫，但是Union Type也有聯合 number 這個Type，
    所以無法使用 toUpperCase()
*/
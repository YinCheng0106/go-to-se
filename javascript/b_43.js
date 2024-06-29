/* Async / Await */

async function myFunction(){
    return "Hello";
}

myFunction().then(
    function(value) { myDisplay(value); },
    function(error) { myDisplay(error); }
)

async function myDisplay(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("I love You !!");
    });
    console.log(await myPromise);
}

myDisplay();
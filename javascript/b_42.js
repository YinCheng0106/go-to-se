/* Promises */

/*
let myPromise = new Promise(function(myResolve, myReject){
    myResolve(); // when successful
    myReject(); // when error
});

myPromise.then(
    function(value){ code if successful },
    function(error){ code if some error }
);
*/

function myDisplayer(some){
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = 0;

    if(x == 0){
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value){
        myDisplayer(value);
    },
    function(error){
        myDisplayer(error);
    }
);

// Callback

let myPro = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myResolve("I love You !!");
    }, 3000);
});

myPro.then(function(value){
    console.log(value);
});

// Waiting for a file

let myProm = new Promise(function(myResolve, myReject){
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function(){
        if(req.status == 200){
            myReSolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
});

myProm.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);
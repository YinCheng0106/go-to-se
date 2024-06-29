/* Asynchronous */

// setTimeout
setTimeout(myFunction, 3000); // 3秒呼叫 myFunction，所呼叫的 function不需要加()

function myFunction(){
    console.log("I love you !!");
}

setTimeout(function(){
    myFunc("I love You !!!");
}, 3000);

function myFunc(value){
    console.log(value);
}

// setInterval

setInterval(time, 1000); // 每1秒呼叫一次 time，所呼叫的 function不需要加()

function time(){
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
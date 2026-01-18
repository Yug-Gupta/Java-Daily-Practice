// // Async Await Syntax-
// function setTimeOutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
// }


// // syntactic sugar
// async function solve() {
//     await setTimeOutPromisified(1000);
//     console.log("hi");
//     await setTimeOutPromisified(3000);
//     console.log("hello");
//     await setTimeOutPromisified(5000);
//     console.log("hello there");
// }

// solve();
// console.log("After solve function");






const { log } = require("console");
const fs = require("fs");
const { resolve } = require("path");
function setTimeOutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}


// Promise create ese karte hai->
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                console.log("File not found");
            }else{
                resolve(data);
            }
        })
    })
}

// Promise use karana yeh hota hai->
readFileAsync().then(function(x){
    console.log("Files has been read"+"\n"+x);
}).catch(function (e){
    console.log(e);
})
console.log("After solve function");

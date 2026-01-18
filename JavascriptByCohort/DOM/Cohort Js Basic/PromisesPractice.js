const fs = require("fs");

function readTheFile(resolve){
    setTimeout(function (){
        console.log("callback based setTimeOut completed");
        resolve();
    },3000);
}

function setTimeOutPromisified(){
    return new Promise(readTheFile);
}

let p = setTimeOutPromisified();

function callBack(){
    console.log("callBack called");
}

p.then(callBack);


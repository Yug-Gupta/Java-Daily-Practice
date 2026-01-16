// // Classes - 
// class Rectangle{
//     constructor(length,widht,color){
//         this.widht = widht;
//         this.length = length;
//         this.color = color;
//     }
//     area(){
//         return this.length*this.widht;    
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);  // This is string concatenation.
//     }
// }

// const { useCallback } = require("react");

// const reac = new Rectangle(2,3,"red");
// const reac2 = new Rectangle(10,23,"black");
// const area = reac.area();
// const area2 = reac2.area();
// reac.paint();
// console.log(area);
// reac2.paint();
// console.log(area2);



// // Some jS inbuilt classes ->

// const date = new Date();   // created a new object of date class
// console.log(date.getMonth());
// console.log(date.getFullYear());



// // In JS also have a map class->

// const map = new Map();
// map.set('name','alice');
// map.set('age',28);
// map.set(27,'Birth-date');
// // console.log(map);
// console.log(map.get('name'));
// console.log(map.get(27));



/* 
Promise class ->
 Promise class gives u a primise that I will return you something in the future.

*/


// NOTE-> Defining a promise is hard but using a promise a easy

// A promise in JS is an object that represents the eventual completion (or failures) of an asynchronous operation its returning value.

// //Promises
// function log_Name(){
//     console.log("Yug");
// }
// setTimeout(log_Name,5000); // callback the log_Name function



// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// function callback(){
//     console.log("3 seconds have passed");
// }
// setTimeout(callback,3000);  // callback version

// setTimeoutPromisified(3000).then(callback);  //promisified version

// Promisified version are more syntatically cleaner.

  

// function waitForSolve(resolve){  // resolve = main
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("main is called");
// }

// function setTimeoutPromisified(){
//     return new Promise(waitForSolve);
// }

// setTimeoutPromisified().then(main);




// Promisified version of setTimeOut->
// function random(resolve){  // resolve is also a function
//     setTimeout(resolve,3000);
// }
// let p = new Promise(random);   // supposed to return you something eventually

// // using the eventual value returned by the promise
// function callback(){
//     console.log("Promise succeded");
// }
// p.then(callback);




// create the promisified version of fs.readFile , fs.writeFile , cleanFile ->



// // Promisified version of the readfile function->
// const fs = require("fs");

// function readTheFile(sendTheFinalValueHere){
//     fs.readFile("a.txt","utf-8",function(err,data) {
//         sendTheFinalValueHere(data);
//     });
// }

// function readFile(fileName){
//     return new Promise(readTheFile);
// }
// const p = readFile();

// function callback(contents){
//     console.log("Promise success");
// }
// p.then(callback);




// Practice of promises-
const { log } = require("console");
const fs = require("fs");

console.log("---top of the file---");

function readTheFile(resolve){
    console.log("readTheFile called");
    setTimeout(function (){
        console.log("callBack based setTimeOut completed"); 
        resolve();
    },3000);
}

function setTimeoutPromisified(fileName){
    console.log("setTimeOutPromisified called");
    return new Promise(readTheFile);
}

const p = setTimeoutPromisified();

function callback(){
    console.log("timer is done");
}
p.then(callback);

console.log("---end of the file---");




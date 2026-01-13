// // Synchronous code-
// function sum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// let ans = sum("20",30);
// console.log(ans);

// function sumNo(n){
//     return n*(n+1)/2;
// }
// let res1 = sumNo(100);
// console.log(res1);
// let res2 = sumNo(1000);
// console.log(res2);
// let res3 = sumNo(10000);
// console.log(res3);



// Input-Output operations->

let fs = require("fs");

// Synchronously->
// const contents1 = fs.readFileSync("b.txt","utf-8");  // synchronously
// console.log(contents1);


function read(err,data){
    if(err){
        console.log("File not found!");
    }else{
        console.log(data);
    }
}

fs.readFile("a.txt","utf-8",read);  // asynchronously
fs.readFile("b.txt","utf-8",read);  // asynchronously

console.log("Done");


function timeout(){
    console.log("Click on button");
}
console.log("Hi");
setTimeout(timeout,15000);
console.log("Welcome to loupe.");


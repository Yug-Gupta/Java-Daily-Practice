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



// Input-Output operations-

const fs = require("fs");
const contents = fs.readFileSync("a.txt","utf-8");
console.log(contents);

const contents1 = fs.readFileSync("b.txt","utf-8");
console.log(contents1);


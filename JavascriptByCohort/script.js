// Syntax of JS-
let firstName = "John";
const age = 25;
var isStudent = true;
console.log(firstName);
console.log(age);
console.log(isStudent);


// Datatypes-
var isStudent = "Yug";
var isStudent = 45;
console.log(isStudent);

// let firstName = 45;  // It gives the error.
// console.log(firstName);

// In curr time do not use the var.

let arr = [1,2,3,4];  // array
console.log(arr[0]);

// Functions-
function greet(name){
    return "Hello "+name;
}
let ans = greet("Yug");
let ans1 = greet("Shyam");
console.log(ans1);
console.log(ans);

function sum(a,b){
    return a+b;
}
let x = sum(4,64);
console.log(x);


// Assignment 1-
function sumString(a,b){
    return a+b;
}
let ass12 = sumString(33,43);
let ass1 = sumString("Java","Dev");
console.log(ass1);
console.log(ass12);


// Assignment 2-
function canVote(ageVote){
    return ageVote > 18;
}
let ass2 = canVote(14);
console.log(ass2);


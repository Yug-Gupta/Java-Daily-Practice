/*
Data-Types-

1.Primitive
    String
    number
    boolean
    undefined
    null
    bigint
    symbol
2.Non-primitve
    object
    array
    function

*/

//variable declartion = variable initialisation
let username = "Yug Gupta"; //String
let age = 12; //number
let flag = true; //boolean
let a; //undefined
let car = null; //null
let bigNum = 13213424n;  //bigInteger
let uniqueKey = Symbol("userID");
let courses = ["js","react","String","Java"];   // array
let users = {name : "Gupta Ji",phone : 45156156};  //object
function welcome(){
    console.log("Welcome in function");
}
welcome();

console.log(typeof username);  // This typeOf print the type of datatype.
console.log(typeof age);
console.log(typeof flag);
console.log(typeof a);
console.log(typeof car);
console.log(typeof bigNum);
console.log(typeof uniqueKey);
console.log(typeof courses);
console.log(typeof users);
console.log(typeof welcome);


// Some bug of JS-
console.log(typeof "object");  // This is correct
console.log(typeof null);   // This is wrong this is the bug of JS





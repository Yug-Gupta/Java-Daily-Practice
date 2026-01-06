var a = 10
console.log(a)

console.log("Hello World");

console.warn("This is warning")

console.error("This is an error")

// alert("This is an alert message")

// prompt("Type your name: ")


var n = "Pappu"
n = "Ravi"
console.log(n)

let m = "Kittu"
m = "Bittu"
console.log(m)

const pi = 3.14
// pi = 3.1456  THiS WILL GIVE ERROR
console.log(pi)

var y;
console.log(y);  


var a = 10
var b = a
a += 5
console.log(a);
console.log(b);

var arr1 = [1,2,3]
var arr2 = arr1  // reference copy
arr1.pop()
console.log(arr1);
console.log(arr2);

var arr3 = [4,5,6]
var arr4 = [...arr3]  // deep copy
arr3.pop()
console.log(arr3);
console.log(arr4);
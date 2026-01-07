var a = 10
if(a>9){
    console.log("Hi")
}else{
    console.log("Hello")
}

for(var i = 0;i<5;i++){
    console.log(i)
}  
console.log("\n")
var arr = [1,2,3,4]
// For-each loop
arr.forEach(data =>{
    console.log(data)
})


// Functions -
// In ES5 have 3 functions-
/*
1. function statement
2. function expression
3. anonymous function 

// In ES6 have only one function but we can write it in 3 types-
1. fat arrow function
    a. basic fat function
    b. fat arrow func with one parameter
    c. fat arrow with implicit return 
*/ 

// NOTE - In JS if you not return any function but they will definately return something
//NOTE-  Agar humne apne method mai khuch bhi nhi return kara hai to bhi wo method undefined return karega



// Functions in ES5-->
// 1. function statement-
function print(name){
    console.log("Yug "+name)
    // return undefined
}
var res = print("Gupta")
console.log(res)

function animal(an){
    console.log("King "+an)
    return "Means King of Jungle"
}
var s = animal("lion")
console.log(s)


// 2. expression function-
var fun = function(){
    console.log("Type of function expression")
}
fun()

// 3. anonymous function-
var y = function(){
    console.log("Type of anonymous function")
}
y()



// Functions in ES6-->
// 1. fat arrow function->
var xy = ()=>{
    console.log("Type of fat-arrow function")
}
xy()

//  a. basic fat function-
var fat = ()=>{
    console.log("Type of basic fat function")
} 
fat()

//  b. fat func with one parameter-
var fuck = (a)=>{
    console.log("Type of fat func with one prarameter "+a)
}
fuck("AAh...")

//  c. fat func with return-
var suck = (p)=>"Type of fat function with return type "+p

var bj = suck("Uff...")
console.log(bj)
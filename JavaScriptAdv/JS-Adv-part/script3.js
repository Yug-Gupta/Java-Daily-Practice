// var a
// console.log(a)  // Undefined

// console.log(b)  // Not-defined

var arr = [1,2,3]
console.log(arr[6])  // In JS there is no null pointer 
var fun = ()=>{
    
} 
var brr = [1,"Yug","34",[],function(){}]
console.log(brr)

console.log(brr[1])
console.log(brr[3])
console.log(brr[4])

// Syntax to make an object-
/*
--> var obj = {}
--> var obj1 = new object()
*/ 

var obj = {
    name:"Yug",
    "age":25,
    email:"yuggupta905@gmail.com",
    contact:"45155664"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.contact)


/*
-------------------------
this keyword is javascript
-------------------------

-> In JAVA this refer to the current object instance right but in javascript this value is different at different place

1. global - window

2. function - window

3. method - object

4. function inside method(ESS) - window

5. function inside method (ES6) - object

6. constructor - new blank object

7. event listiner - that element jispe listiner laga ha

global : kisi bhi scope me nhi
-------------------------------
console.log(this)

*/

console.log(this) // global


//-> function
function check(){
    console.log(this)     
}
check()


//-> method = When function defined inside an object 
var object = {
    name : function(){
        console.log(this)
    },
    surName:"Gupta"
}
object.name()
console.log(object.surName)



//-> function inside method(ESS)-
var pick = {
    parent : function (){
        function child(){
            console.log(this)
        }

        child()
    }
}
pick.parent()


//-> function inside method (ES6)-
var chuska = {
    p1 : function(){
        var child = ()=>{
            console.log(this)
        }
        child()
    }
}
chuska.p1()
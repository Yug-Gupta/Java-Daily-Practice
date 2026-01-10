// // Constructor-->
// function print(){
//     console.log(this)
// }
// var obj =  new print()    // This makes a new object
// console.log(obj)



// document.querySelector("button")
// .addEventListener("Click",function(){
//     console.log(this);
// });


//---------------------
// call apply bind-->
//---------------------
// apply call--
var obj = {
    name:"Yug"
}
function print(x,y,z){
    console.log(this,x,y,z)
}
print.apply(obj,[1,2,3])


function cons(){
    console.log(this.name)
}
cons.call(obj)

// apply bind--
function chuka(){
    console.log(this.name)
}
var func = print.bind(obj)
func();


/*-------------------
Closures in JS
--------------------*/
// A function which return another function using some values of it's parent is called closure 
// Syntax-->

function chiku(){
    var p = 10;
    return function child()
    {
        console.log(p);
    }
}

var funct = chiku();
funct();

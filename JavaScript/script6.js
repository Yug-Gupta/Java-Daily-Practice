/* Creating and deleting element-
creating of element will be done in part = creating + adding in page


creating-->
var h1 = document.createElement('h1)
h1.textContent="hello"
h1.classList.add("test")
*/


// Create Element->
var h1 = document.createElement('h1');
h1.textContent="hello";
h1.classList.add("test")

// Add element-
document.querySelector("body").appendChild(h1);

// Remove element-
h1.remove();

var but = document.createElement("button");
but.textContent="Start";
but.classList.add("buck");

document.querySelector("body").appendChild(but);
// but.remove();  //remove the button
but.addEventListener('click',function(){
    console.log("Ha bhai kar diya na click..")
})

// but.addEventListener("mouseover",function(){
//     console.log("This is mouseover event")
// })

// but.addEventListener("mouseout",()=>{
//     console.log("This is mouseout event")
// })

// but.addEventListener("keydown",()=>{
//     console.log("This is keydown event")
// })

// but.addEventListener("keyup",()=>{
//     console.log("This is keyup event")
// })




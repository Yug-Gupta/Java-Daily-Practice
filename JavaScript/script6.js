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


// MouseEvent->
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


// KeyboardEvent->
// but.addEventListener("keydown",()=>{
//     console.log("This is keydown event")
// })

// but.addEventListener("keyup",()=>{
//     console.log("This is keyup event")
// })


// Form and input Event->
let box = document.createElement("input");
box.textContent="Hello";
box.classList.add("text");

document.querySelector("body").appendChild(box)


box.addEventListener("input",()=>{
    console.log("You input in the box")
})

box.addEventListener("change",()=>{
    console.log("Value change")
})

// --------------------------------------------------------
/*In HTML -
<form id="myForm">
    <input type="text">
    <button type="submit">Submit</button>
</form>

-> The below code you can see that this is the conversion of this HTML code-
*/
let form = document.createElement("form")
form.id="myform"

let input = document.createElement("input")
input.type = "text"

let button = document.createElement("button")
button.type ="Submit"
button.innerText="Submit"

form.appendChild(input)
form.appendChild(button)
document.querySelector("body").appendChild(form)

form.addEventListener("submit",(e)=>{
    e.preventDefault()  // Stops page reload
    console.log("User submit this")
})

//----------------------------------------------------


// Window and Document Event->
window.addEventListener("load",()=>{
    console.log("Page loaded")
})

window.addEventListener("scroll",()=>{
    console.log("Scrolling...")
})

window.addEventListener("resize",()=>{
    console.log("Window resized")
})


// Focus Event->
input.addEventListener("focus",()=>{
    console.log("Focus hai")
})

input.addEventListener("blur",()=>{
    console.log("Focus gya")
})
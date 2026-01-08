/*
What is DOM?
-> DOM stands for Document Object Model

It's a way for web browser to represent and control HTML tags

But why we need DOM ?

-> In html we don't have control over tag like we want to to show or hide some detail
on click of a button
we are not able do it with html so we need to take help from DOM.


what is DOM manipulation?

->page me kuch bhi change krna ya manipulate krna use kam DOM manipulation kahte ha.


access => reach => selection => change

How to access element ?

1. selection of element
    document.getElementById
    document.getElementsByTagName
    document.getElementsByClassName
    document.querySelector('button')
    ,document.querySelector('#btn")
    ,document/querySelector('.btn);
    document.querySelector('h1)
*/

window.console.log("Yug")
var ref = document.querySelector('h2');  //selection
ref.textContent = "bfyhuvweufb"

var h1 = document.querySelector("#h1");
h1.textContent= "bfbwuif"

var sab = document.querySelector(".text");
sab.textContent = "chiku";


/*
modifying element in javascript
---------------------------------

1. textContent: will use textContent for only text because it will not understand html tags

2. innerHTML will use when we have to use html tags


*/

var but = document.querySelector("#button");
but.textContent= "Starting...";

var h5 = document.querySelector("#hello");
h5.textContent="hello"
h5.innerHTML='<i>Helloe</i>';

// adding css
h5.style.color= "red";
but.style.backgroundColor ="Blue";
sab.style.fontFamily="Courier New";


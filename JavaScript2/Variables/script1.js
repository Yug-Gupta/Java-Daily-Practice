let shopname = "Gupta Stationary";
let customerNum = 10;

console.log(shopname);
customerNum = 20;
console.log(customerNum);

/*
In JS there are three variables that we use-

1. let 
2. var ( this is and old way representation)
3. const ( this use when you required fix value)

*/

const address = "Jhinjhak Bada chauraha";
console.log(address);

var name = "Yug";
console.log(name);
name = "Pream";
console.log(name);

// NOTE-> Diff between let and var-

let chutiya = "chutiya banoge";
console.log(chutiya);
// let chutiya = "chutya ho tum";  //let mai tum ek hi variable ka use do bar nhi kar sakte ho

var buddhu = "buddu banjaoge";
console.log(buddhu); 
var buddhu = "buddhu ho tum";   // lakin var mai hum use ar sakte hai issi leye yeh old way hai aur latetst JS mai use bhi nhi hota hai.
console.log(buddhu);


/*NOTE-

keyworrds      reassign      redeclare      scope
var               Yes          Yes         function
let               Yes          No           block
const             No           No           block

*/

for(let i = 0;i<5;i++){
    console.log(i);
}

function print(){
    var x = "This is x";
    console.log(x);
}
print();

// * Interview Question-
{
    let p = "Hello";
    var q = "Yug";
    const r = "Kese ho";
}

// console.log(p);  // let scope inside the block
console.log(q);  // var scope inside the function
// console.log(r);  // const scope insode the block


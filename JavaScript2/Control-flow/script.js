/*
Operators->
*/

/*
Control-flow->
1. make decision : if,else,switch
2. repeat : for , while , do while, for each
3. jump : break,continue,return
*/ 

const age = 26;
if(age > 18){
    console.log("You are allowed");
}else if(age > 60){
    console.log("You are not allowed to watch");
}else{
    console.log("You are kid so not allowed");
}


const day = 2;
switch(day)
{
    case 0:
        console.log("Today Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3: 
        console.log("Thrusday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    default: 
        console.log("Invalid input");
}


// Loop->

for(let i = 0;i<5;i++){
    console.log("Hello");
}

let i = 1;
while(i<=5){
    console.log("Gupta Ji");
    i++;
}



// function setTimeOutPromisified(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve,duration);
//     });
// }


// function callback(){
//     console.log("5 second has passed");
// }

// setTimeOutPromisified(5000).then(callback);




// // Assignment->

// function callback(){
//     console.log("hi");
// }


// // callback hell->
// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hello there");
//         },5000);
//     },3000);
// },1000);



// // setTimeOut hell-> also  a type of callback hell
// setTimeOutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeOutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeOutPromisified(5000).then(function(){
//             console.log("hello there");
//         });
//     });
// });



// Promise chaining->
function setTimeOutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

setTimeOutPromisified(1000)
    .then(function(){
        console.log("hi");
        return setTimeOutPromisified(3000);
    })
    .then(function(){
        console.log("hello");
        return setTimeOutPromisified(5000);
    })
    .then(function(){
        console.log("hello there");
    });
// Async Await Syntax-

function setTimeOutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

async function solve() {
    await setTimeOutPromisified(1000);
    console.log("hi");
    await setTimeOutPromisified(3000);
    console.log("hello");
    await setTimeOutPromisified(5000);
    console.log("hello there");
}

solve();
console.log("After solve function");

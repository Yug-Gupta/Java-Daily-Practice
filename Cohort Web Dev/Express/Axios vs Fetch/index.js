// axios vs fetch -
// This axios and fetch is use for the send  backend request and get back the response 
const axios = require("axios");
const { response } = require("express");

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json.todos.length);
            
//         });
// }

async function main(){
    const response =  await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
}


// async function main() {
//     const response = await axios.get("")
// }

main();

const express = require("express");
const app = express();

let request = 0;

function requestCount(){
    request++;
    console.log(`The number of request: ${request}`);
}

app.get("/sum/:a/:b",function(req,res){
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    requestCount();
    res.json({
        Sum : a+b
    });
});



app.listen(3000);
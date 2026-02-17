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

app.get("/mul/:a/:b",function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    requestCount();
    res.json({
        Multiply : a*b
    });
});

app.get("/div/:a/:b",function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    requestCount();
    res.json({
        Divide : a/b
    });
});

app.get("/sub/:a/:b",function(req,res){
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    requestCount();
    res.json({
        Subtraction : a-b
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
});
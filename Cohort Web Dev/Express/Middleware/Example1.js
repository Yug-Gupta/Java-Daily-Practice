const express = require("express");
const app = express();


// This is the perfect example of middleware
let requestCount = 0;

function request(req,res,next){
    requestCount++;
    req.name = "randomYug123";
    console.log("Total number of of request are : "+requestCount);
    next();
}

function sum(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    console.log(req.name);
    res.json({
        Sum : a+b
    });
}

app.get("/sum",request,sum);

app.listen(3000,()=>{
    console.log("Server is running");
})
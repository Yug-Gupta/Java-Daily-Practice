const express = require("express");

const app = express();

let requestCount = 0;

app.use(function(req,res,next){
    requestCount++;
    next();
});

app.get("/user",function(req,res){
    res.status(200).json({name : "John"});
});

app.post("/user",function(req,res){
    res.status(200).json({msg : "Created dummy user"});
});

app.get("/request",function(req,res){
    res.status(200).json({requestCount});
});

app.listen(3000,()=>{
    console.log("Server is running on localhost:3000/user");
});

module.exports = app;
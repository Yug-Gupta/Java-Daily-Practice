const express = require("express");
const app = express();

app.get("/sum",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        Sum : a+b
    });
});

app.get("/multiply",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        Multiply : a*b
    });
});

app.get("/divide",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        Divide : a/b
    });
});

app.get("/sub",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        Sub : a-b
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
});
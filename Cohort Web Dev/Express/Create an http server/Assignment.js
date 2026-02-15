const express = require("express");
const app = express();

app.get("/sum/:a/:b",function(req,res){
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    res.json({
        Sum : a+b
    });
});

app.get("/multiply/:a/:b",function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        Multiply : a*b
    });
});

app.get("/divide/:a/:b",function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        Divide : a/b
    });
});

app.get("/sub/:a/:b",function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    res.json({
        Sub : a-b
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
});
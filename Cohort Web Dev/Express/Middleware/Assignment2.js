const express = require("express");
const app = express();

app.use(express.json());

app.post("/sum",function(req,res){
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.json({
        Sum : a+b
    });
})

app.post("/mul",function(req,res){
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        Multiply : a*b
    });
});

app.post("/div",function(req,res){
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        Divide : a/b
    });
})

app.post("/sub",function(req,res){
    const a = req.body.a;
    const b = req.body.b;
    res.json({
        Subtract : a-b
    });
});

app.listen(3000,()=>{
    console.log("Server is running...");
});
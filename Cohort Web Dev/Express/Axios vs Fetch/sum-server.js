const express = require("express");
const app = express();

app.get("/sum",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        ans : a+b
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
});
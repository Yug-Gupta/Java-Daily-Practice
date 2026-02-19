const express = require("express");
const app = express();

function loggerMiddleware(req,res,next){
    console.log("Method is : "+req.method);
    console.log("Host is : "+req.hostname);
    console.log("Route is : "+req.url);
    console.log(new Date());
    console.log();
    next();
}

app.use(loggerMiddleware);

app.get("/sum",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        Sum : a+b
    });
})

app.get("/mul",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        Multiply : a*b
    });
})

app.get("/sub",function(req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        Subtract : a-b
    });
})

app.get("/div",function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        Divide : a/b
    });
})

app.listen(3000,()=>{
    console.log("Server is running...");
})
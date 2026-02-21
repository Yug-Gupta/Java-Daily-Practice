const express = require("express");
const app = express();


app.use(express.json());


//By this we can call our index.html in the same server of the index.js file
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/sum",function(req,res){
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.json({
        Sum : a+b
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
})
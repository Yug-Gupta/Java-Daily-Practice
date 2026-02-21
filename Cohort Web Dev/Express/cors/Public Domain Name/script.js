const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/sum",function(req,res){
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    res.json({
        Sum : a+b
    });
})

app.listen(3000,()=>{
    console.log("Server is running");
})
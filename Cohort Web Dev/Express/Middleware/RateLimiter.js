const express = require("express");
const app = express();

let numberOfRequestForUser = {};
setInterval(()=>{
    numberOfRequestForUser = {};
},1000);

app.use(function(req,res,next){
    const userId = req.headers["user-id"];
    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId]++;
        if(numberOfRequestForUser[userId] > 5){
            res.status(404).send("no enrty");
        }else{
            next();
        }
    }else{
        numberOfRequestForUser[userId] = 1;
        next();
    }
})


app.get("/user",function(req,res){
    res.json({numberOfRequestForUser});
});

app.listen(3000,()=>{
    console.log("Server is running on : http://localhost:3000/user");
})
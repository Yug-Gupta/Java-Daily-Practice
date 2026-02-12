const express = require("express");

const app = express();


function isEligible(age){
    if(age >= 14){
        return true;
    }else{
        return false;
    }
}

function isOldEnough(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({
            msg : "Sorry you are not eligible"
        })
    }
}

app.use(isOldEnough);

app.get("/ride1",function(req,res){
    res.json({
        msg : "You are eligible for the ride 1"
    });
})

app.get("/ride2",function(req,res){
    res.json({
        msg : "You are eligible for ride 2"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000/ride1");
});
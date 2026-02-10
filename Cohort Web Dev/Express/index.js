const express = require("express")

const app = express()

app.use(express.json());


const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }, {
        healthy : true
    } ]
}]

app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofHealthyKidney = 0;
    for(let i = 0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberofHealthyKidney++;
        }
    }
    const numberofUnhealthyKidney = numberofkidneys - numberofHealthyKidney;
    res.json({
        johnkidneys,
        numberofHealthyKidney,
        numberofUnhealthyKidney
    })
})

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg : "Done!"
    })
})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})

app.listen(3000,()=>{
    console.log("The server is running on : http://localhost:3000/ ");
})
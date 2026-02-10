const express = require("express")

const app = express()

const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }, {
        healthy : true
    }]
}]

app.get("/",function(req,res){
    const johnkidneys = users[0].kidneys;
    console.log(johnkidneys);
})

app.post("/",function(req,res){

})

app.put("/",function(req,res){

})

app.delete("/",function(req,res){

})

app.listen(3000,()=>{
    console.log("The server is running on : http://localhost:3000/ ");
})
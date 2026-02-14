const express = require("express");
const app = express();

let errorCount = 0;
app.use(function(err,req,res,next){
    res.status(404).send({})
    errorCount++;
});

app.listen(3000,()=>{
    console.log("Server is running");
});
module.exports = app;
const express = require("express");

const app = express();


//route handlers-
app.get('/' ,function (req,res){
    res.send('Hello World');
})

app.get('/asd' ,function (req,res){
    res.send('Hello World from the asd point');
})

app.listen(3001);
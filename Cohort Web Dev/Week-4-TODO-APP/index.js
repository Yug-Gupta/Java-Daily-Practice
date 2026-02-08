const express = require("express");

const app = express();


//route handlers-
app.get('/' ,function (req,res){
    // req -> this is request objext and this is the inbuilt argument of express library.
    // res -> this is response object and this is also the inbuilt argument of express library
    res.send('Hello World');
})

app.get('/asd' ,function (req,res){
    res.send('<b>Hi there this from the asd endpoint</b>');
})

app.post('/',function (req,res){
    res.send('Hello World from the post endpoint');
})

app.listen(3001,()=>{
    console.log('Server is running on http://localhost:3001/');
});  // Port number
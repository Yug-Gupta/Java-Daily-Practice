const express = require("express");

const app = express();

function calculateSum(a,b){
    return a+b;
}

app.get('/',function (req,res){
    let a = req.query.a;
    let b = req.query.b;
    let ans = calculateSum(a,b);
    res.send(ans);
})

app.listen(8000,()=>{
    console.log('Server is running in http://localhost:8000');
});
const express = require("express");

const app = express();

function calculateSum(a,b){
    return a+b;
}

app.get('/',function (req,res){
    let ans = calculateSum(4,5);
    res.send(ans);
})

app.listen(8000,()=>{
    console.log('Server is running in http://localhost:8000');
});
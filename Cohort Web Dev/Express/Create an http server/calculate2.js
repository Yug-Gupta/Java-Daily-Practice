const express = require("express");

const app = express();

function calculateSum(a,b){
    let sum = a+b;
    return sum;
}

app.get('/',function (req,res){
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const ans = calculateSum(a,b);
    res.send(ans.toString());
})

app.listen(8000,()=>{
    console.log('Server is running in http://localhost:8000');
});
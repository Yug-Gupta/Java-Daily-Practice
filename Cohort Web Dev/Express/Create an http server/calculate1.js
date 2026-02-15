const express = require("express");

function calculateSum(n){
    let sum = (n*(n+1))/2;
    return sum;
}

const app = express();

app.get('/',function (req,res){
    const n = req.query.n;  // This is used to take the input in the url -> ( Method is -> /?n=5 )
    let ans = calculateSum(n);
    res.send(ans.toString());
})

app.listen(3000);
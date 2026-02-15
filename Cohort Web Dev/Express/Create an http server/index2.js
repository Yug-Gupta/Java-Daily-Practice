const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();


// This ( /:fileName ) -> Whatever you can write in the instead of fileName this will default get this route. )
app.get("/:fileName",function(req,res){
    const name = req.params.fileName;
    const filePath = path.join(__dirname,name);
    console.log(`Your file name is : ${name}`);
    fs.readFile(filePath,"utf-8",function (err,data){
        const fixedData = data.replace(/\r\n/g, "\n");
        res.json({
            "data" : fixedData
        });
    })
});

app.listen(3000,()=>{
    console.log("Server is running in http://localhost:3000");
}); 
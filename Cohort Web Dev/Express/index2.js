const express = require("express");

const app = express();


// This ( /:fileName ) -> Whatever you can write in the instead of fileName this will defualt get this route. )
app.get("/files/:fileName",function(req,res){
    const name = req.params.fileName;
    console.log(name);
    res.json({});
});

app.listen(3000,()=>{
    console.log("Server is running in http://localhost:3000");
});
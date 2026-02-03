const fs = require("fs");

function main(filename){
    fs.readFile(filename,"utf-8",function(err,data){
        let total = 0;
        for(let i = 0 ;i<data.length;i++){
            if(data[i] === " "){
                total++;
            }
        }
        console.log(total+1);
    })
}
main(process.argv[2]);
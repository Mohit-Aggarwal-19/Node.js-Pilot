const fs = require("node:fs");

const readFile = fs.readFileSync("./inputFile.txt" , "utf-8");

console.log("read file output:",readFile)

fs.readFile('./sampleInputFile.txt', "utf-8",(err, res)=>{
  if(err){
    console.log("error:",err)
  }else{
    console.log("response:",res)
  }
})
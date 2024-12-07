const fs = require("node:fs/promises");

fs.readFile("./sampleInputFile.txt", "utf-8").then((data)=>{
  console.log("data",data);
}).then((err)=>{
  console.log(err)
})
const fs = require("node:fs");

const readableStreams = fs.createReadStream("./sampleInputFile.txt", {encoding:"utf-8",highWaterMark:4});

const writableStreams = fs.createWriteStream("./file2.txt")

readableStreams.on("data",(c)=>{
  if(c){
    console.log("chunck",c);
    writableStreams.write(c);
  }
})
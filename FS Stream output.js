const fs = require("node:fs");

fs.writeFileSync("./greet.txt", "Hello World");

fs.writeFileSync("./greet.txt", "Hello from Person", {flag:"a"},(err)=>{
  if(err){
    console.log("error",err)
  }else{
    console.log("Success appending");
  }
})
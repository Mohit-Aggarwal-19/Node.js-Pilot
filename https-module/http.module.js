const https = require('node:http');

const server = https.createServer((request,response) =>{
    response.writeHead(200, {
      'content-type':'text/plain'
    });

    response.end("Hello World");
});


server.listen(3000,()=>{
  console.log(`server is running on 3000`)
})
const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((request,response)=>{
  response.writeHead(200,{
    'content-type':'text/html'
  });
  // response.end('<h1>This is sample header from server Response<h1>');
  const html = fs.readFileSync('https-module/index.html','utf-8');
  response.end(html);

});

const port$=2345;
server.listen(port$,()=>{
  console.log(`server is running on ${port$}`)
})
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end("I'm alive!\n");
}).listen(4000);
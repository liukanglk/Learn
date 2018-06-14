let http=require('http');

let server=http.createServer(function (request,response) {
    response.writeHead(200,'Content-Type','text/plain');
    response.write('Hello Node');
    response.end();
});
server.listen(9000);


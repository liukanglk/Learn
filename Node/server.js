/*
let http=require('http');  //请求http模块 并把它赋值给http变量
//createServer 返回一个对象，这个对象有一个listen方法 这个方法有一个数值参数指定这个服务器监听的端口号
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text-plain'});
    response.write('hello world');
    response.end();
}).listen(8888);
*/

/*let http=require('http');
let server=http.createServer(
    //可以穿函数 如下
    function (word) {
        console.log(word);
    }
function execute(someFunction,value) {
    someFunction(value);
};
execute(say,'hello')
);
server.listen(8888);*/

/*
let http=require('http');
function onRequest(request,response) {
    
    console.log('request reciver');
    response.writeHead(200,{'Conten-Type':'text/plain'});
    response.write('hello world');
    response.end();
}
http.createServer(onRequest).listen(8888);
console.log('server has started');*/

let http=require('http');
let url=require('url');
function start(route,handle) {
    function onRequest(request, response) {
        // console.log('request recived');
        let pathname=url.parse(request.url).pathname;
        console.log('Request for '+pathname+' received');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        let content=route(handle,pathname);
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}
exports.start=start;

let exec=require('child_process').exec;
//exec 它从node.js来执行一个shell命令，在此例中，我们用它来获取当前目录下所有的（‘ls-lah’）
// 然后当/startURL请求的时候讲文件信息输出到浏览器中
function start(response) {
    console.log("Request handler 'start' was called.");
    let content='empty';
    exec('ls-lah',function (error,stdout,stderr) {
        // content=stdout;
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
    return content;
/*    function sleep(milliSecond) {
        let startTime=new Date().getTime();
        while (new Date().getTime()<startTime+milliSecond);
    }
    sleep(10000);*/
    // return 'Hello Start';
}
function upload(response) {
    console.log("Request handler 'upload' was called.");
    // return 'Hello Upload';
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start=start;
exports.upload=upload;
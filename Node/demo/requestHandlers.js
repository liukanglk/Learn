var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");
function start(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function upload( res, req){

    console.log('request upload mehtod');

    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";
    form.parse( req, function( error, fields, files){
        console.log("parsing done");
        var filename = fields['filename'];
        console.log("filename = " + filename);

        try{
            fs.renameSync(files.upload.path, "tmp/"+filename+".png");
        }catch( e){
            console.log(e);
        }
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("&lt;img src='/show'/&gt;");   //发送/show请求
        res.end();
    });
}
function show(response) {
    console.log("Request handler 'show' was called.");
    fs.readFile("/tmp/test.png", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}
exports.start = start;
exports.upload = upload;
exports.show = show;
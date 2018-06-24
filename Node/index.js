let server=require('./server');
let router=require('./route');
let requestHandlers=require('./requestHandlers');
let handle={};
handle['/']=requestHandlers.start;
handle['/start']=requestHandlers.start;
handle['/upload']=requestHandlers.upload;
server.start(router.route,handle);


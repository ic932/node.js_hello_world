
var PORT    =   process.env.PORT || 3001;

var http = require("http");
var server=http.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{"Content-Type": "text/plain"});  
	res.write('hello');
	res.end();
});
server.listen(PORT) ;

/*
 * hello, world
 * IPなど設定：http://testcording.com/?p=1164
 */

var http = require("http");
var PORT = process.env.PORT || 3001;
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("hello, world!\n");
}).listen(PORT, function () {
	console.log("Server running at http://127.0.0.1:1337/");
	console.log("サーバを終了する際は[ctrl + c]を押してください");
});

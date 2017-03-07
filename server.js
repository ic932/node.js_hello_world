/*
 * hello, world
 * IPなど設定：http://testcording.com/?p=1164

var http = require("http");
var PORT = process.env.PORT || 3001;
http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("hello, world!\n");
}).listen(PORT, function () {
	console.log("Server running at http://127.0.0.1:1337/");
	console.log("サーバを終了する際は[ctrl + c]を押してください");
});
*/
/*
 * hello, world
 * IPなど設定：http://testcording.com/?p=1164
 */
/*
 * パラメータ
 */
var IP_ADDRESS = "localhost";
var PORT    =   process.env.PORT || 3001;

/*
 * モジュール読み込み
 */
var http = require("http");

/*
 * サーバの作成
 */
http.createServer(function (req, res) {
	// ヘッダーの送信 送信するデータのタイプはtext/plain
	res.writeHead(200, {"Content-Type": "text/plain"});
	// 中身の文字列を送信
	res.end("hello, world!\n");
}).listen(PORT,function () {
	/*
	 * サーバ起動時に表示するログ(起動したことが分かりやすい)
	 */
	console.log("Server running at http://" + IP_ADDRESS + ":" + PORT + "/");
	console.log("サーバを終了する際は[ctrl + c]を押してください");
});

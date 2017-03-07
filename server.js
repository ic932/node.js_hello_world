/*
var IP_ADDRESS = "localhost";
var PORT    =   process.env.PORT || 3001;

var http = require("http");

http.createServer(function (req, res) {
	// ヘッダーの送信 送信するデータのタイプはtext/plain
	res.writeHead(200, {"Content-Type": "text/plain"});
	// 中身の文字列を送信
	res.end("hello, world! : URL " + req.url);
}).listen(PORT,function () {

	console.log("Server running at http://" + IP_ADDRESS + ":" + PORT + "/");
	console.log("サーバを終了する際は[ctrl + c]を押してください");
});
*/
var PORT    =   process.env.PORT || 3001;

 var fs = require("fs");
 var util = require('util');

/*
 * 非同期でファイルを読み込む関数
 */
 (function test() {
 	// 非同期でファイル読み込み(パスの指定は、nodeを起動しているパスからの相対パスになる)
 	fs.readFile("./testdata", "utf8", function (err, data) {
 		console.log("readFileを実行した！");
 		console.log(data); // 読み込んだファイルの内容を出力する
 	});
 	// 処理される順番が交錯するのに注目してください
 	console.log("readFile呼び出し終了");
  	// 以下の処理が終了した後、アイドル状態になってから上の非同期処理が行われる(キュー内の処理を順に呼び出すため)
 	// 一定時間サーバを酷使するのでテスト環境で実行してください
 	for(var i = 0, len = 10000; i < len; ++i) {
 		util.print(".");
 	}
})();

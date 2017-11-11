//server.js
var http = require('http'); //httpモジュールのインポート
var server = http.createServer();　
var querystring = require('querystring');
var url = require('url');

exports.port = 8080;
exports.host = '127.0.0.1';

console.log("exports.port = 8080\nexports.host = '127.0.0.1'"); 
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type':'text'});　
  res.write(req.url);//resの中身を出力
  res.end();
  console.log(req.method);
  console.log(req.url);
  if(req.method === 'GET'){

  }else if(req.method === 'POST'){

  }
})

server.listen(exports.port,exports.host)
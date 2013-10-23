var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var info = fs.readFileSync('data.txt');
  console.log(info.toString())
  res.end('<p>This is a string of html <br> '+ info +'</p>');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
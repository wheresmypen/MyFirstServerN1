var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('data.html', function(err, info){
	  if (err) throw err;	
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.end('<p>This is a string of html <br> '+ info +'</p>');
  });
  // console.log(info.toString())
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
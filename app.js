var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('20127670 - Nguyen Cao Nam Vu');

}).listen(5500);

console.log('Server is running on port 5500');

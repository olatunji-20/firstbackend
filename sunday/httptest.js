

const http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello world");
    res.end();
}).listen(8080, function(){
    console.log("server activated on port 8080!")
});
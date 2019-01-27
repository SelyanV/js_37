let http = require('http');
let fs = require('fs');
let Event = require('events').EventEmitter;

let srvr = http.createServer(function (req, res) {
    if (req.url === '/about') {
        console.log(req);
        res.end();
    } else if (req.url === '/stop') {
        res.end();
        srvr.close();
    } else if (req.url === '/contact') {
        fs.readFile('index.html',function (err, data) {
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    } else {
        res.write('Hello world');
        res.end();
    }
}).listen(3000, function() {
    console.log('Server at http://localhost:3000');
});
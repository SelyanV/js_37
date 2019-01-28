let http = require('http');
let fs = require('fs');
let Event = require('events').EventEmitter;
let emt = new Event();

let user = {
    name: 'Frank'
};

//-------------create server and routing----------
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
    } else if (req.url === '/login') {
        emt.emit('login', user);
        res.end();
    } else if (req.url === '/logout') {
        emt.emit('logout', user);
        res.end();
    } else if (req.url === '/home') {
        fs.readFile('home.html',function (err, data) {
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

//----------events-----------
emt.on('login', function(data) {
    console.log('Пользователь ' + data.name + ' зашел на сайт ' + new Date());
});

emt.on('logout', function(data) {
    console.log('Пользователь ' + data.name + ' вышел ' + new Date());
});

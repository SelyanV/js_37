let fs = require('fs');

let msg = 'New line text';
fs.appendFile('test.txt', '\n' + msg, function (err) {
    if (err) throw err;
});
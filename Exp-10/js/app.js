const http = require('http')
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead('200', { 'Content-Type': 'text/html' });
        fs.createReadStream('../index.html').pipe(res);
    }
    else if (req.url === '/server' && req.method === 'POST') {
        var rawData = '';
        req.on('data', function (data) {
            rawData += data;
        })
        req.on('end', function () {
            res.writeHead('200', { 'Content-Type': 'text/html' });
            var inputdata = new URLSearchParams(rawData);
            res.write("You have entered:" + '<br>');
            res.write("User Name: " + inputdata.get('username') + '<br>');
            res.write("User Register Number: " + inputdata.get('userreg') + '<br>');
            res.write("Year Of Study: " + inputdata.get('useryear') + '<br>');
            res.write("Department: " + inputdata.get('userdept') + '<br>');
            res.write("School: " + inputdata.get('userschool') + '<br>');
            res.write("Type Of Event: " + inputdata.get('event') + '<br>')
            res.end();
        })
    }

})

server.listen(8080, function () {
    console.log('Server started at 8080');
})
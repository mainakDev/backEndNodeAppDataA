const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">');
        res.write('Submit');
        res.write('</button>');
        res.write('</form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method == 'POST'){
        fs.writeFileSync('message.txt', 'DUMMYText');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My HTML page</title></head><body><h1>Welcome to Node.js</h1></body></html>');
    res.end();
});

server.listen(3000);
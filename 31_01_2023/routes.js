const fs = require('fs');
const { Module } = require('module');

const requestHandler= (req, res) => {
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
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedString = Buffer.concat(body).toString();
            const message = parsedString.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>My HTML page</title></head><body><h1>Welcome to Node.js</h1></body></html>');
    res.end();
};

module.exports = requestHandler;
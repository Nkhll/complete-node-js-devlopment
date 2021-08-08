const fs = require('fs');

const requestHandler = (req, res) =>{
    
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button>Send</button></form></body>');
        res.write('<html>');
        res.write('<html>'); 
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        //Read data 
        const body = []; 
        req.on('data', (chuck) => {
            console.log(chuck);//<Buffer 6d 65 73 73 61 67 65 3d 6d 65 73 73 61 67 65>
            body.push(chuck);
        });
        req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);//message=Incoming+message
            const message = parsedBody.split('=')[1];
            fs.writeFile('./Database/messageStorage.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>MY FIRST PAGE</title></head>');
    res.write('<body><h1>MY FIRST PAGE from Node.js</h1></body>');
    res.write('<html>');
    res.write('<html>');
}

//module.exports = requestHandler; // multiple ways of using exports
exports.requestHandler = requestHandler;
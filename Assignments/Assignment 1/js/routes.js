const fs = require('fs');

const requestHandler = (req, res) =>{
    
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body>Welcome<br/><form action="/create-user" method="POST"><input type="text" name="username"></input><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        //Read data 
        const body = []; 
        req.on('data', (chuck) => {
            console.log(chuck);//<Buffer 6d 65 73 73 61 67 65 3d 6d 65 73 73 61 67 65>
            body.push(chuck);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
}
module.exports = requestHandler; 
const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In the Another middleware');
    res.send('<h1>Add products <h1>');
});

/* app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows the request to continue to the next middleware or function
}); */

app.use('/',(req, res, next) => {
    console.log('In the Another middleware');
    res.send('<h1>Hello from Express! <h1>');
});

const server = http.createServer(app);

server.listen(3000);
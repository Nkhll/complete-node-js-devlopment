const http = require('http');

const express = require('express');

const app = express();

/** Assignemnet point 2 */
/* app.use((req, res, next) => {
    console.log('In the Another middleware');
    next();
});
app.use((req, res, next) => {
    console.log('In the Another middleware');
    res.send('<h1>Dummy response<h1>');
}); */

/** Assignemnet point 3 */
app.use('/users',(req, res, next) => {
    console.log('In the Another middleware');
    res.send('<h1>Add Users <h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the Another middleware');
    res.send('<h1>Hello from Express! <h1>');
});

const server = http.createServer(app);

server.listen(3300);
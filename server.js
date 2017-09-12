const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Welcome to NodeJS Application');
});

app.get('/home', (req, res) => {
    res.send('Hi, This is my home page');
})

app.listen(port, () => {
    console.log('The server is listening on port:' + port);
});
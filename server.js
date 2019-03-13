const express = require('express');
const server = express();
const actionRouter = require('./data/actionRouter.js');


server.use(express.json());
server.use('/api/actions', actionRouter)


// test .get to make sure the server is working/listening
server.get('/', (req, res) => {
    res.send('Hello World, from Sprint Challenge - Node Express!');
});

module.exports = server
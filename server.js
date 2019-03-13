const express = require('express');
const server = express();
const actionRouter = require('./data/actionRouter.js');
const projectRouter = require('./data/projectRouter.js');

server.use(express.json());
server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

// test .get to make sure the server is working/listening
server.get('/', (req, res) => {
    res.send('Hello World, from Sprint Challenge - Node Express!');
});

module.exports = server
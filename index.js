// play this: https://www.youtube.com/watch?v=d-diB65scQU

const server = require('./server.js')
const PORT = 9090;

// test .get to make sure the server is working/listening
server.get('/', (req, res) => {
    res.send('Hello World, from Sprint Challenge - Node Express');
});

server.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}!`);
})
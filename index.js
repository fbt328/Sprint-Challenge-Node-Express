// play this: https://www.youtube.com/watch?v=d-diB65scQU

const server = require('./server.js')
const PORT = 9090;

server.listen(PORT, () => {
    console.log(`server is now listening on port ${PORT}!`);
})
const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('ok');
});
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
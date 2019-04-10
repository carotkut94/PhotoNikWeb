const http = require("http");

const app = require("./app");

const PORT = 30023;
const server = http.createServer(app);

server.listen(PORT);



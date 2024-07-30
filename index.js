const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

const server = http.createServer(app);
const io = socketIo(server);

const socket = require('./src/server/socket')(io); // Pass the io instance to the socket module

app.use(express.static('src/public'));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

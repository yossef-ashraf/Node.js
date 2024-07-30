const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);


module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
// const io = new Server(server);
// const cors = require('cors');
const io = new Server(server, {
  cors: {
    origin: true
  }
});

io.on('connection', async (socket) => {
  console.log('connecting socket', socket.time);
});

const port = 3010;
server.listen(port, () => {
  console.log('Listening on http://localhost:' + port);
});
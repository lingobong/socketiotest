const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  // options
});

io.on("connection", (socket) => {
  console.log(io.sockets.sockets.size);
});

httpServer.listen(3000);

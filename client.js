const { io } = require("socket.io-client");
let count = 0;
function connect() {
  const socket = io("ws://172.30.1.23:3000", {
  });
  socket.on('connect', () => {
    setTimeout(() => {
      console.log(++count);
      connect();
    }, 33);
  });
}
connect();
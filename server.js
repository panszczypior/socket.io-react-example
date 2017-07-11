const io = require('socket.io')();

// handling client connection
io.on('connection', (client) => {
  // here you can also respond to events being emitted from the client
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(function () {
      // here you can start emitting events
      client.emit('timer', new Date());
    }, interval);
  })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

const express = require('express');
const app = express();
const shutdown = require('http-shutdown');

const add = require('./src/index');
const PORT = process.env.PORT || 3001;

app.get('/:a/:b', function (req, res) {
  const { a, b } = req.params;
  res.send(`${a} + ${b} = ${add(a, b)}`);
});

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
shutdown(server);

process.on('SIGINT', () => {
  console.log('Received SIGINT');
  server.shutdown(() => {
    console.log('Stopped server, exiting..');
    process.exit();
  });
});

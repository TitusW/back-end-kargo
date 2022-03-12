/* eslint-disable no-console */
const app = require('./app');
const port = process.env.PORT || 3001;
const server = app.listen(port);

server.on('listening', () =>
  console.info('Kargo shipper application started on port : ' + port)
);

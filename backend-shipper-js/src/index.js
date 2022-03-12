/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () =>
  logger.info('Kargo shipper application started on port : ' + port)
);

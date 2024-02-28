const express = require('express');

/**
 * HTTP server using Express responding to the "/" endpoint.
 *
 * This server listens on port 1245 and provides a response for the path "/":
 *
 * - For path "/": Responds with "Hello Holberton School!".
 *
 * @module 6-http_express
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;

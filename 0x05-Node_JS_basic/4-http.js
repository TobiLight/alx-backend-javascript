/**
 * Displays Hello Holberton School! in the page body for any endpoint as plain text
 *
 * @author - Oluwatobiloba Light
 */

const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;

const http = require('http');

const hostname = '192.168.0.31';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Guys! Hope everyone is doing good. \n Stay at home, Stay safe. \n Yours pure loving friend Vigneshwar Reddy.');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
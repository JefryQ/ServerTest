const http = require('http');

const hostname = 'localhost';
const port = 3000;

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola desde mi servidor Node.js!\n');
}); */


function requestController(){
  console.log("¡Hola desde mi servidor Node.js!\n")
}

const server = http.createServer(requestController)

server.listen(port, hostname, () => {
  console.log(`Servidor iniciado en http://${hostname}:${port}`);
});


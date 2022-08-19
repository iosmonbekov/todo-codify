const http = require('http');

// BD:
const todos = [];

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  switch(request.url) {
    case '/todos': 
      if (request.method === 'GET') {
        response.end(JSON.stringify(todos));
      } 
      if (request.method === 'POST') {
        let chunks = '';

        request.on('data', (chunk) => {
          chunks += chunk;
        })

        request.on('end', () => {
          const todo = {
            id: new Date().getTime(),
            ...JSON.parse(chunks),
          };
          todos.push(todo);
          response.end()
        })
      }
      if (request.method = 'DELETE') {
        // FIXME: DELETE
      }
      break;
    default: 
      response.end('<h1 style="text-align: center">404 NOT FOUND</h1>')
  }
});

server.listen(8080);

import express from 'express';

const app = express();
const PORT = 8080;

//BD:
let todos = [];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  let chunks = '';
  req.on('data', (chunk) => {
    chunks += chunk;
  });

  req.on('end', () => {
    const todo = {
      id: new Date().getTime(),
      ...JSON.parse(chunks),
    };
    todos.push(todo);
    res.json(todos);
  });
});

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

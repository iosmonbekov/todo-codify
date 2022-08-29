import TodoList from './TodoList';
import Input from './Input';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  // Mount
  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await fetch('http://localhost:8080/todos', {method: "GET"});
    const todos = await response.json();
    setList(todos);
  }

  function saveTodo() {
    createTodo();
  }

  async function createTodo() {
    if (value.trim() === '') return;

    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      body: JSON.stringify({ value }),
    });

    setValue('');
    await getTodos();
  }

  async function deleteTodo(id) {
    await fetch(`http://localhost:8080/todos/${id}`, { method: 'DELETE' });
    await getTodos();
  }

  return (
    <div>
      <Input value={value} setValue={setValue} saveTodo={saveTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

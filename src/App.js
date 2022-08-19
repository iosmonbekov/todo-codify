import TodoList from './components/TodoList';
import Input from './components/Input';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await fetch('http://localhost:8080/todos', {method: "GET"});
    const todos = await response.json();
    setList(todos);
  }

  function saveTodo() {
    create();
  }

  async function create() {
    if (value.trim() === '') return;

    await fetch('http://localhost:8080/todos', {
      method: "POST", 
      body: JSON.stringify({value})
    });

    setValue('');
    await getTodos();
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => {
      if (todo.id === id) {
        return false; // Delete
      }
      return true; // Leave
    });

    setList(newList);
  }

  return (
    <div className='container'>
      <h1>Header</h1>
      <Input value={value} setValue={setValue} saveTodo={saveTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

import TodoList from './components/TodoList';
import Input from './components/Input';
import { useEffect, useState } from 'react';

const MODE = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
};

function App() {
  const [value, setValue] = useState('');

  const [list, setList] = useState([]);

  const [mode, setMode] = useState(MODE.CREATE);

  const [id, setId] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const response = await fetch('http://localhost:8080/todos', {method: "GET"});
    const todos = await response.json();
    setList(todos);
  }

  function saveTodo() {
    if (mode === MODE.CREATE) create();
    if (mode === MODE.EDIT) edit();
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

  function edit() {
    const newList = list.map((todo) => {
      if (todo.id === id) todo.value = value;
      return todo;
    });

    setMode(MODE.CREATE);
    setList(newList);
    setValue('');
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

  function onEditTodo(id) {
    const todo = list.find((todo) => {
      if (todo.id === id) return true;
      return false;
    });

    setValue(todo.value);
    setMode(MODE.EDIT);
    setId(todo.id);
  }

  return (
    <div className='container'>
      <h1>Header</h1>
      <Input value={value} setValue={setValue} saveTodo={saveTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} onEditTodo={onEditTodo} />
    </div>
  );
}

export default App;

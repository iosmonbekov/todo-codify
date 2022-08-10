import TodoList from './components/TodoList';
import Input from './components/Input';
import { useState } from 'react';

const MODE = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
};

function App() {
  const [value, setValue] = useState(''); // [Хранит состояние <input />, Изменяет значение слева, ОНА ДЕЛАЕТ ПОВТОРНЫЙ РЕНДЕР СТРАНИЦЫ.]

  const [list, setList] = useState([]);

  const [mode, setMode] = useState(MODE.CREATE);

  const [id, setId] = useState(null);

  function saveTodo() {
    if (mode === MODE.CREATE) create();
    if (mode === MODE.EDIT) edit();
  }

  function create() {
    if (value.trim() === '') return;

    const id = new Date().getTime(); // Not Focus! Just Remember!

    const todo = {
      id: id,
      value: value,
    };

    setList([...list, todo]);

    setValue('');
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
    // OnEditButton Click
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

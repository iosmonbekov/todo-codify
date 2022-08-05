import TodoList from './components/TodoList';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(''); // [Хранит состояние <input />, Изменяет значение слева, ОНА ДЕЛАЕТ ПОВТОРНЫЙ РЕНДЕР СТРАНИЦЫ.]

  const [list, setList] = useState([]);

  function createTodo() {
    if (value.trim() === '') return;

    const id = new Date().getTime(); // Not Focus! Just Remember!

    const todo = {
      id: id,
      value: value,
    };

    console.log(todo);
    setList([...list, todo]);

    console.log('LIST: ', list);
    setValue('');
  }

  function deleteTodo(id) {
    const newList = list.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });

    setList(newList);
  }

  return (
    <div className='container'>
      <h1>Header</h1>
      <Input value={value} setValue={setValue} createTodo={createTodo} />
      <TodoList list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

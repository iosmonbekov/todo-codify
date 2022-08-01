import TodoList from './components/TodoList';
import Input from './components/Input';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState(''); // [Хранит состояние <input />, Изменяет значение слева, ОНА ДЕЛАЕТ ПОВТОРНЫЙ РЕНДЕР СТРАНИЦЫ.]
  const [list, setList] = useState([]); 

  function onButtonClick() {
    console.log(value, list);
    setList([...[list], value]);
    setValue('');
  }

  return ( 
    <div className='container'>
      <h1>Header</h1>
      <Input value={value} setValue={setValue} onButtonClick={onButtonClick}  />
      <TodoList list={list} />
    </div>
  );
}

export default App;

import TodoList from './components/TodoList';
import Input from './components/Input';

function App() {
  return (
    <div className='container'>
      <h1>Header</h1>
      <Input />
      <TodoList todoList={['text', 'text2']} />
    </div>
  );
}

export default App;

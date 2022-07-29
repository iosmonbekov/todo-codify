import Todo from './Todo';

function TodoList({ todoList }) {
  return (
    <>
      {todoList.map((text) => (
        <Todo key={text} text={text} />
      ))}
    </>
  );
}

export default TodoList;

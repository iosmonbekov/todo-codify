import Todo from './Todo';

function TodoList({ list, deleteTodo }) {
  return (
    <>
      {list.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
}

export default TodoList;

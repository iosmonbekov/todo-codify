import Todo from './Todo';

function TodoList({ list, deleteTodo, onEditTodo }) {
  return (
    <>
      {list.map(
        (
          todo // {id: 1, value: 'text'}
        ) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            onEditTodo={onEditTodo}
          />
        )
      )}
    </>
  );
}

// 1. Router;
// 2. Redux;
// 3. Server;
export default TodoList;

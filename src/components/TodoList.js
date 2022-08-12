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

export default TodoList;

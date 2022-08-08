function Todo({ todo, deleteTodo, onEditTodo }) {
  return (
    <div className='todo'>
      <h3>{todo.value}</h3>
      <div className="buttons">
      <button onClick={() => onEditTodo(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </div>
  );
}

export default Todo;

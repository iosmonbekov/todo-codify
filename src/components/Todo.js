function Todo({ todo, deleteTodo }) {
  return (
    <div className='todo'>
      <h3>{todo.value}</h3>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

export default Todo;

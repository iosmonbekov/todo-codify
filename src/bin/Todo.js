function Todo({ todo, deleteTodo }) {
  return (
    <div className='todo'>
      <h3>{todo.value}</h3>
      <div className="buttons">
      <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </div>
  );
}

export default Todo;

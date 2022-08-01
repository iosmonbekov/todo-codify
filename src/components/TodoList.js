import Todo from './Todo';

function TodoList(props) {
  return (
    <>
      {
        props.list.map((text) => (
          <Todo key={text} text={text} />
        ))
      }
    </>
  );
}

export default TodoList;

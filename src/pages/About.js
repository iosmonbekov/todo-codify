import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';

// 0. Component init: Вызвалась компонента.
// 1. Mount: JSX внедрили в DOM (*HTML).
// 2. Update: Перерендер. Измененение стейта, меняется пропс
// 3. UnMount: Унижтожение компоненты.

const server = {
  get() {
    return [
      { id: 1, user: 'Emil', text: "It's good!" },
      { id: 2, user: 'Arsen', text: "It's bad!" },
      { id: 3, user: 'Islam', text: "It's Normal!" },
      { id: 4, user: 'Aleksey', text: "It's Very BADDD!" },
    ];
  },
};

function About() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('Mount');
    getComments();
    return () => {
    };
  }, []);

  async function getComments() {
    const data = server.get(); // GET: From
    setComments(data);
  }

  return (
    <div className='container'>
      <h1>Comments ({comments.length}): </h1>

      <ul>
        {comments.map((comment) => (<li key={comment.id}>{comment.user}: {comment.text}</li>))}
      </ul>
    </div>
  );
}

export default About;

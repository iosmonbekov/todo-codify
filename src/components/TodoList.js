import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import Todo from './Todo';

function TodoList({ list, deleteTodo }) {
  const [confirmModal, setConfirmModal] = useState(false);

  const openConfirmModal = () => {
    setConfirmModal(true);
  }

  const closeConfirmModal = () => {
    setConfirmModal(false);
  }

  return (
    <>
      {list.map(
        (
          todo
        ) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={openConfirmModal}
          />
        )
      )}
      <ConfirmModal 
        active={confirmModal} 
        close={closeConfirmModal}
      />
    </>
  );
}

export default TodoList;

function ConfirmModal({active, close}) {
  return (
    <div className={`modal-wrapper ${active && 'active'}`}>
      <div className='modal-back' onClick={close}></div>
      <div className='modal'>
        <div className='modal-head'>
          <h4>Are you sure?</h4>
          <button onClick={close}>X</button>
        </div>
        <div className='modal-body'>
          <button>Confirm</button>
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
}

export default ConfirmModal;

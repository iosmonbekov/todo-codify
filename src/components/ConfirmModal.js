function ConfirmModal({ active, close, title, buttonText, callBack }) {
  return (
    <div className={`modal-wrapper ${active && 'active'}`}>
      <div className='modal-back' onClick={close}></div>
      <div className='modal'>
        <div className='modal-head'>
          <h4>{title}</h4>
          <button onClick={close}>X</button>
        </div>
        <div className='modal-body'>
          <button onClick={callBack}>{buttonText}</button>
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
}

export default ConfirmModal;

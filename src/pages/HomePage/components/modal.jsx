import "./modal.css";

const Modal = ({ isShown, setIsShown, onSubmit, children }) => {
  const closeModalByBg = (event) => {
    if (event.target.className === "modal-bg") {
      setIsShown(false);
    }
  };

  return isShown ? (
    <div className="modal-bg" onClick={closeModalByBg}>
      <div className="my-modal">
        <p className="close-btn" onClick={() => setIsShown(false)}>
          X
        </p>
        {children}
        <div className="btns">
          <button className="cancel" onClick={() => setIsShown(false)}>
            cancel
          </button>
          <button className="submit" onClick={onSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

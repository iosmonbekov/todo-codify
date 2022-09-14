import { useSelector, useDispatch } from "react-redux";
import { setIsModalShown } from "../../../store/actions/actions";
import "./modal.css";

const Modal = ({ onSubmit, children }) => {
  const dispatch = useDispatch();
  const closeModalByBg = (event) => {
    if (event.target.className === "modal-bg") {
      dispatch(setIsModalShown(false));
    }
  };

  const { currentProduct, isModalShown } = useSelector((state) => state);

  return isModalShown ? (
    <div className="modal-bg" onClick={closeModalByBg}>
      <div className="my-modal">
        <p
          className="close-btn"
          onClick={() => dispatch(setIsModalShown(false))}
        >
          X
        </p>
        {children}
        <div className="btns">
          <button
            type="button"
            className="cancel"
            onClick={() => dispatch(setIsModalShown(false))}
          >
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

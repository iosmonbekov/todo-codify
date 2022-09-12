import { useNavigate } from "react-router-dom";
import { addProduct } from "../../api/api";
import Modal from "../../pages/HomePage/components/modal";
import "./add-modal.css";

const AddModal = ({ isShown, setIsshown }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target[0].value;
    data.price = e.target[1].value;
    data.img = e.target[2].value;
    console.dir(data);

    try {
      await addProduct(data);
      setIsshown(false);
    } catch (error) {
      console.dir(error);
      throw new Error("Что-то не так с пост запросом");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Modal isShown={isShown} setIsShown={setIsshown}>
        <input placeholder="name" />
        <input placeholder="price" type={"number"} />
        <input placeholder="image" />
      </Modal>
    </form>
  );
};
export default AddModal;

import { useState, useEffect } from "react";
import { deleteProduct, getProducts } from "../../api/api";
import ConfirmModal from "../../components/ConfirmModal";
import Product from "./components/Product";
import "./admin-page.css";
import AddModalUseForm from "../../components/add-modal-useForm/add-modal";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalShown } from "../../store/actions/actions";
function AdminPage() {
  const [list, setList] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await deleteProduct(activeProduct.id);
    setActiveProduct(null);
  };

  const { isModalShown } = useSelector((state) => state);

  const onAction = (product) => {
    setActiveProduct(product);
  };
  const fetch = async () => {
    const products = await getProducts();
    setList(products);
  };

  useEffect(() => {
    fetch();
  }, [activeProduct, isModalShown]);

  return (
    <div className="admin-product-list">
      <ul>
        {list?.map((product) => (
          <Product key={product.id} product={product} onAction={onAction} />
        ))}
      </ul>

      <button
        className="add-new"
        onClick={() => dispatch(setIsModalShown(true))}
      >
        Add new
      </button>
      <AddModalUseForm />
      <ConfirmModal
        active={!!activeProduct}
        close={() => setActiveProduct(null)}
        title={"Confirm deletion"}
        buttonText={"Confirm"}
        callBack={handleDelete}
      />
    </div>
  );
}

export default AdminPage;

import { useState } from "react";
import { deleteProduct, getProducts } from "../../api/api";
import ConfirmModal from "../../components/ConfirmModal";
import Product from "./components/Product";
import "./admin-page.css";
import AddModalUseForm from "../../components/add-modal-useForm/add-modal";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalShown } from "../../store/actions/actions";
import { useQuery } from "react-query";
function AdminPage() {
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

  const { data: list, isLoading } = useQuery(
    ["product-list", activeProduct, isModalShown],
    () => getProducts(),
    {
      cacheTime: 0,
    }
  );

  return isLoading ? (
    <div>Loading...</div>
  ) : (
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

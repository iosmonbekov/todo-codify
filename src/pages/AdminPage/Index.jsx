import { useState, useEffect } from "react";
import { deleteProduct, getProducts } from "../../api/api";
import ConfirmModal from "../../components/ConfirmModal";
import Product from "./components/Product";
import "./admin-page.css";
import AddModal from "../../components/add-modal/add-modal";

function AdminPage() {
  const [list, setList] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isShown, setIsShown] = useState(false);
  const handleDelete = async () => {
    await deleteProduct(activeProduct.id);
    setActiveProduct(null);
  };

  const onAction = (product) => {
    setActiveProduct(product);
  };
  const fetch = async () => {
    const products = await getProducts();
    setList(products);
  };

  useEffect(() => {
    fetch();
  }, [activeProduct]);

  return (
    <div className="admin-product-list">
      <ul>
        {list?.map((product) => (
          <Product key={product.id} product={product} onAction={onAction} />
        ))}
      </ul>

      <button className="add-new" onClick={() => setIsShown(true)}>
        Add new
      </button>
      <AddModal setIsshown={setIsShown} isShown={isShown} />
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

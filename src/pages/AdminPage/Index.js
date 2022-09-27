import { useState, useEffect } from "react";
import { deleteProduct, getProducts } from "../../api/api";
import ConfirmModal from "../../components/ConfirmModal";
import Product from "./components/Product";
import "./admin-page.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [list, setList] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const navigate = useNavigate()

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
      <div className="create-button">
        <button onClick={() => navigate('/create-product')}>Add Product</button>
      </div>
      <ul>
        {list?.map((product) => (
          <Product key={product.id} product={product} onAction={onAction} />
        ))}
      </ul>
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

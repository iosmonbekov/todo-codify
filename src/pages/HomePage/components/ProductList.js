import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import { getProducts } from "../../../api/api";

function ProductList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetch = async () => {
    const products = await getProducts();
    setList(products);
  };

  useEffect(() => {
    fetch();
  }, []);

  const redirectToProduct = (id) => {
    navigate(`product/${id}`, { state: list });
  };

  return (
    <div className="product-list">
      {list.map((product) => (
        <Product
          key={product.id}
          product={product}
          redirect={redirectToProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;

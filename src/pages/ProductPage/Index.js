import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./../HomePage/components/Product";

function ProductPage() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, [params.id]);

  async function getProduct(id) {
    const response = await fetch(
      `https://e-commerce-server-codify.herokuapp.com/products/${id}`,
      { method: "GET" }
    );
    const product = await response.json();

    setProduct(product);
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <Product product={product} />
    </div>
  );
}

export default ProductPage;

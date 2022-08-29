import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './../HomePage/components/Product';

function ProductPage() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, [params.id]);

  async function getProduct(id) {
    const response = await fetch(
      `https://e-commerce-server-codify.herokuapp.com/products/${id}`,
      { method: 'GET' }
    );
    const product = await response.json();

    setProduct(product);
  }

  return (
    <div>
      <Product product={product} />
    </div>
  );
}

export default ProductPage;

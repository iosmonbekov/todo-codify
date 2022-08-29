import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

function ProductList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      'https://e-commerce-server-codify.herokuapp.com/products',
      { method: 'GET' }
    );
    const products = await response.json();

    setList(products);
    console.log(products);
  };

  const redirectToProduct = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <div className='product-list'>
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

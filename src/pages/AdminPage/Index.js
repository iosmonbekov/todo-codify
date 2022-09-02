import { useState, useEffect } from 'react';
import ConfirmModal from '../../components/ConfirmModal';
import Product from './components/Product';

function AdminPage() {
  const [list, setList] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      `https://e-commerce-server-codify.herokuapp.com/products`,
      { method: 'GET' }
    );
    const products = await response.json();
    setList(products);
  };

  const deleteProduct = async () => {
    await fetch(
      `https://e-commerce-server-codify.herokuapp.com/products/${activeProduct.id}`,
      { method: 'DELETE' }
    );
    setConfirmModal(false);
    getProducts();
  };

  const onAction = (product) => {
    setActiveProduct(product);
    console.log('onAction: ', product.id);
    setConfirmModal(true);
  };

  return (
    <div className='admin-product-list'>
      <ul>
        {list.map((product) => (
          <Product key={product.id} product={product} onAction={onAction} />
        ))}
      </ul>
      <ConfirmModal
        active={confirmModal}
        close={() => setConfirmModal(false)}
        title={'Confirm deletion'}
        buttonText={'Confirm'}
        callBack={deleteProduct}
      />
    </div>
  );
}

export default AdminPage;

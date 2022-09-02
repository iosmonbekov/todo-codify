import { useState, useEffect } from 'react';
import ConfirmModal from '../../components/ConfirmModal';
import Product from './components/Product';

function AdminPage() {
  const [list, setList] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);

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

  return (
    <div className='admin-product-list'>
      <ul>
        {list.map((product) => (
          <Product key={product.id} product={product} onDelete={() => setConfirmModal(true)} />
        ))}
      </ul>
      <ConfirmModal
        active={confirmModal}
        close={() => setConfirmModal(false)}
      />
    </div>
  );
}

export default AdminPage;

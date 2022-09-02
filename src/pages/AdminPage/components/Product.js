function Product({ product, onDelete }) {
  return (
    <li className='product'>
      <div className='product-info'>
        <p className='product-name'>{product.name}</p>
        <span className='product-price'>${product.price}</span>
      </div>

      <div className='buttons'>
        <button onClick={onDelete}>x</button>
      </div>
    </li>
  );
}

export default Product;

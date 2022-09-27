function Product({ product, onAction }) {
  return (
    <li data-product-id={product.id} className='product'>
      <div className='product-info'>
        <p className='product-name'>{product.name}</p>
        <span className='product-price'>${product.price}</span>
      </div>

      <div className='buttons'>
        <button onClick={() => onAction(product)}>x</button>
      </div>
    </li>
  );
}

export default Product;

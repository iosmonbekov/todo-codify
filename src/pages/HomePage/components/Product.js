function Product({ product }) {
  return (
    <div className='product'>
      <div className='product-img'>
        <img src={product.img} alt={product.name} />
      </div>
      <p className='product-name'>{product.name}</p>
      <span className='product-price'>${product.price}</span>
    </div>
  );
}

export default Product;

function Product({ product, onAction }) {
  const [isShown, setIsShown] = useState(false);


  return (
      <li className="product" onClick={() => console.log("CLICK")}>
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <span className="product-price">${product.price}</span>
        </div>

      <div className="buttons">
        <button onClick={() => onAction(product)}>x</button>
      </div>
    </li>
  );
}

export default Product;

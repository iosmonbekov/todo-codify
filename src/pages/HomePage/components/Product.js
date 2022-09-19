import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cart-slice";

function Product({ product, redirect }) {
  const dispath = useDispatch();
  return (
    <div onClick={() => redirect(product.id)} className="product">
      <div className="product-img">
        <img src={product.img} alt={product.name} />
      </div>
      <p className="product-name">{product.name}</p>
      <span className="product-price">${product.price}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispath(addToCart(product));
        }}
      >
        to cart
      </button>
    </div>
  );
}

export default Product;

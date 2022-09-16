import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/actions";

function Product({ product, redirect }) {
  const dispatch = useDispatch();
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
          dispatch(addToCart(product));
        }}
      >
        add to cart
      </button>
    </div>
  );
}

export default Product;

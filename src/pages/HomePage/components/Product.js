import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/actions";

function Product({ product, redirect }) {
const dispatch = useDispatch();
dispatch()

  const dispatch = useDispatch();
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
          dispatch(addToCart(product));
        }}
      >
        add to cart
=======
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispath(addToCart(product));
        }}
      >
        to cart
>>>>>>> ee4fdd10d128ed1e6678388be0bbbd326f33d6c0
      </button>
    </div>
  );
}

export default Product;

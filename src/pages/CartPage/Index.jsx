import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../store/actions/actions";

function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  console.log(cart);
  return (
    <div className="container-asd">
      {cart.map((product, index) => (
        <div key={product.id} className="cart-item">
          <p>
            {index + 1}. {product.name}
          </p>
          <span>{product.price}$</span>
          <button onClick={() => dispatch(deleteFromCart(product.id))}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartPage;

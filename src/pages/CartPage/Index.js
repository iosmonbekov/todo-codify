import { useSelector } from "react-redux";

function CartPage() {
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
}

export default CartPage;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./top-bar.css";
function TopBar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="top-bar">
      <Link to={"/"}>
        <h1>My Store</h1>
      </Link>
      <Link to="/admin" className="button fancy-button">
        admin
      </Link>
      <Link to={"/cart"} className="button fancy-button cart-button">
        Checkout
        {!!cart.length && (
          <div>
            <span>{cart.length}</span>
          </div>
        )}
      </Link>
    </div>
  );
}

export default TopBar;

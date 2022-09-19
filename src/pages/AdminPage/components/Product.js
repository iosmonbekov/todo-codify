import { useDispatch } from "react-redux";
import {
  setIsCurrentProduct,
  setIsModalShown,
} from "../../../store/actions/actions";

function Product({ product, onAction }) {
  const dispatch = useDispatch();

  const getChangeProduct = () => {
    dispatch(setIsModalShown(true));
    dispatch(setIsCurrentProduct(product));
  };

  return (
    <>
      <li className="product" onClick={() => console.log("CLICK")}>
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <span className="product-price">${product.price}</span>
        </div>

        <div className="buttons">
          <button onClick={getChangeProduct}>Edit</button>
          <button onClick={() => onAction(product)}>x</button>
        </div>
      </li>
    </>
  );
}

export default Product;

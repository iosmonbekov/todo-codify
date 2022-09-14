import { useState } from "react";
import AddModalUseForm from "../../../components/add-modal-useForm/add-modal";

function Product({ product, onAction }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <li className="product" onClick={() => console.log("CLICK")}>
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <span className="product-price">${product.price}</span>
        </div>

        <div className="buttons">
          <button onClick={() => setIsShown(true)}>Edit</button>
          <button onClick={() => onAction(product)}>x</button>
        </div>
      </li>
      <AddModalUseForm
        isShown={isShown}
        setIsshown={setIsShown}
        product={product}
      />
    </>
  );
}

export default Product;

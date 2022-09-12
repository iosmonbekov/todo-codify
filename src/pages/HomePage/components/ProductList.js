import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import { getProducts } from "../../../api/api";
import Array from "../../../array";
import Modal from "./modal";
import axios from "axios";

function ProductList() {
  const [list, setList] = useState([]);
  const [isShown, setIsShown] = useState(true);
  const navigate = useNavigate();

  const fetch = async () => {
    const products = await getProducts();
    setList(products);
  };

  useEffect(() => {
    fetch();
  }, []);

  const redirectToProduct = (id) => {
    navigate(`product/${id}`, { state: list });
  };

  const array = [1, [1, 2, [4, [5, 3]]], [22, [[4, 2], 1], 4], 5];

  console.log(array.flat(3));

  const log = () => {
    console.log("AAAAAAA");
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://afisha-project.herokuapp.com/chapter/"
    );
    const res = await response.data;
    console.log(res);
  };
  const fetchDataDetail = async (id) => {
    const response = await axios.get(
      `https://afisha-project.herokuapp.com/chapter/${id}/`
    );
    const res = await response.data;
    console.log(res);
  };

  return (
    <div className="product-list">
      {/* <Array /> */}
      {/* <button onClick={() => setIsShown(true)}>ShowModal</button>
      <Modal isShown={isShown} setIsShown={setIsShown} onSubmit={log}>
        <p>Показать крик в консоли?</p>
      </Modal> */}
      {list.map((product) => (
        <Product
          key={product.id}
          product={product}
          redirect={redirectToProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;

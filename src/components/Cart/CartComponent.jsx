/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './CartComponent.css'

const CartComponent = () => {
  const [sum, setSum] = useState(0);
  const [products, setProducts] = useState([{}, []]);

  const location = useLocation();
  const navigateTo = useNavigate();


  useEffect(() => {
    // setProducts([location.state[0], sortByOrder(location.state[1])]);
    setProducts(location.state);

    setSum(
      location.state[1].reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    );
  }, [location.state]);

  const sumCount = async (i, operational) => {
    const selectProducts = products[1];

    if (selectProducts[i].quantity > 0 && operational == "-")
      selectProducts[i].quantity = selectProducts[i].quantity - 1;

    if (selectProducts[i].quantity > 0 && operational == "+")
      selectProducts[i].quantity = selectProducts[i].quantity + 1;

    setProducts([products[0], selectProducts]);

    setSum(
      products[1].reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  const redirectHome = () => {
    navigateTo("/");
  };

  return (
    <>
      {products[1].length > 0 ? (
        <>
          <button className="btn btn-success" onClick={redirectHome}>
            X
          </button>
          <ul className="list-group list-group">
            {products[1].map((product, i) => (
              <li className="list-group-item" key={i}>
                <h3>{product.name}</h3>
                <button
                  className="btn btn-success"
                  onClick={() => sumCount(i, "-")}
                >
                  -1
                </button>
                <p>{product.quantity}</p>
                <button
                  className="btn btn-success"
                  onClick={() => sumCount(i, "+")}
                >
                  +1
                </button>
                <h3>${product.quantity * product.price}</h3>
              </li>
            ))}
          </ul>
          <h2>${sum}</h2>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CartComponent;

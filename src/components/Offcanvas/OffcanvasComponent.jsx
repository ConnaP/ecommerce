/* eslint-disable no-undef */
import { Card, Offcanvas } from "react-bootstrap";
import { configRuteFile } from "../../routes/configRuteFile";
import { ProductContext } from "../../context/product/productContext";
import { types } from "../../context/product/productReducer";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/userContext";

import "./OffcanvasComponent.css";

// eslint-disable-next-line react/prop-types
const OffcanvasComponent = ({ handleShow, handleClose, show }) => {
  const [user] = useContext(UserContext);

  const [products, setProducts] = useState([]);

  const [, dispatch] = useContext(ProductContext);

  const [productList] = useContext(ProductContext);

  const [count, setCount] = useState(0);
  const [priceFinal, setPriceFinal] = useState(0);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (productList?.product) {
      setProducts(productList.product);

      const calculateCount = productList.product.reduce((acum, producto) => {
        return acum + producto.quantity;
      }, 0);

      const calculatePriceFinal = productList.product.reduce(
        (acum, producto) => {
          return acum + producto.quantity * producto.price;
        },
        0
      );

      setCount(calculateCount);
      setPriceFinal(calculatePriceFinal);
    }
  }, [productList?.product]);

  const goCartPage = () => {
    if (!user || !user.user) {
      navigateTo("/LoginFormPage");
      return;
    } else {
      dispatch({
        type: types.setProductState,
        payload: null,
      });

      setProducts([]);
      setCount(0);

      sessionStorage.removeItem("products");

      alert("Compra Exitosa !!!");
    }
  };

  const sumCount = async (i, operational) => {
    let selectProducts = products;

    if (selectProducts[i].quantity > 0 && operational == "-")
      selectProducts[i].quantity = selectProducts[i].quantity - 1;

    if (selectProducts[i].quantity > 0 && operational == "+")
      selectProducts[i].quantity = selectProducts[i].quantity + 1;

    if (selectProducts[i].quantity == 0) {
      selectProducts.splice(i, 1);
    }

    setProducts(selectProducts);

    sessionStorage.setItem("products", JSON.stringify(selectProducts));

    dispatch({
      type: types.setProductState,
      payload: selectProducts,
    });

    const calculateCount = productList.product.reduce((acum, producto) => {
      return acum + producto.quantity;
    }, 0);

    const calculatePriceFinal = productList.product.reduce((acum, producto) => {
      return acum + producto.quantity * producto.price;
    }, 0);

    setCount(calculateCount);
    setPriceFinal(calculatePriceFinal);
  };

  return (
    <>
      <button onClick={handleShow} className="btn cart">
        <img src={configRuteFile("carrito.png")} alt="" width={30} />
        <span className="badge text-bg-primary rounded-pill">{count}</span>
      </button>
      {products.length > 0 ? (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          name="end"
          scroll={true}
          autoFocus={true}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="cart-products">
              {products.length > 0
                ? products.map((product, i) => (
                    <Card key={i} className="cart-product">
                      <Card.Img
                        variant="top"
                        src={configRuteFile(product.img[0])}
                        className="product-img"
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => sumCount(i, "-")}
                        >
                          -1
                        </button>
                        <Card.Text>Cantidad:{product.quantity}</Card.Text>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => sumCount(i, "+")}
                        >
                          +1
                        </button>
                        <Card.Text>
                          Precio: ${product.price * product.quantity}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))
                : "No hay productos en el carrito de compras"}
              {products.length > 0 ? (
                <>
                  <h5 className="my-4">Total a pagar: ${priceFinal}</h5>
                  <button
                    className="btn btn-outline-info mb-3"
                    onClick={goCartPage}
                  >
                    Ir a pagar
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        ""
      )}
    </>
  );
};

export default OffcanvasComponent;

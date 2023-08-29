import { ProductContext } from "../../context/product/productContext";
import { types } from "../../context/product/productReducer";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import axios from "axios";

import "./ProductstListComponent.css";

const ProductsListComponent = () => {
  const [, dispatch] = useContext(ProductContext);
  const [productsList, setProductsList] = useState([]);

  const navigateTo = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/products/get-all"
        );

        return data;
      } catch (error) {
        console.error(error);
        window.alert("No hay productos");
      }
    };

    const pushSessionStorage = async () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const { detail } = await getProducts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setProductsList(detail);

      const productsSesionStorage = sessionStorage.getItem("products");

      if (productsSesionStorage) {
        dispatch({
          type: types.setProductState,
          payload: JSON.parse(productsSesionStorage),
        });
      }
    };

    pushSessionStorage();
  }, []);

  const addProduct = async (product) => {
    let productsSesionStorage = sessionStorage.getItem("products");

    if (productsSesionStorage) {
      let productsParse = JSON.parse(productsSesionStorage);

      const position = productsParse.findIndex((p) => p.id === product.id);

      if (position == -1) {
        productsParse.push({
          ...product,
          quantity: 1,
        });
      } else {
        productsParse[position] = {
          ...productsParse[position],
          quantity: productsParse[position].quantity + 1,
        };
      }

      sessionStorage.setItem("products", JSON.stringify(productsParse));

      dispatch({
        type: types.setProductState,
        payload: productsParse,
      });
    } else {
      productsSesionStorage = [];

      productsSesionStorage.push({
        ...product,
        quantity: 1,
      });

      sessionStorage.setItem("products", JSON.stringify(productsSesionStorage));

      dispatch({
        type: types.setProductState,
        payload: productsSesionStorage,
      });
    }
  };

  const goViewProduct = (product) => {
    navigateTo("/ViewProductPage", { state: product });
  };

  return (
    <>
      <div className="content-fluid">
        <div className="row mx-5">
          {productsList
            ? productsList.map((p, i) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 my-3 "
                  key={i}
                >
                  <Card className="card-product">
                    <Card.Img
                      className="card-product-img"
                      variant="top"
                      src={p.img[0]}
                    />
                    <Card.Body>
                      <Card.Title>{p.name}</Card.Title>
                      <Card.Text>{p.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="price-img">
                        ${p.price}
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => goViewProduct(p)}
                        >
                          Ver
                        </button>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <button
                        className="btn form-control btn-outline-info"
                        onClick={() => addProduct(p)}
                        type="submit"
                      >
                        Agregar
                      </button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default ProductsListComponent;

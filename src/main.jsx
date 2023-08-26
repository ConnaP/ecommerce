import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user/UserProvider.jsx";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { ProductProvider } from "./context/product/ProductProvider";

const products = [
  { userId: "64e0b45db138cb59e35333ad" },
  [
    {
      order: 3,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/carrito.png",
      description:
        "Some quick example text to build on the card title and make",
      quantity: 1,
    },
    {
      order: 0,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/carrito.png",
      description:
        "Some quick example text to build on the card title and make",
      quantity: 1,
    },
    {
      order: 1,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/carrito.png",
      description:
        "Some quick example text to build on the card title and make",
      quantity: 1,
    },

    {
      order: 4,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/carrito.png",
      description:
        "Some quick example text to build on the card title and make",
      quantity: 1,
    },
    {
      order: 2,
      name: "pantalon",
      price: 300,
      img: "../../public/assets/carrito.png",
      description:
        "Some quick example text to build on the card title and make",
      quantity: 1,
    },
  ],
];

// sessionStorage.setItem("products", JSON.stringify(products));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

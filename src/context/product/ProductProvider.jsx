/* eslint-disable react/prop-types */
import { ProductContext } from "./productContext";
import { useReducer } from "react";
import productReducer from "./productReducer";

export const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productReducer, null);

  return (
    <ProductContext.Provider value={[product, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};

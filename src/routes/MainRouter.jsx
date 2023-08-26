import { Route, Routes } from "react-router-dom";
import { CartPage } from "../pages/CartPage";
import { HomePage } from "../pages/HomePage";
import { LoginFormPage } from "../pages/LoginFormPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ProductsList } from '../pages/ProductsList'
import { RegisterFormPage } from "../pages/RegisterFormPage";
import { ViewProductPage } from "../pages/ViewProductPage";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/LoginFormPage" element={<LoginFormPage />} />
        <Route path="/PerfilPage" element={<PerfilPage />} />
        <Route path="/ProductsList" element={<ProductsList />} />
        <Route path="/RegisterFormPage" element={<RegisterFormPage />} />
        <Route path="/ViewProductPage" element={<ViewProductPage />} />
      </Routes>
    </>
  );
};

import "./HomeComponent.css";

import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigateTo = useNavigate();

  const goCatalogue = () => {
    navigateTo("/ProductsList");
  };

  return (
    <>
      <h1>Bienvenido</h1>
      <button className="btn btn-success" onClick={goCatalogue}>
        Catálogo
      </button>
    </>
  );
};

export default HomeComponent;

import "./HomeComponent.css";

import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const navigateTo = useNavigate();

  const goCatalogue = () => {
    navigateTo("/ProductsList");
  };

  return (
    <>
      <div className="container-front-page">
        <img
          src="../../public/assets/portada1.jpg"
          alt="Fondo de pantalla"
          className="background-image"
        />
        <button
          className="btn btn-outline-dark centered-button"
          onClick={goCatalogue}
        >
          Catálogo
        </button>
      </div>
    </>
  );
};

export default HomeComponent;

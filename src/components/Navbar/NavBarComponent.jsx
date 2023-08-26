import { useState } from "react";
import { NavLink } from "react-router-dom";
import OffcanvasComponent from "../Offcanvas/OffcanvasComponent";

export const NavBarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Inicio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/ProductsList">
                Productos en venta
              </NavLink>
              <NavLink className="nav-link" to="/RegisterFormPage">
                Registrarse
              </NavLink>
              <NavLink className="nav-link" to="/LoginFormPage">
                Ingresar
              </NavLink>
            </div>
          </div>

          <div className="navbar-nav">
            <NavLink className="nav-link" to="/PerfilPage">
              Perfil
            </NavLink>

            <OffcanvasComponent
              // eslint-disable-next-line no-undef
              handleShow={handleShow}
              // eslint-disable-next-line no-undef
              handleClose={handleClose}
              // eslint-disable-next-line no-undef
              show={show}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

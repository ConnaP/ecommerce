import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import OffcanvasComponent from "../Offcanvas/OffcanvasComponent";
import { Container, Nav, Navbar } from "react-bootstrap";
import { types } from "../../context/user/userReducer";
import { UserContext } from "../../context/user/userContext";

export const NavBarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user] = useContext(UserContext);
  const [, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (!user || !user.user) {
      const user = sessionStorage.getItem("user");

      if (user) {
        dispatch({
          type: types.setUserState,
          payload: JSON.parse(user),
        });
      }
    }
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/ProductsList">Productos en venta</Nav.Link>
              {!user?.user ? (
                <>
                  <Nav.Link href="/RegisterFormPage">Registrarse</Nav.Link>
                  <Nav.Link href="/LoginFormPage">Ingresar</Nav.Link>
                </>
              ) : (
                <></>
              )}
            </Nav>
            <NavLink className="nav-link" to="/PerfilPage">
              Perfil
            </NavLink>
            {/* <NavLink className="nav-link"> */}
            <OffcanvasComponent
              // eslint-disable-next-line no-undef
              handleShow={handleShow}
              // eslint-disable-next-line no-undef
              handleClose={handleClose}
              // eslint-disable-next-line no-undef
              show={show}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

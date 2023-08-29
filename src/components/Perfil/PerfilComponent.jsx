import { Card } from "react-bootstrap";
import { types } from "../../context/user/userReducer";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/userContext";

import "./PerfilComponent.css";

const PerfilComponent = () => {
  const [user] = useContext(UserContext);
  const [, dispatch] = useContext(UserContext);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user || !user.user) {
      const user = sessionStorage.getItem("user");

      if (user) {
        dispatch({
          type: types.setUserState,
          payload: JSON.parse(user),
        });
      } else {
        navigateTo("/LoginFormPage");
      }
    }
  }, []);

  const closeSesion = () => {
    console.log(user);
    dispatch({
      type: types.setUserState,
      payload: null,
    });

    sessionStorage.removeItem("user");

    navigateTo("/");
  };

  return (
    <>
      {user?.user ? (
        <Card className="cart-user">
          <Card.Body>
            <Card.Title> {user.user.username} !!!</Card.Title>
            <Card.Img
              variant="top"
              src={"../../../public/assets/avatar.png"}
              className="user-img"
            />
            <Card.Text>Correo: {user.user.email}</Card.Text>
          </Card.Body>
          <button
            className="btn btn-outline-warning d-grid col-6 mx-auto shadow my-4"
            type="submit"
            id="contact"
            onClick={closeSesion}
          >
            Cerrar sesión
          </button>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default PerfilComponent;

import { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../../context/user/userContext";
import { useNavigate } from "react-router-dom";

import "./PerfilComponent.css";

const PerfilComponent = () => {
  const [user] = useContext(UserContext);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user || !user.user) {
      navigateTo("/LoginFormPage");
    }
  }, []);

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
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default PerfilComponent;

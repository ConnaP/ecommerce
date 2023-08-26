import { Card, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./ViewProductComponent.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ViewProductComponent = () => {
  const location = useLocation();
  const receivedProps = location.state;
  const navigateTo = useNavigate();

  const goViewProduct = () => {
    navigateTo("/ProductsList");
  };

  return (
    <>
      {receivedProps ? (
        <Card className="vcard-product">
          <Card.Title>{receivedProps.name}</Card.Title>
          <Card.Img
            className="vcard-product-img"
            variant="top"
            src={receivedProps.img}
          />
          <Card.Body>
            <Card.Text>{receivedProps.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="vprice-img">
              ${receivedProps.price}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button
              className="btn form-control"
              onClick={goViewProduct}
            >
              volver
            </button>
          </Card.Body>
        </Card>
      ) : (
        navigateTo("/ProductsList")
      )}
    </>
  );
};

export default ViewProductComponent;

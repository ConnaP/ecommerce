import { useState } from "react";
// import { Card, Carousel, ListGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./ViewProductComponent.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const ViewProductComponent = () => {
  const location = useLocation();
  const receivedProps = location.state;
  const navigateTo = useNavigate();


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const goViewProduct = () => {
    navigateTo("/ProductsList");
  };

  return (
    <>
      {receivedProps ? (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={receivedProps.img} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={receivedProps.img} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={receivedProps.img} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
          <button className="btn form-control" onClick={goViewProduct}>
            volver
          </button>
        </>
      ) : (
        navigateTo("/ProductsList")
      )}
    </>
  );
};

export default ViewProductComponent;

// <Card className="vcard-product">
//   <Card.Title>{receivedProps.name}</Card.Title>
//   <Card.Img
//     className="vcard-product-img"
//     variant="top"
//     src={receivedProps.img}
//   />
//   <Card.Body>
//     <Card.Text>{receivedProps.description}</Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroup.Item className="vprice-img">
//       ${receivedProps.price}
//     </ListGroup.Item>
//   </ListGroup>
//   <Card.Body>
//     <button
//       className="btn form-control"
//       onClick={goViewProduct}
//     >
//       volver
//     </button>
//   </Card.Body>
// </Card>

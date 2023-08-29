import { Carousel, Image } from "react-bootstrap";
import { configRuteFile } from "../../routes/configRuteFile";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
          <div className="container-carousel">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              data-bs-theme="dark"
            >
              {receivedProps.img.map((img, i) => (
                <Carousel.Item key={i}>
                  <Image className="img-carousel" src={configRuteFile(img)} thumbnail />
                </Carousel.Item>
              ))}
            </Carousel>
            <button
              className="btn form-control btn-outline-success btn-go-back"
              onClick={goViewProduct}
            >
              Volver
            </button>
          </div>
        </>
      ) : (
        navigateTo("/ProductsList")
      )}
    </>
  );
};

export default ViewProductComponent;

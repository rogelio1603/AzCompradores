import React from "react";
import { CardStyles } from "../shared/Card.styles";

function Card({
  image,
  title,
  category,
  content,
  mxLink,
  usLink,
  mxImage,
  usImage,
  onClick,
}) {
  return (
    <CardStyles>
      <div className="principal-content">
        <div className="product" onClick={onClick}>
          <img src={image.url} alt="product" />
          <div className="product-content">
            <div className="section-one section">
              <h2>{title}</h2>
            </div>
            <div className="section-two section">
              <ul>
                <li>
                  <img src={mxImage.url} />
                </li>
                <li>
                  <img src={usImage.url} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CardStyles>
  );
}

export { Card };

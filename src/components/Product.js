import React from "react";
import "../styles/Product.css";
import Fade from "react-reveal/Fade";

const Product = (props) => {
  return (
    <Fade bottom>
      <div className="product-container">
        <div className="product-popup"></div>
        <div className="product-squares">
          <img src={props.imageURL} alt="Logo" className="product-img" />
          <div class="product-top-dark">{props.name}</div>
          <div class="product-centered-dark">{props.title}</div>
          <div class="product-below-dark">{props.price}</div>
        </div>
      </div>
    </Fade>
  );
};

export default Product;

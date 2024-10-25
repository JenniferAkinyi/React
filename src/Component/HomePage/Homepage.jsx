import React from "react";
import './HomePage.css'
import shoes from '../Assets/images/nikes.jpeg';

const Homepage = () => {
  return (
    <div className="container">
      <img src={shoes} alt="shoes" className="shoes" />
      <div className="image-navigation">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="info-section">
        <h2 className="product-name">Product Name</h2>
        <p className="product-description">PRODUCT DESCRIPTION</p>
      </div>
      <div className="colour-section">
        <p>Colour</p>
        <div className="colours">
          <span className="colour black"></span>
          <span className="colour blue"></span>
          <span className="colour pink"></span>
          <span className="colour orange"></span>
        </div>
      </div>
      <div className="size-section">
        <p>Size</p>
        <div className="sizes">
          <span className="size">40</span>
          <span className="size">41</span>
          <span className="size">42</span>
          <span className="size">43</span>
          <span className="size">44</span>
          <span className="size">45</span>
        </div>
      </div>
      <div className="buy-section">
        <button className="buy-btn">BUY</button>
        <p className="price">€45.95</p>
      </div>
    </div>
  );
};

export default Homepage;

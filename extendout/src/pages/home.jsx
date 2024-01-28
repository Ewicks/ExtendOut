import React from "react";
import Homeimage from "../assets/images/home-img.png";
import Kitchen from "../assets/images/kitchen.png";
import Kitchentwo from "../assets/images/kitchentwo.png";
import "../../src/App.css";

const Home = () => {
  return (
    <div className="home-page">
      <img className="home-img" src={Homeimage} alt="home-image" />
      <div className="center">
      
        <button className="btn orange-btn mt-4">Contact Us</button>
      </div>
      <div className="row">
        <div className="col my-5 text-center">
          <h1 className="fw-bold title">
            SPECIALISTS IN LOFT CONVERSIONS AND EXTENSIONS
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center p-0">
          <p className="p-5">
            ExtendOut is a dedicated Loft Conversion and Extension company with
            passion for good design and an eye for detail. We set the bar high
            when it comes to the level of craftsmanship and service we provide.
          </p>
        </div>
        <div className="col p-0">
          <div className="extension-example">
            <img className="kitchen-img" src={Kitchen} alt="picture of kitchen" />
            <div className="overlay-text">
              <p>aasd</p>
              <p> My super text.</p>
              <p>asd asd asd asdads.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <div className="extension-example">
            <img className="kitchen-img" src={Kitchentwo} alt="picture of kitchen" />
            <div className="overlay-text">
              <p>aasd</p>
              <p> My super text.</p>
              <p>asd asd asd asdads.</p>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center p-0">
          <p className="p-5">
            ExtendOut is a dedicated Loft Conversion and Extension company with
            passion for good design and an eye for detail. We set the bar high
            when it comes to the level of craftsmanship and service we provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

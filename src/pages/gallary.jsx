import React from "react";
import Kitchen from "../assets/images/kitchen.png";

function Gallary() {
  return (
    <div>
      <div className="gallary-padding">
        <div className="row">
          <div className="col">
            <h1 className="my-5 gallary-title">Gallary</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="gallery-container">
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
              <div className="gallery-item">
                <img src={Kitchen} alt="" />
                <p
                  className="gallary-name-tag d-flex 
                justify-content-center 
                align-items-center"
                >
                  test
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;

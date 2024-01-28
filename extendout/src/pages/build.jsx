import React from "react";
import Kitchen from "../assets/images/kitchen.png";


function build() {
  return (
    <div>
      <div className="extra-padding">
        <div className="row">
          <div className="col">
            <h1 className="my-4">Design & Planning</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className="design-img" src={Kitchen} alt="" />
          </div>
          <div className="col">
            <div className="design-container">
              <p>
              If you already have existing and proposed
              drawings for your project, we can provide you
               with a detailed build cost proposal to include 
               the shell costs and all of your chosen 
               specifications.
              </p>
              <h2>Specifications you may want to include in your build:</h2>
              <br />
              <ul>
                <li>Bespoke Joinery</li>
                <li>Decorating</li>
                <li>Electrical</li>
                <li>Flooring</li>
                <li>Kitchen</li>
                <li>Internal doors</li>
                <li>Landscaping / patio</li>
                <li>Bathroom / sanitary ware</li>
                <li>Tiling</li>
                <li>Windows & doors (external)</li>
              </ul>
              <p>
              At ShapeHouse, our mission is to facilitate
               a seamless and refined construction experience
               for our clients. To achieve this, we have
                high-quality tradesmen from Bricklayers, Roofers, 
                Electricians, Plumbers, Carpenters, Plasterers, 
                Tilers, Joiners, Kitchen Fitters, Heating Engineers,
                 and Decorators—our expertise knows no bounds.
              </p>
              <br />
              <p>
              Recognising the importance of clear and open
               communication, we assign a dedicated team of
                project guides to serve as your steadfast
                 point of contact throughout the entire build. We
                  take immense pride in our commitment to
                   transparency, offering regular valuations and
                    updates, ensuring that you remain well-informed
                and engaged as your vision materialises.
              </p>
              <br />
              <p>So, allow yourself to revel in anticipation,
                 as we meticulously attend to every detail of
                your extraordinary build.
                </p>
                <a href="" className="btn contact-build-btn mb-5">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default build;

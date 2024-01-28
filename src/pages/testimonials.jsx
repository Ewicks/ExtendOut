import React from 'react';
import Kitchen from "../assets/images/kitchen.png";


function Testimonials() {
  return (
    <div>
      <div className="gallary-padding">
        <div className="row">
          <div className="col">
            <h1 className="my-5 gallary-title">Testimonials</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="gallery-container gap-5">
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
            </div>
            <div className="gallery-container gap-5">
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
              <div className="testimonial-item">
                <img className='img-thumbnail' src={Kitchen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials
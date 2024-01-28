import React from 'react'
import Kitchen from "../assets/images/kitchen.png";

function Design() {
  return (
    <div>
      <div className="extra-padding">
      <div className="row">
        <div className="col">
          <h1 className='my-4'>Design & Planning</h1>
        </div>
      </div>
      <div className="row gap-5">
        <div className="col">
          <img className='design-img' src={Kitchen} alt="" />
        </div>
        <div className="col">
          <div className="design-container">
            <p>While renovations can be time-consuming and 
              complicated, your return on investment is sure to 
              make it worth it. Not only will you experience the 
              best your home has to offer, but you will also
               guarantee growth in property value when it’s time
                to move on. The key to a successful transformation
                 is quality insight right from the start.
            </p>
            <br />
            <p>As design and planning experts, we guide you toward 
              cost-effective solutions as necessary while making 
              sure you never have to compromise on what’s most
               important to you and your family. Whatever your plan 
               and budget, we work effectively within these
                parameters and keep you abreast of developments 
                every step of the way. The remodel you imagine is
                 the one we create.
            </p>
            <br />
            <p>
            Our offering includes drawing up the plans, 
            handling applications for changes, conducting 
            on-site measured surveys, accurate quotes for
             the remodelling, and successful execution of the 
            plans.
            </p>

          </div>
         
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="bullet-points">
            <h1>Our design & planning proposal includes:</h1>
            <ul className='lh-lg'>
              <li>Full measured survey with our surveyor</li>
              <li>Floor plans and elevation drawings of your existing property</li>
              <li>Online design session with our ARB registered Architect</li>
              <li>Proposed floor plans and elevations</li>
              <li>Up to 3 design revisions</li>
              <li>Supporting planning documents</li>
              <li>Planning application submission and management</li>
            </ul>
           
          </div>

        </div>
        <div className="col d-flex justify-content-start align-items-center">
          <a className='btn contact-btn' href="#">Contact Us</a>

        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <img className='design-imgg' src={Kitchen} alt="" />
        </div>
        <div className="col">
          <h2>Additional services:</h2>
          <p>Building regulations and structural calculations</p>
          <ul className='lh-lg'>
            <li>Building regulations specifications prepared by 
              our chartered building engineer</li>
              <li>Structural designs and calculations produced by 
              our chartered structural engineer</li>
              <li>Submit and manage a full plans building control 
              application</li>
              <li>Support construction through to completion of
               build</li>
          </ul>
          <p>Build-over agreement with your local water company</p>
          <ul className='lh-lg'>
            <li>Produce existing and proposed drain plans</li>
            <li>Produce existing and proposed drain plans</li>
            <li>Produce existing and proposed drain plans</li>
            <li>Produce existing and proposed drain plans</li>
          </ul>
        </div>
      </div>

      </div>
      
    </div>
  )
}

export default Design
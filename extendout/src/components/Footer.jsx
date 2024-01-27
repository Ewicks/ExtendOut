import React from 'react'
import Instagram from '../assets/images/insta.png';
import Facebook from '../assets/images/facebook.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center flex-column">
                <h1>Contact Us</h1>
                <p>074747734</p>
                <p>email address: </p>
            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
                <h1>Follow Us</h1>
                <img className='social-icons' src={Instagram} alt="" />
                <img className='social-icons' src={Facebook} alt="" />


            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
                <h1>images here</h1>
            </div>
        </div>
        <div className="line"></div>
        <div className="bottom-footer">
            <p>ExtendOut&#169;</p>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Logo from '../assets/images/logo.png';




const Footer = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center flex-column my-5">
                <div className="div">
                    <div className="logo">
                        <img className='logo-img' src={Logo} alt="" />
                    </div>
                    <div className="phone mt-3">
                        <FaPhone />
                        <p className='phone-number'>0034340420340</p>
                    </div>
                    <div className="phone">
                        <FaPhone />
                        <p className='phone-number'>0034340420340</p>
                    </div>
                    <div className="email">
                        <MdEmail />
                        <p className='phone-number'>extendout@extendout.com</p>
                    </div>
                    <p className='my-4'>© 2024 ShapeHouse | FAQ Privacy Policy</p>

                </div>
                

            </div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
                <div className="social-icons">
                    <FaInstagram />
                    <FaFacebook />
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Footer
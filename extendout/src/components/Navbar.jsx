import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../assets/images/menu.png';
import Logo from '../assets/images/logo.png';
import '../../src/App.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img className='logo-img' src={Logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
            {/* Use the <img> tag for images */}
            <img className='menu-img' src={Hamburger} alt="Hamburger Icon" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/design">Design & planning</NavLink>
            </li>
            <li>
              <NavLink to="/build">Build</NavLink>
            </li>
            <li>
              <NavLink to="/about">Team</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

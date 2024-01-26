import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../assets/images/menu.png';
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
          <h1>Extend Out</h1>
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
              <NavLink to="/blog">Design & planning</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Build</NavLink>
            </li>
            <li>
              <NavLink to="/about">Team</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Testimonials</NavLink>
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

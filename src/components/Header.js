import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo and Navigation */}
        <nav className="navbar">
          <div className="logo">
            <img src={require("../images/Logo.jpg")} alt="Little Lemon Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/reserve">Reservations</Link></li>
            <li><Link to="#menu">Menu</Link></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

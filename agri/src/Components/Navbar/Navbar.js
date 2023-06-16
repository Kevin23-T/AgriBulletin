import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AgriBulletIn</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/notification">Notifications</Link>
        </li>
        <li>
          <Link to="/scheme">Schemes</Link>
        </li>
        <li>
          <Link to="/complaint">Complaints</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

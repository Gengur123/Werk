import * as React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="http://via.placeholder.com/80x80" className="logo" />
        <ul>
          <li>Our Inventory</li>
          <li>Services</li>
          <li> <Link to='/about'>About Us</Link></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
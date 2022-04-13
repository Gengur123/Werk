import * as React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to='/' className="logo"><img src="http://via.placeholder.com/80x80"/></Link>
        
        <ul>
          <li><Link to='/inventory'>Inventory</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li> <Link to='/about'>About Us</Link></li>
          <li> <Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
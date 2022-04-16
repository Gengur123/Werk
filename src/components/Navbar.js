import * as React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to='/' className="logo"><img src="http://via.placeholder.com/60x60"/></Link>
        <ul>
          <li><button><Link to='/'>Home</Link></button></li>
          <li><button><Link to='/inventory'>Inventory</Link></button></li>
          <li><button><Link to='/service'>Service</Link></button></li>
          <li><button><Link to='/about'>About</Link></button></li>
          <li><button><Link to="/contact">Contact</Link></button></li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
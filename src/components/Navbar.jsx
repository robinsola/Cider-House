import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyles = {
    textDecoration: 'none'
  };
  return (
    <div>
      <h1>Cider House</h1>
      <ul>
        <Link to ='/' style={linkStyles}><li>Home</li></Link>
        <Link to ='/About' style={linkStyles}><li>About Us</li></Link>
        <Link to ='/CiderList' style={linkStyles}><li>Taproom</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;

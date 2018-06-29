import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyles = {
    textDecoration: 'none'
  };
  return (
    <div>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: center;
          list-style: none;
          background-color: #383838;
        }
        li {
          color: white;
          padding: 10px 30px;
          transition: background-color .5s;
        }
        li:hover {
          background-color: red;
        }
      `}</style>
      <ul>
        <Link to ='/' style={linkStyles}><li>Home</li></Link>
        <Link to ='/About' style={linkStyles}><li>About Us</li></Link>
        <Link to ='/CiderList' style={linkStyles}><li>Taproom</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;

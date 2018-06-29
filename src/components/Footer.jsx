import React from 'react';

function Footer() {
  return (
    <div>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: space-around;
          list-style: none;
          padding: 50px;
          background-color: #221800;
          color: white;
        }
        @media only screen and (max-width: 700px) {
          ul {
            display: block;
            text-align: center;
            line-height: 30px;
          }
        }
      `}</style>
      <ul>
        <li>The Cider House</li>
        <li>400 SW 6th Avenue | Portland, Oregon</li>
        <li>518-585-5250</li>
      </ul>
    </div>
  );
}

export default Footer;

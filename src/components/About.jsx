import React from 'react';
import interior from '../assets/images/interior.jpg';

function About() {
  return (
    <div>
      <style jsx>{`
        .header {
          background: url(${interior});
          background-position: center;
          height: 550px;
          color: white;
          text-align: center;
        }
      `}</style>
      <div className="header">
      </div>
    </div>
  );
}

export default About;

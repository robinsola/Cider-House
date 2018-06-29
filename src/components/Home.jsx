import React from 'react';
import header from '../assets/images/header.jpeg';

function Home() {
  return (
    <div>
      <style jsx>{`
        .header {
          background: url(${header});
          background-position: center;
          height: 700px;
        }
        h1 {
          text-align: center;
          padding: 70px 0 0 0;
          font-family: georgia;
          color: white;
          font-size: 4.5em;
          text-shadow: 0 0 15px #F1D48D;
        }
        p {
          font-size: 1.5em;
          text-align: center;
          color: white;
          padding: 10px 0 0 0;
        }
      `}</style>
      <div className="header">
        <h1>The Cider House</h1>
        <p>Open Daily from Noon to Midnight</p>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import header from '../assets/images/header.jpeg';
import ciderWeek from '../assets/images/cider-week.jpeg';
import Events from './Events';

function Home() {
  return (
    <div>
      <style jsx>{`
        .header {
          background: url(${header});
          background-position: center;
          height: 550px;
        }
        .header h1 {
          text-align: center;
          padding: 70px 0 0 0;
          font-family: georgia;
          color: white;
          font-size: 4.5em;
          animation: flash 2s linear 0s;
          animation-iteration-count: infinite;
        }
        .header p {
          font-size: 1.5em;
          text-align: center;
          color: white;
          padding: 10px 0 0 0;
        }
        @keyframes flash {
          0% {}
          30% {text-shadow: 0 0 20px #F1D48D}
          70% {text-shadow: 0 0 20px #F1D48D}
          100% {}
        }
      `}</style>
      <div className="header">
        <h1>The Cider House</h1>
        <p>Open Daily from Noon to Midnight</p>
      </div>
      <Events />
    </div>
  );
}

export default Home;

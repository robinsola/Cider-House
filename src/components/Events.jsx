import React from 'react';
import ciderWeek from '../assets/images/cider-week.jpeg';
import ciderRun from '../assets/images/cider-run.jpg';

function Events() {
  return (
    <div>
      <style jsx>{`
        h3 {
          text-align: center;
          margin: 20px;
          text-decoration: underline;
        }
        .eventGroup {
          margin: 40px 100px;
          display: flex;
          align-items: center;
        }
        .eventInfo {
          margin: 0 0 0 40px;
          line-height: 30px;
        }
        @media only screen and (max-width: 1050px) {
          img {
            width: 100%;
          }
          .eventGroup {
            display: block;
          }
          .eventInfo {
            margin: 20px 0;
          }
        }
      `}</style>
    <h3><em>Upcoming Events</em></h3>
      <div className="eventGroup">
        <div className="eventImg">
          <img src={ciderWeek}/>
        </div>
        <div className="eventInfo">
          <h2>Oregon Cider Week 2018</h2>
          <h4><em>June 21st - July 1st</em></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="eventGroup">
        <div className="eventImg">
          <img src={ciderRun}/>
        </div>
        <div className="eventInfo">
          <h2>Oregon Cider 5K Fun Run</h2>
          <h4><em>Sunday, June 24th, 11am</em></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

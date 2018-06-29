import React from 'react';
import ciderWeek from '../assets/images/cider-week.jpeg';

function Events() {
  return (
    <div>
      <style jsx>{`
        .eventGroup {
          margin: 20px 40px;
          display: flex;
          align-items: center;
        }
        .eventInfo {
          margin: 0 0 0 40px;
          line-height: 30px;
        }
      `}</style>
      <h4>Upcoming Events</h4>
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
    </div>
  );
}

export default Events;
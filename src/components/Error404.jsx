import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  const locationStyle = {
    color: 'gray'
  };
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
          margin: 200px 0;
        }
        h4 {
          margin: 30px 0 0 0;
        }
      `}</style>
      <h1>The page <span style={locationStyle}>{props.location.pathname}</span> does not exist</h1>
      <h4><Link to='/'>Return to The Cider House</Link></h4>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;

import React from 'react';
import PropTypes from 'prop-types';

function AdminConfirmation(props) {
  return (
    <div>
      <h1>Please Enter Admin Password:</h1>
      <input type="password" id="adminPassword"/>
      <button onClick={props.onAdminConfirmation}>enter</button>
    </div>
  );
}

AdminConfirmation.propTypes = {
  onAdminConfirmation: PropTypes.func
};

export default AdminConfirmation;

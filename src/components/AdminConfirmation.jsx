import React from 'react';
import PropTypes from 'prop-types';
import interior from '../assets/images/interior.jpg';

function AdminConfirmation(props) {
  return (
    <div>
      <style jsx>{`
        .header {
          background: url(${interior});
          background-position: center;
          height: 550px;
          text-align: center;
        }
        h3 {
          padding: 30px 0 25px 0;
          color: white;
        }
        input {
          height: 30px;
          border: 1px solid #221800;
          border-radius: 5px;
          padding: 5px;
          width: 100px;
          transition: width .35s ease-in-out;
        }
        input:focus {
          box-shadow: 2px 5px 5px black;
          width: 250px;
          outline: none;
        }
        button {
          cursor: pointer;
          padding: 10px 30px;
          font-size: 1em;
          border-radius: 5px;
          margin: 30px 0;
          color: white;
          background-color: #221800;
          border: 1px solid white;
          transition: background-color .5s;
        }
        button:hover {
          background-color: #E4BC5E;
        }
      `}</style>
      <div className="header">
        <h3>Admin User Password:</h3>
        <input type="password" id="adminPassword"/><br/>
        <button onClick={props.onAdminConfirmation}>enter</button>
      </div>
    </div>
  );
}

AdminConfirmation.propTypes = {
  onAdminConfirmation: PropTypes.func
};

export default AdminConfirmation;

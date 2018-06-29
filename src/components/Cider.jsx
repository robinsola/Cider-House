import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {
  return (
    <div>
      <h4>{props.name}, {props.brewer}</h4>
      <p>{props.description}</p>
      <p>abv: {props.abv}</p>
      <p>${props.price} per pint</p>
      <p>pints left: {props.remaining}</p>
    </div>
  );
}

Cider.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Cider;

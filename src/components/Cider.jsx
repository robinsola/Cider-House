import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {
  return (
    <div>
      <style jsx>{`
        img {
          width: 100px;
        }
        .ciderGroup {
          width: 300px;
          margin: 0 0 40px 0;
        }
      `}</style>
      <div className="ciderGroup">
        <img src={props.image}/>
        <h4>{props.name}, {props.brewer}</h4>
        <p>{props.description}</p>
        <p>abv: {props.abv}</p>
        <p>${props.price} per pint</p>
        <p>pints left: {props.remaining}</p>
      </div>
    </div>
  );
}

Cider.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  image: PropTypes.string
};

export default Cider;

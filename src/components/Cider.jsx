import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {
  return (
    <div>
      <style jsx>{`
        img {
          width: 180px;
        }
        p:nth-of-type(3) {
          font-weight: 600;
          color: #00b300;
        }
        .ciderGroup {
          display: flex;
          align-items: center;
          padding 40px;
          border-bottom: 1px solid gray;
        }
        .ciderInfo {
          margin: 0 0 0 40px;
        }
      `}</style>
      <div className="ciderGroup">
        <div className="logo">
          <img src={props.image}/>
        </div>
        <div className="ciderInfo">
          <h2>{props.name}, {props.brewer}</h2>
          <p>{props.description}</p>
          <p>abv: {props.abv}</p>
          <p>${props.price} pints</p>
          <p>pints left: {props.remaining}</p>
        </div>
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

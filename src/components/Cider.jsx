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
        }
        .ciderInfo {
          margin: 0 0 0 40px;
        }
        @media only screen and (max-width: 1050px) {
          .ciderGroup {
            border-bottom: 1px solid gray;
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
        <div className="buyPintBtn">
          <button onClick={() => props.onBuyPintClicked(props.ciderId)}>Buy Pint</button>
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
  remaining: PropTypes.number,
  image: PropTypes.string,
  ciderId: PropTypes.string,
  onBuyPintClicked: PropTypes.func
};

export default Cider;

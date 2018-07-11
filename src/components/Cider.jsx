import React from 'react';
import PropTypes from 'prop-types';

function Cider(props) {

  return (
    <div>
      <style jsx>{`
        img {
          width: 180px;
        }
        p {
          line-height: 25px;
          margin-top: 10px;
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
        button {
          cursor: pointer;
          padding: 10px 30px;
          font-size: 1em;
          border-radius: 5px;
          margin: 30px;
          color: white;
          background-color: #221800;
          border: 1px solid white;
          transition: background-color .5s;
        }
        button:hover {
          background-color: #E4BC5E;
        }
        .logo {
          padding-right: 30px;
          border-right: 1px solid gray;
        }
      `}</style>
      <div className="ciderGroup">
        <div className="logo">
          <img src={props.image}/>
          <div className="buyPintBtn">
            <button onClick={() => props.onBuyPintClicked(props.ciderId)}>Buy Pint</button>
          </div>
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
  remaining: PropTypes.number,
  image: PropTypes.string,
  ciderId: PropTypes.string,
  onBuyPintClicked: PropTypes.func
};

export default Cider;

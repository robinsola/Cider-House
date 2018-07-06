import React from 'react';
import Cider from './Cider';
import pint from '../assets/images/pint.jpeg';
import PropTypes from 'prop-types';

function CiderList(props) {
  return (
    <div>
      <style jsx>{`
        .title {
          background: url(${pint});
          background-position: top;
          height: 550px;
          color: white;
          text-align: center;
        }
        h1 {
          padding: 70px 0 0 0;
          font-family: georgia;
          color: white;
          font-size: 4.5em;
          text-shadow: 0 0 15px #F1D48D;
        }
        p {
          font-size: 1.5em;
          color: black;
          padding: 10px 0 0 0;
        }
        .wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 50px;
          margin: 0 40px;
        }
        @media only screen and (max-width: 1050px) {
          .wrapper {
            grid-template-columns: 1fr;
        }
      `}</style>
      <div className="title">
        <h1>What's on tap?</h1>
        <p><em>Plenty of rotating taps of craft ciders</em></p>
      </div>
      <div className="wrapper">
        {props.ciderList.map((cider) =>
          <Cider name={cider.name}
            brewer={cider.brewer}
            description={cider.description}
            abv={cider.abv}
            price={cider.price}
            remaining={cider.remaining}
            image={cider.image}
            key={cider.id} />
        )}
      </div>
    </div>
  );
}

CiderList.propTypes = {
  ciderList: PropTypes.array
};

export default CiderList;

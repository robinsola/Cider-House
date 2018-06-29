import React from 'react';
import Cider from './Cider';
import angryOrchard from '../assets/images/angry-orchard-logo.png';
import austinEastciders from '../assets/images/austin-eastciders-logo.png';
import jacksCider from '../assets/images/jacks-cider-logo.png';
import lonetree from '../assets/images/lonetree-logo.png';
import pdxCider from '../assets/images/pdx-cider-logo.png';
import woodchuck from '../assets/images/woodchuck-logo.png';
import squareMile from '../assets/images/squaremile-logo.png';

const masterCiderList = [
  {
    name: 'Union Jack',
    brewer: 'Portland Cider Co',
    description: 'Oregon grown apples in a truly authentic English Cider',
    abv: '6.9%',
    price: '7',
    remaining: '20',
    image: pdxCider
  },
  {
    name: 'Fever Bark Tonic',
    brewer: 'Square Mile Cider Co',
    description: 'Juniper berries and Cinchona bark blended in classic dry NW apple cider',
    abv: '6.3%',
    price: '6',
    remaining: '60',
    image: squareMile
  },
  {
    name: 'Ruby Red Grapefruit',
    brewer: 'Austin Eastciders',
    description: 'Zippy, zesty, and refreshingly dry, from Austin Texas',
    abv: '4.7%',
    price: '3',
    remaining: '65',
    image: austinEastciders
  },
  {
    name: 'Peach',
    brewer: 'Jack\'s Hard Cider',
    description: 'Light and fruity with a flirty peach aroma',
    abv:  '5.9%',
    price: '6',
    remaining: '75',
    image: jacksCider
  },
  {
    name: 'Rose\' Hard Cider',
    brewer: 'Angry Orchard',
    description: 'Rare French apples and a kiss of hibiscus, similar to a semi-dry wine',
    abv:  '7.5%',
    price: '6',
    remaining: '18',
    image: angryOrchard
  },
  {
    name: 'Apple Ginger Cider',
    brewer: 'Lonetree',
    description: 'British-Columbia craft cider with a zesty twist of real ginger',
    abv:  '5.5%',
    price: '6',
    remaining: '58',
    image: lonetree
  },
  {
    name: 'Amber',
    brewer: 'Woodchuck Hard Cider',
    description: 'blend of apples and fermented with Champagne, the original blend from Middlebury, Vermont',
    abv: '6.9%',
    price: '7',
    remaining: '20',
    image: woodchuck
  }
];

function CiderList() {
  return (
    <div>
      <style jsx>{`
        .title {
          text-align: center;
          margin: 20px 0 40px 0;
        }
        .body {
          margin: 0 0 0 40px;
        }
      `}</style>
      <div className="title">
        <h1>Cider List</h1>
        <p>7 Rotating Taps of Craft Ciders</p>
      </div>
      <div className="body">
        {masterCiderList.map((cider, index) =>
          <Cider name={cider.name}
            brewer={cider.brewer}
            description={cider.description}
            abv={cider.abv}
            price={cider.price}
            remaining={cider.remaining}
            image={cider.image}
            key={index} />
        )}
      </div>
    </div>
  );
}

export default CiderList;

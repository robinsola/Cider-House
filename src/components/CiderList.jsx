import React from 'react';
import Cider from './Cider';

const masterCiderList = [
  {
    name: 'Union Jack',
    brewer: 'Portland Cider Co',
    description: 'Oregon grown apples in a truly authentic English Cider',
    abv: '6.9%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Fever Bark Tonic',
    brewer: 'Portland Cider Co',
    description: 'Juniper berries and Cinchona bark blended in classic dry NW apple cider',
    abv: '6.3%',
    price: '6',
    remaining: '60'
  },
  {
    name: 'Ruby Red Grapefruit',
    brewer: 'Austin Eastciders',
    description: 'Zippy, zesty, and refreshingly dry, from Austin Texas',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    name: 'Peach',
    brewer: 'Jack\'s Hard Cider',
    description: 'Light and fruity with a flirty peach aroma',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    name: 'Rose\' Hard Cider',
    brewer: 'Angry Orchard',
    description: 'Rare French apples and a kiss of hibiscus, similar to a semi-dry wine',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    name: 'Apple Ginger Cider',
    brewer: 'Lonetree',
    description: 'British-Columbia craft cider with a zesty twist of real ginger',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  },
  {
    name: 'Amber',
    brewer: 'Woodchuck Hard Cider',
    description: 'blend of apples and fermented with Champagne, the original blend from Middlebury, Vermont',
    abv: '6.9%',
    price: '7',
    remaining: '20'
  }
];

function CiderList() {
  return (
    <div>
      <h1>Cider List</h1>
        {masterCiderList.map((cider, index) =>
        <Cider name={cider.name}
          brewer={cider.brewer}
          description={cider.description}
          abv={cider.abv}
          price={cider.price}
          remaining={cider.remaining}
          key={index} />
        )}
    </div>
  );
}

export default CiderList;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CiderList from './CiderList';
import Error404 from './Error404';
import NewCiderControl from './NewCiderControl';
import angryOrchard from '../assets/images/angry-orchard-logo.png';
import austinEastciders from '../assets/images/austin-eastciders-logo.png';
import jacksCider from '../assets/images/jacks-cider-logo.png';
import lonetree from '../assets/images/lonetree-logo.png';
import pdxCider from '../assets/images/pdx-cider-logo.png';
import woodchuck from '../assets/images/woodchuck-logo.png';
import squareMile from '../assets/images/squaremile-logo.png';

class  Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCiderList: [
        {
          name: 'Union Jack',
          brewer: 'Portland Cider Co',
          description: 'Oregon grown apples in a truly authentic English Cider',
          abv: '6.9%',
          price: '7',
          remaining: '20',
          image: pdxCider,
          id: 1
        },
        {
          name: 'Fever Bark Tonic',
          brewer: 'Square Mile Cider Co',
          description: 'Juniper berries and Cinchona bark blended in classic dry NW apple cider',
          abv: '6.3%',
          price: '6',
          remaining: '60',
          image: squareMile,
          id: 2
        },
        {
          name: 'Ruby Red Grapefruit',
          brewer: 'Austin Eastciders',
          description: 'Zippy, zesty, and refreshingly dry, from Austin Texas',
          abv: '4.7%',
          price: '3',
          remaining: '65',
          image: austinEastciders,
          id: 3
        },
        {
          name: 'Peach',
          brewer: 'Jack\'s Hard Cider',
          description: 'Light and fruity with a flirty peach aroma',
          abv:  '5.9%',
          price: '6',
          remaining: '75',
          image: jacksCider,
          id: 4
        },
        {
          name: 'Rose\' Hard Cider',
          brewer: 'Angry Orchard',
          description: 'Rare French apples and a kiss of hibiscus, similar to a semi-dry wine',
          abv:  '7.5%',
          price: '6',
          remaining: '18',
          image: angryOrchard,
          id: 5
        },
        {
          name: 'Apple Ginger Cider',
          brewer: 'Lonetree',
          description: 'British-Columbia craft cider with a zesty twist of real ginger',
          abv:  '5.5%',
          price: '6',
          remaining: '58',
          image: lonetree,
          id: 6
        },
        {
          name: 'Amber',
          brewer: 'Woodchuck Hard Cider',
          description: 'blend of apples and fermented with Champagne, the original blend from Middlebury, Vermont',
          abv: '6.9%',
          price: '7',
          remaining: '20',
          image: woodchuck,
          id: 7
        }
      ]
    };
    this.handleCiderSubmission = this.handleCiderSubmission.bind(this);
  }

  handleCiderSubmission(newCider) {
    var newMasterCiderList = this.state.masterCiderList.slice();
    newMasterCiderList.push(newCider);
    this.setState({masterCiderList: newMasterCiderList});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Admin' render={()=><NewCiderControl onAddNewCider={this.handleCiderSubmission}/>} />
          <Route path='/About' component={About} />
          <Route path='/CiderList' render={()=><CiderList ciderList={this.state.masterCiderList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default Router;

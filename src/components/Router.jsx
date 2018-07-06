import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CiderList from './CiderList';
import Error404 from './Error404';


function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/CiderList' component={CiderList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Router;

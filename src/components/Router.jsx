import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CiderList from './CiderList';


function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/CiderList' component={CiderList} />
      </Switch>
    </div>
  );
}

export default Router;

import React from 'react';
import { render } from 'react-dom';
import { 
  Router, 
  Route, 
  IndexRoute, 
  browserHistory 
} from 'react-router';

import AppComponent from './app'
import LandingComponent from './app/components/landing';
import AppsListComponent from './app/components/appslist';
import ConsultingComponent from './app/components/consulting';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={LandingComponent}></IndexRoute>
      <Route path="/apps" component={AppsListComponent}></Route>
      <Route path="/consulting" component={ConsultingComponent}></Route>
    </Route>
  </Router>
);

render(
  router,
  document.getElementById('root')
);

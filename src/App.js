import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense } from 'react';

import { routeConfig } from './routeConfig'
import './App.css'

const App = () => (
  <Router>
    <div>
      <ul className="link-box">
        {
          routeConfig.map(({ name, path, component }) => (<li key={name}><Link to={path}>{name}</Link></li>))
        }
      </ul>
    </div>
    <div className="suspense">
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {
            routeConfig.map(({ name, path, component }) => (<Route exact path={path} key={name} component={component} />))
          }
        </Switch>
      </Suspense>
    </div>
  </Router>
)


export default App;

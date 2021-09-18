import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';

const Home = lazy(() => import('../Home/Home'));
const About = lazy(() => import('../About/About'));
const Contact = lazy(() => import('../Contact/Contact'));

const App = () => {
    return (
      <>
        <Header />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
              <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
              <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
            </Switch>
          </Suspense>
        </Router>
      </>
    )
  }

export default App;

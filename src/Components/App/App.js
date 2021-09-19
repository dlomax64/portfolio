import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

/* Too slow
const Home = lazy(() => import('../Home/Home'));
const About = lazy(() => import('../About/About'));
const Contact = lazy(() => import('../Contact/Contact'));
*/

const App = () => {
    return (
      <>
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </Suspense>
        </Router>
      </>
    )
  }

export default App;

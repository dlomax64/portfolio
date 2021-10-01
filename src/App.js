import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Styles/App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const Page = () => {
  return (
    <div className='App'>
      <div id="pages">
        <Home id='home'/>
        <About id='about'/>
        <Contact id='contact'/>
      </div>
    </div>
  )
}

const App = () => {
    return (
      <div className='App'>
        <Router basename='/'>
      {/*<Header />*/}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
      </div>
    )
  }

export default App;


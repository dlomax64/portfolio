import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {
    return (
      <>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </>
    )
  }

export default App;

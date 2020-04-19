import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Home/>}/>
      <Route exact path={'/beers'} render={() => <Beers/>}/>
      <Route exact path={'/'} render={() => <BeerDetails/>}/>
      <Route exact path={'/'} render={() => <NewBeer/>}/>
    </Switch>
  );
}

export const App = () =>  {
    return (
      <div>
          <Navbar/>
          <Routes/>
      </div>
    );
};
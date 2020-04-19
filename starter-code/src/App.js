import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Beers } from './pages/Beers';
import { BeerDetails } from './pages/BeerDetails';
import { NewBeer } from './pages/NewBeer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} render={() => <Home/>}/>
      <Route exact path={'/beers'} render={() => <Beers/>}/>
      <Route exact path={'/beers/:id'} render={() => <BeerDetails/>}/>
      <Route exact path={'/new-beer'} render={() => <NewBeer/>}/>
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
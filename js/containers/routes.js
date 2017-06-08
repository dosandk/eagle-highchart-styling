import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import MainPage from '../components/mainPage';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route path='/' component={ MainPage } />
      </Switch>
    </div>
  );
};

export default Routes;

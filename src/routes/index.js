import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Admin from './Admin';
import Header from '../components/Header';

export default function createRoutes() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path={Home.path} component={Home.component} />
      {/* Build Route components from routeSettings */
      [
        Cart,Admin
        /* Add More Routes Here */
      ].map(({ path, component }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={`Route-${index}`} path={path} component={component} />
      ))}
    </Switch>
    </>
  );
}

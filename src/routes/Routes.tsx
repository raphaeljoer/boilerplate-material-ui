//resources
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//core-components
import { Home, NotFound } from '../pages';
//route-paths
import { path } from './Paths';

export function Routes() {
  return (
    <Switch>
      <Route exact path={path.root} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

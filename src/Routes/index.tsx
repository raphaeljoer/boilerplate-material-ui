//resources
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//core-components
import { Home, Jobs, NotFound } from '../Pages';
//route-paths
import { route } from './paths';

export function Routes() {
  return (
    <Switch>
      <Route exact path={route.root} component={Home} />
      <Route exact path={route.jobs} component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  );
}

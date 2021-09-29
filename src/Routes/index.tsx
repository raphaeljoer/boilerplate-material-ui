//resources
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//core-components
import { Home } from '../Pages/Home';
import { Jobs } from '../Pages/Jobs';
import { NotFound } from '../Pages/NotFound';
//route-paths
import { route } from './data';

export function Routes() {
  return (
    <Switch>
      <Route exact path={route.root} component={Home} />
      <Route exact path={route.jobs} component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  );
}

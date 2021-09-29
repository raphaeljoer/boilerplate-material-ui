//resources
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//core-components
import { Home } from '../Pages/Home';
import { Jobs } from '../Pages/Jobs';
import { NotFound } from '../Pages/NotFound';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jobs" component={Jobs} />
      <Route component={NotFound} />
    </Switch>
  );
}

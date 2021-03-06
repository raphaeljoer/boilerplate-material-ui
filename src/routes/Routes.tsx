//resources
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PipelineView } from 'views/Pipeline';
import { Wizard } from 'views/Wizard';
//core-components
import { Home, NotFound } from '../views';
//route-paths
import { path } from './Paths';

export function Routes() {
  return (
    <Switch>
      <Route exact path={path.root} component={Home} />
      <Route exact path={path.pipeline} component={PipelineView} />
      <Route exact path={path.wizard} component={Wizard} />
      <Route component={NotFound} />
    </Switch>
  );
}

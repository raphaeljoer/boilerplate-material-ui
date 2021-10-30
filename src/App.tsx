//core-components
import { Routes } from './routes/Routes';
//resources
import React from 'react';
import { Providers } from 'providers';

export function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

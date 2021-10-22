//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { WizardCreate } from './components/WizardCreate';
import { tips } from './components/WizardCreate/data/tips';

export function Wizard() {
  return (
    <Layout>
      <WizardCreate sx={{ bgcolor: 'grey.100' }} tips={tips} />
    </Layout>
  );
}

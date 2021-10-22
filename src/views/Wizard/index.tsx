//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { WizardCreate } from './components/WizardCreate';

export function Wizard() {
  return (
    <Layout>
      <WizardCreate sx={{ bgcolor: 'grey.100' }} />
    </Layout>
  );
}

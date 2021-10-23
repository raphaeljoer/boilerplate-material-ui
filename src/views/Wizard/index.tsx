//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { WizardCreate } from '../../components/WizardCreate/useCases/JobRequisition/presentation';
import { steps } from '../../components/WizardCreate/useCases/JobRequisition/data/samples/steps';

export function Wizard() {
  return (
    <Layout>
      <WizardCreate steps={steps} sx={{ bgcolor: 'grey.100' }} />
    </Layout>
  );
}

//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { JobReqWizardCreate } from '../../components/WizardCreate/useCases/JobRequisition/presentation';
import { steps } from '../../components/WizardCreate/useCases/JobRequisition/data/samples/steps';

export function Wizard() {
  return (
    <Layout>
      <JobReqWizardCreate steps={steps} sx={{ bgcolor: 'grey.100' }} />
    </Layout>
  );
}

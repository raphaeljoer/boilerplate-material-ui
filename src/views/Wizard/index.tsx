//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { JobReqWizardCreate } from '../../components/WizardCreate/useCases/JobRequisition';

export function Wizard() {
  return (
    <Layout>
      <JobReqWizardCreate sx={{ bgcolor: 'grey.100' }} />
    </Layout>
  );
}

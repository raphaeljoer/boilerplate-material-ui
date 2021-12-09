//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { JobReqCreationWizard } from '../../components/CreationWizard/useCases/JobRequisition';

export function Wizard() {
  return (
    <Layout>
      <JobReqCreationWizard sx={{ bgcolor: 'grey.100' }} />
    </Layout>
  );
}

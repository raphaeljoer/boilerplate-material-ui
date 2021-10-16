import React from 'react';
import { Pipeline } from 'components/Pipeline';
import { ApplicantsPipelineDataAdapter } from 'components/Pipeline/adapters/useCases/ApplicantsPipelineDataAdapter/applicantsPipelineDataAdapter';
import { applicantsExample } from 'components/Pipeline/data/applicantsExample';
import { Layout } from '../../components';

export function PipelineView() {
  const adapter = new ApplicantsPipelineDataAdapter();
  const data = adapter.adapt(applicantsExample);
  return (
    <Layout>
      <Pipeline data={data} />
    </Layout>
  );
}

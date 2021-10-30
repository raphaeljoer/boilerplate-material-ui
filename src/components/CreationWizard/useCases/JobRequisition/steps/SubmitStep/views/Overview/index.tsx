//material-ui
import { Box, Stack, Typography } from '@mui/material';
//core-components
import { Section } from 'components/CreationWizard/presentation/components';
import { sampleJobPositionDetails } from 'components/CreationWizard/useCases/JobRequisition/data/samples/jobPositionDetails';
//resources
import React from 'react';
//redux
import { useAppSelector } from 'hooks';
//utils
import { htmlSanitizer } from 'utils/security/htmlSanitizer';
import { Info } from '../../../../../../components/Info';

export function Overview() {
  const {
    jobPosition,
    team,
    currency,
    minSalary,
    maxSalary,
    minExperience,
    maxExperience
  } = useAppSelector((s) => s.creationWizard.jobReq.data.detail);

  const reason = useAppSelector((s) => s.creationWizard.jobReq.data.reason);

  const { jobTitle, jobDescription } = useAppSelector(
    (s) => s.creationWizard.jobReq.data.posting
  );

  const salary = `${currency?.label} ${minSalary} - ${currency?.label} ${maxSalary}`;
  const experience = `${minExperience} years - ${maxExperience} years`;

  return (
    <>
      <Section title="Details">
        <Stack spacing={2}>
          <Info caption="Job Position" title={jobPosition?.label} />

          <Info
            caption="Job Position"
            title={sampleJobPositionDetails.external_job_title}
          />
          <Info
            caption="Internal Job Title"
            title={sampleJobPositionDetails.internal_job_title}
          />
          <Info
            caption="External Job Title"
            title={sampleJobPositionDetails.external_job_title}
          />
          <Info
            caption="Description"
            title={sampleJobPositionDetails.description}
          />
          <Info caption="Type" title={sampleJobPositionDetails.type} />
          <Info
            caption="Cost Center"
            title={sampleJobPositionDetails.cost_center}
          />
          <Info
            caption="Required Travel"
            title={sampleJobPositionDetails.required_travel ? 'Yes' : 'No'}
          />

          <Info caption="Team" title={team?.label} />
          <Info caption="Salary" title={salary} />
          <Info caption="Experience" title={experience} />
        </Stack>
      </Section>
      <Section title="Reason">
        <Typography variant="body2">{reason}</Typography>
      </Section>
      <Section title="Posting">
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Job Title'}</Typography>
            <Typography variant="h6">{jobTitle}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Job Description'}</Typography>
            <Typography variant="body1">
              {htmlSanitizer(jobDescription || '')}
            </Typography>
          </Box>
        </Box>
      </Section>
    </>
  );
}

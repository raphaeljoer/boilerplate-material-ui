//material-ui
import { Box, Typography } from '@mui/material';
//resources
import React from 'react';
import { Section } from '../../../../presentation/components';
//data
import { useAppSelector } from 'hooks';
import { htmlSanitizer } from 'utils/security/htmlSanitizer';

export function SubmitStep() {
  const {
    jobPosition,
    team,
    currency,
    minSalary,
    maxSalary,
    minExperience,
    maxExperience
  } = useAppSelector((s) => s.jobReqWizardCreate.detail);

  const reason = useAppSelector((s) => s.jobReqWizardCreate.reason);

  const { jobTitle, jobDescription } = useAppSelector(
    (s) => s.jobReqWizardCreate.posting
  );

  const salary = `${currency?.label} ${minSalary} - ${currency?.label} ${maxSalary}`;
  const experience = `${minExperience} years - ${maxExperience} years`;

  return (
    <>
      <Section title="Details">
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Job Position'}</Typography>
            <Typography variant="h6">{jobPosition?.label}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Team'}</Typography>
            <Typography variant="h6">{team?.label}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Salary'}</Typography>
            <Typography variant="h6">{salary}</Typography>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography variant="caption">{'Experience'}</Typography>
            <Typography variant="h6">{experience}</Typography>
          </Box>
        </Box>
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

import { Paper, Typography, useTheme } from '@mui/material';
import { Section } from 'components/CreationWizard/presentation/components';
import React from 'react';
import { RiCheckLine } from 'react-icons/ri';
import { useAppSelector } from 'hooks';

export function Success() {
  const theme = useTheme();
  const jobTitle = useAppSelector(
    (s) => s.creationWizard.jobReq.data.posting.jobTitle
  );

  return (
    <Section title="Submitted">
      <Paper
        elevation={8}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          color: 'success'
        }}
      >
        <RiCheckLine size="4rem" color={theme.palette.success.light} />
      </Paper>
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ maxWidth: '60%', my: 5, mx: 'auto' }}
      >
        You have just submitted a new job requisition for the{' '}
        <span style={{ color: theme.palette.info.main }}>{jobTitle}</span>{' '}
        position.
      </Typography>
      <Typography variant="body1" textAlign="center">
        You must now wait for approval.
      </Typography>
    </Section>
  );
}

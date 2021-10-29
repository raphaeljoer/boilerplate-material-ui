//material-ui
import { Box } from '@mui/material';
//resources
import React from 'react';
//styles
import * as styles from './styles';
import { useAppSelector } from 'hooks';
import { NavButton } from './components/NavButton';

export function Nav() {
  const steps = useAppSelector((s) => s.wizardCreate.jobReq.control.steps);
  const activeStep = useAppSelector(
    (s) => s.wizardCreate.jobReq.control.activeStep
  );
  const isSubmitStep = steps[activeStep] === 'submit';

  return (
    <Box sx={styles.content}>
      <NavButton variant="prev" />
      <NavButton variant={isSubmitStep ? 'submit' : 'next'} />
    </Box>
  );
}

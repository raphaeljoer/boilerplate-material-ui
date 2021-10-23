//material-ui
import { Step, StepLabel, Stepper as MuiStepper } from '@mui/material';
import { TimelineConnector } from '@mui/lab';
//resources
import React from 'react';
//styles
import * as styles from './styles';

const connector = <TimelineConnector sx={styles.connector} />;

export function Stepper() {
  return (
    <MuiStepper activeStep={0} orientation="vertical" connector={connector}>
      <Step key={0}>
        <StepLabel>{'Posting'}</StepLabel>
      </Step>
      <Step key={1}>
        <StepLabel>{'Posting'}</StepLabel>
      </Step>
      <Step key={1}>
        <StepLabel>{'Posting'}</StepLabel>
      </Step>
    </MuiStepper>
  );
}

//material-ui
import { Step, StepLabel, Stepper as MuiStepper } from '@mui/material';
import { TimelineConnector } from '@mui/lab';
//resources
import React from 'react';
//styles
import * as styles from './styles';
import { Step as IStep } from '../../../types/step';

type Props = {
  activeStep: number;
  steps: IStep[];
};

export function Stepper({ steps, activeStep }: Props) {
  const connector = <TimelineConnector sx={styles.connector} />;

  return (
    <MuiStepper
      activeStep={activeStep}
      orientation="vertical"
      connector={connector}
    >
      {steps.map((s) => (
        <Step key={s.id}>
          <StepLabel>{s.label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}

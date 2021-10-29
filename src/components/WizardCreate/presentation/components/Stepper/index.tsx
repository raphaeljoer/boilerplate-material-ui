//material-ui
import { Step, StepLabel, Stepper as MuiStepper } from '@mui/material';
import { TimelineConnector } from '@mui/lab';
//resources
import React from 'react';
import { useAppSelector } from 'hooks';
//styles
import * as styles from './styles';
//data
import { Step as IStep } from '../../../types/step';

type Props = {
  steps: IStep[];
};

const connector = <TimelineConnector sx={styles.connector} />;

export function Stepper({ steps }: Props) {
  const state = useAppSelector((s) => s.wizardCreate.jobReq.control.state);
  const stepsList = useAppSelector((s) => s.wizardCreate.jobReq.control.steps);
  const activeStep = useAppSelector(
    (s) => s.wizardCreate.jobReq.control.activeStep
  );
  const isSuccess = state === 'success';

  return (
    <MuiStepper
      orientation="vertical"
      activeStep={isSuccess ? stepsList.length : activeStep}
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

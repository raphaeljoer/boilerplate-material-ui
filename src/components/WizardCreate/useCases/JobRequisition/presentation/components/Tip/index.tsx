//material-ui
import { Typography } from '@mui/material';
//resources
import React from 'react';
import { RiLightbulbLine } from 'react-icons/ri';
import { Step } from '../../../types/step';

type Props = {
  steps: Step[];
  activeStep: number;
};

export function Tip({ steps, activeStep }: Props) {
  return (
    <div>
      <RiLightbulbLine size="24" />
      <Typography variant="h6" mb={1}>
        {steps[activeStep].tip.title}
      </Typography>
      <Typography color="text.secondary" variant="body2">
        {steps[activeStep].tip.description}
      </Typography>
    </div>
  );
}

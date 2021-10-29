//material-ui
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//core-components
import { WizardCreate } from '../../presentation';
import { DetailsStep, ReasonStep, PostingStep, SubmitStep } from './steps';
//resources
import React from 'react';
//data
import { steps } from './data/samples/steps';
import { tips } from './data/samples/tips';
//types
type Props = { sx?: SxProps<Theme> };

export function JobReqWizardCreate({ sx }: Props) {
  return (
    <WizardCreate steps={steps} tips={tips} sx={sx}>
      <DetailsStep />
      <ReasonStep />
      <PostingStep />
      <SubmitStep />
    </WizardCreate>
  );
}

//material-ui
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'hooks';
//core-components
import { WizardCreate } from 'components/WizardCreate/presentation';
//resources
import React, { useCallback, useEffect } from 'react';
//redux
import {
  jobReqSetNextStep,
  jobReqSetPrevStep,
  jobReqTogglePrevStepAvailable
} from 'store/slices/WizardCreate/useCases/jobReqWizardCreate';
//steps
import { DetailsStep } from './steps/DetailsStep';
import { ReasonStep } from './steps/ReasonStep';
//data
import { steps } from './data/samples/steps';
//types

type Props = {
  sx?: SxProps<Theme>;
};

export function JobReqWizardCreate({ sx }: Props) {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((s) => s.jobReqWizardCreate.activeStep);

  useEffect(() => {
    dispatch(jobReqTogglePrevStepAvailable(activeStep > 0));
  }, [activeStep, dispatch]);

  const handleNext = useCallback(() => {
    dispatch(jobReqSetNextStep());
  }, [dispatch]);

  const handlePrev = useCallback(() => {
    dispatch(jobReqSetPrevStep());
  }, [dispatch]);

  return (
    <WizardCreate
      sx={sx}
      steps={steps}
      activeStep={activeStep}
      onNext={handleNext}
      onPrev={handlePrev}
    >
      <DetailsStep />
      <ReasonStep />
    </WizardCreate>
  );
}

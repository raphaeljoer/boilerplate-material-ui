//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'hooks';
//resources
import React, { useCallback } from 'react';
import {
  jobReqSetNextStep,
  jobReqSetPrevStep
} from 'store/slices/WizardCreate/useCases/jobReqWizardCreate';
//core-components
import { Tip, Welcome, Nav, Stepper } from './components';
//styles
import * as styles from './styles';
import { Step } from '../types/step';
import { DetailsStep } from './steps/DetailsStep';
//types

type Props = {
  sx?: SxProps<Theme>;
  steps: Step[];
};

export function JobReqWizardCreate({ steps, sx }: Props) {
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((s) => s.jobReqWizardCreate.activeStep);

  const handleNext = useCallback(() => {
    dispatch(jobReqSetNextStep());
  }, [dispatch]);

  const handlePrev = useCallback(() => {
    dispatch(jobReqSetPrevStep());
  }, [dispatch]);

  return (
    <Grid sx={{ ...styles.grid, ...sx }}>
      <Box sx={styles.main}>
        <Grid sx={styles.content.grid}>
          <Box sx={styles.content.left}>
            <Welcome />
            <Tip steps={steps} activeStep={activeStep} />
          </Box>
          <Box sx={styles.content.main}>
            <DetailsStep />
          </Box>
          <Box sx={styles.content.right}>
            <Stepper steps={steps} activeStep={activeStep} />
          </Box>
        </Grid>
      </Box>
      <Box sx={styles.footer}>
        <Nav onPrev={handlePrev} onNext={handleNext} />
      </Box>
    </Grid>
  );
}

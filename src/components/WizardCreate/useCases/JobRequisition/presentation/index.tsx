//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'hooks';
//resources
import React, { useCallback, useMemo } from 'react';
import { JobReq } from 'components/WizardCreate/useCases/JobRequisition/entities/JobReq';
import {
  jobReqSetNextStep,
  jobReqSetPrevStep
} from 'store/slices/WizardCreate';
//core-components
import { Tip, Welcome, Footer, Stepper } from './components';
//styles
import * as styles from './styles';
import { Step } from '../types/step';
import { DetailsStep } from './steps/DetailsStep';
//types

type Props = {
  sx?: SxProps<Theme>;
  steps: Step[];
};

export function WizardCreate({ steps, sx }: Props) {
  const jobReq = useMemo(() => new JobReq(), []);

  const dispatch = useAppDispatch();
  const activeStep = useAppSelector((s) => s.jobReqWizardCreate.activeStep);

  const handleNext = useCallback(() => {
    dispatch(jobReqSetNextStep());
    jobReq.next();
  }, [dispatch, jobReq]);

  const handlePrev = useCallback(() => {
    dispatch(jobReqSetPrevStep());
    jobReq.prev();
  }, [dispatch, jobReq]);

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
      <Footer onPrev={handlePrev} onNext={handleNext} />
    </Grid>
  );
}
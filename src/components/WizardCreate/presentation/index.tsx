//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//core-components
import { Nav, Stepper, Tip, Welcome } from './components';
//styles
import * as styles from './styles';
//types
import { Step } from '../types/step';

type Props = {
  sx?: SxProps<Theme>;
  steps: Step[];
  activeStep: number;
  children: JSX.Element[];
  onNext: () => void;
  onPrev: () => void;
};

export function WizardCreate({
  activeStep,
  steps,
  children,
  sx,
  onPrev,
  onNext
}: Props) {
  if (!children) {
    console.warn('You must provide multiple steps for wizard create.');
    return null;
  }
  return (
    <Grid sx={{ ...styles.grid, ...sx }}>
      <Box sx={styles.main}>
        <Grid sx={styles.content.grid}>
          <Box sx={styles.content.left}>
            <Welcome />
            <Tip steps={steps} activeStep={activeStep} />
          </Box>
          <Box sx={styles.content.main}>{children[activeStep]}</Box>
          <Box sx={styles.content.right}>
            <Stepper steps={steps} activeStep={activeStep} />
          </Box>
        </Grid>
      </Box>
      <Box sx={styles.footer}>
        <Nav onPrev={onPrev} onNext={onNext} />
      </Box>
    </Grid>
  );
}

//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
import { useAppSelector } from 'hooks';
//core-components
import { Nav, Stepper, Tip, Welcome } from './components';
//styles
import * as styles from './styles';
//types
import { Step } from '../types/step';
import { ITip } from '../types/tip';

type Props = {
  sx?: SxProps<Theme>;
  steps: Step[];
  tips: ITip[];
  children: JSX.Element[];
};

export function CreationWizard({ steps, tips, sx, children }: Props) {
  const activeStep = useAppSelector(
    (s) => s.creationWizard.jobReq.control.activeStep
  );

  return (
    <Grid sx={{ ...styles.grid, ...sx }}>
      <Box sx={styles.container}>
        <Box sx={styles.main}>
          <Grid sx={styles.content.grid}>
            <Box sx={styles.content.left}>
              <Welcome />
              <Tip tips={tips} />
            </Box>
            <Box sx={styles.content.main}>{children[activeStep]}</Box>
            <Box sx={styles.content.right}>
              <Stepper steps={steps} />
            </Box>
          </Grid>
        </Box>
      </Box>
      <Box sx={styles.footer}>
        <Nav />
      </Box>
    </Grid>
  );
}

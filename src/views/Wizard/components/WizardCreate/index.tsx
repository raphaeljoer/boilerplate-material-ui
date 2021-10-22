//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//core-components
import { Section, Tip, Welcome } from './components';
//styles
import * as styles from './styles';
//types
import { ITip } from './types/tip';

type Props = {
  sx?: SxProps<Theme>;
  tips: ITip[];
};

export function WizardCreate({ tips, sx }: Props) {
  return (
    <Grid sx={{ ...styles.grid, ...sx }}>
      <Box sx={styles.main}>
        <Grid sx={styles.content.grid}>
          <Box sx={styles.content.left}>
            <Welcome />
            <Tip tips={tips} activeStep={0} />
          </Box>
          <Box sx={styles.content.main}>
            <Section title="title" description="description">
              <p>body</p>
            </Section>
          </Box>
          <Box sx={styles.content.right}>right</Box>
        </Grid>
      </Box>
      <Box sx={styles.footer}>footer</Box>
    </Grid>
  );
}

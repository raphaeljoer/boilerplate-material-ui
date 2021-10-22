//material-ui
import { Box, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
//resources
import React from 'react';
//core-components
import { Section, Tip, Welcome } from './components';
//styles
import * as styles from './styles';

type Props = {
  sx?: SxProps<Theme>;
};

export function WizardCreate({ sx }: Props) {
  return (
    <Grid sx={{ ...styles.grid, ...sx }}>
      <Box sx={styles.main}>
        <Grid sx={styles.content.grid}>
          <Box sx={styles.content.left}>
            <Welcome />
            <Tip
              tips={[{ title: 'Welcome', description: 'Description' }]}
              activeStep={0}
            />
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

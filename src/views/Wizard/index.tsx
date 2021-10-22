//material-ui
import { Box, Grid } from '@mui/material';
//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
//styles
import * as styles from './styles';

export function Wizard() {
  return (
    <Layout>
      <Grid sx={styles.grid}>
        <Box sx={styles.main}>
          <Grid sx={styles.content.grid}>
            <Box sx={styles.content.left}>left</Box>
            <Box sx={styles.content.center}>center</Box>
            <Box sx={styles.content.right}>right</Box>
          </Grid>
        </Box>
        <Box sx={styles.footer}>footer</Box>
      </Grid>
    </Layout>
  );
}

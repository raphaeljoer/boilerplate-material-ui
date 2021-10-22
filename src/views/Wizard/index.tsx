//material-ui
import { Box, Grid } from '@mui/material';
//resources
import React from 'react';
//core-components
import { Layout } from '../../components';
import { Section, Tip } from './components';
import { Welcome } from './components/Welcome';
//styles
import * as styles from './styles';

export function Wizard() {
  return (
    <Layout>
      <Grid sx={styles.grid}>
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
    </Layout>
  );
}

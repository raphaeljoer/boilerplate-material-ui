import React from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from './components/Layout';

export function App() {
  return (
    <Layout>
      <Box p={2}>
        <Typography variant="h2" color="primary">
          Hello World
        </Typography>
      </Box>
    </Layout>
  );
}

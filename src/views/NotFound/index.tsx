import React from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../../components/Layout';

export function NotFound() {
  return (
    <Layout>
      <Box p={2}>
        <Typography variant="h2" color="primary">
          404 - Not Found
        </Typography>
      </Box>
    </Layout>
  );
}

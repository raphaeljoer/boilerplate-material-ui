import React from 'react';
import { Box, Button } from '@mui/material';
import { Layout } from './components/Layout';
import { RiDashboardLine } from 'react-icons/ri';

export function App() {
  return (
    <Layout>
      <Box p={2}>
        <Button
          variant="text"
          color="primary"
          size="medium"
          startIcon={<RiDashboardLine />}
        >
          Job Applications
        </Button>
      </Box>
    </Layout>
  );
}

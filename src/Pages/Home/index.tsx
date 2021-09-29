import React from 'react';
import { Box, Typography, Input } from '@mui/material';
import { Main } from '../../components/Main';

export function Home() {
  return (
    <Main>
      <Box p={2}>
        <Typography variant="h2" color="primary">
          Home
        </Typography>
        <Input />
      </Box>
    </Main>
  );
}

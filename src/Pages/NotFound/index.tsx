import React from 'react';
import { Box, Typography } from '@mui/material';
import { Main } from '../../components/Main';

export function NotFound() {
  return (
    <Main>
      <Box p={2}>
        <Typography variant="h2" color="primary">
          404 - Not Found
        </Typography>
      </Box>
    </Main>
  );
}

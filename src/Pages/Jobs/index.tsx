import React from 'react';
import { Box, Typography } from '@mui/material';
import { Main } from '../../Components/Main';

export function Jobs() {
  return (
    <Main>
      <Box p={2}>
        <Typography variant="h2" color="primary">
          Jobs
        </Typography>
      </Box>
    </Main>
  );
}

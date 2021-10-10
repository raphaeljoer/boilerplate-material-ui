//material-ui
import { Box, Typography } from '@mui/material';
//resources
import React from 'react';
import * as styles from './styles';

export function Head() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Title</Typography>
    </Box>
  );
}
